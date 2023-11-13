#!/usr/bin/python3
from flask import Flask, jsonify
import os
import openai
from imageCapture import Image_manipulation
from compare_ranges import compare_ranges
from json_to_dict import load_json

app = Flask(__name__)

@app.route('/execute', methods=['GET'])
def execute_code():
    # The OpenAI API key
    api_key = os.environ["OPENAI_API_KEY"]
    openai.api_key = api_key

    numbers = []
    numbers_buffer = []
    count = 0

    res = Image_manipulation.dataProcessing(Image_manipulation.rawData)

    for item in res:
        if item in ['HIGH', 'LOW']:
            continue
        elif item.replace('.', '', 1).isdigit():
            count += 1
            numbers_buffer.append(float(item))
            if count == 3:
                numbers.append(numbers_buffer[0])
                numbers_buffer = []
                count = 0
        else:
            if numbers_buffer:
                numbers.append(numbers_buffer[0])
            numbers_buffer = []
            count = 0

    keys = ['WHITE BLOOD CELL', 'RED BLOOD CELL', 'HEMOGLOBIN', 'HEMATOCRIT',
            'MCV', 'MCH', 'MCHC', 'RDW', 'RDW-SD', 'PLATELET COUNT (PLT)', 'MPV',
            'NEUTROPHILS', 'LYMPHOCYTES', 'MONOCYTES', 'EOSINOPHILS', 'BASOPHILS',
            'NRBC', 'IG', 'NEUTROPHILS ABSOLUTE VALUE',
            'LYMPHOCYTES ABSOLUTE VALUE', 'MONOCYTES ABSOLUTE VALUE',
            'EOSINOPHILS ABSOLUTE VALUE', 'BASOPHILS ABSOLUTE VALUE', 'NRBC',
            'IG']
    results = dict(zip(keys, numbers))
    """print("Extracted numbers:", numbers)
    print("Dictionary:", results)"""


    json_path = 'bloodiqjson.json'
    ranges = load_json(json_path)

    comparison = compare_ranges(results, ranges)
    "print(comparison)"


    # Combine all parameter values into a single string
    combined_values = ' '.join(f"{key}: {value}" for key, value in comparison.items())

    # define the script to be used as a prompt
    script = "Having these blood test values in High and Low might mean: "
    # Generate a prompt asking about the meaning of the combined values and asking for advice
    combined_prompt = script + "{answer by ChatGPT} And our advice would be: What advice can you give me based on these parameters? \n" + combined_values

    # Using the ChatGPT API to generate a response based on the combined prompt with a medical persona
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": combined_prompt}
        ],
        max_tokens=1000,  # Set the desired number of tokens for the response
        temperature=0.5 # Set the temperature to 0.5 to make the response less random
    )

    # Get the generated response from the API
    generated_response = response['choices'][0]['message']['content']

    'print("Prompt:", combined_prompt)'
    print("Generated Response:", generated_response)

    return jsonify({"Generated Response": generated_response})

if __name__ == '__main__':
    app.run(debug=True)