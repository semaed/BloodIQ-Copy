import json


def load_json(file_path):
    try:
        with open(file_path, 'r') as json_file:
            data = json.load(json_file)
            return data
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return {}
    except json.JSONDecodeError as e:
        print(f"JSON decoding error: {e}")
        return {}
    except Exception as e:
        print(f"An error occurred: {e}")
        return {}


"""json_path = 'bloodiqjson.json'
results = load_json(json_path)
print(results)"""
