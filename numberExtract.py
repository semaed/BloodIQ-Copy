#!/usr/bin/python3
import os
import openai
from imageCapture import Image_manipulation
from compare_ranges import compare_ranges
from json_to_dict import load_json

class Extract():
    
    def __init__(self):
        self.api_key = os.environ["OPENAI_API_KEY"]
        openai.api_key = self.api_key
        self.numbers = []
        self.numbers_buffer = []
        self.count = 0
        self.keys = ['WHITE BLOOD CELL', 'RED BLOOD CELL', 'HEMOGLOBIN', 'HEMATOCRIT',
                     'MCV', 'MCH', 'MCHC', 'RDW', 'RDW-SD', 'PLATELET COUNT (PLT)', 'MPV',
                     'NEUTROPHILS', 'LYMPHOCYTES', 'MONOCYTES', 'EOSINOPHILS', 'BASOPHILS',
                     'NRBC', 'IG', 'NEUTROPHILS ABSOLUTE VALUE',
                     'LYMPHOCYTES ABSOLUTE VALUE', 'MONOCYTES ABSOLUTE VALUE',
                     'EOSINOPHILS ABSOLUTE VALUE', 'BASOPHILS ABSOLUTE VALUE', 'NRBC',
                     'IG']
        self.json_path = 'bloodiqjson.json'

    def process_data(self):
        res = Image_manipulation.dataProcessing(Image_manipulation.rawData)
        for item in res:
            if item in ['HIGH', 'LOW']:
                continue
            elif item.replace('.', '', 1).isdigit():
                self.count += 1
                self.numbers_buffer.append(float(item))
                if self.count == 3:
                    self.numbers.append(self.numbers_buffer[0])
                    self.numbers_buffer = []
                    self.count = 0
            else:
                if self.numbers_buffer:
                    self.numbers.append(self.numbers_buffer[0])
                self.numbers_buffer = []
                self.count = 0
        return self.numbers

    def create_dict(self):
        results = dict(zip(self.keys, self.process_data()))
        return results

    def compare(self):
        ranges = load_json(self.json_path)
        comparison = compare_ranges(self.create_dict(), ranges)
        return comparison

    def generate_prompt(self):
        combined_values = ' '.join(f"{key}: {value}" for key, value in self.compare().items())
        script = "Having these blood test values in High and Low might mean: "
        combined_prompt = script + "{answer by ChatGPT} And our advice would be: What advice can you give me based on these parameters? \n" + combined_values
        return combined_prompt

    def generate_response(self):
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": self.generate_prompt()}
            ],
            max_tokens=1000,  # Set the desired number of tokens for the response
            temperature=0.5 # Set the temperature to 0.5 to make the response less random
        )
        generated_response = response['choices'][0]['message']['content']
        return generated_response

if __name__ == "__main__":
    extract = Extract()
    print("Generated Response:", extract.generate_response())