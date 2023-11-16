import json  # Importing the json module to work with JSON data

def load_json(file_path):
    # Function to load JSON data from a file specified by 'file_path'
    try:
        # Trying to open and read the file
        with open(file_path, 'r') as json_file:  # Opening the file in read mode
            data = json.load(json_file)  # Loading the data from the JSON file
            return data  # Returning the data if successful
    except FileNotFoundError:
        # Handling the case where the file is not found
        print(f"File not found: {file_path}")  # Printing an error message
        return {}  # Returning an empty dictionary as a fallback
    except json.JSONDecodeError as e:
        # Handling JSON decoding errors (e.g., if the file content is not valid JSON)
        print(f"JSON decoding error: {e}")  # Printing the specific decoding error
        return {}  # Returning an empty dictionary as a fallback
    except Exception as e:
        # Handling any other exceptions that might occur
        print(f"An error occurred: {e}")  # Printing the error message
        return {}  # Returning an empty dictionary as a fallback

# The following lines are commented out, they show an example of how to use the function:
# json_path = 'bloodiqjson.json'  # Example file path
# results = load_json(json_path)  # Using the function to load JSON data from the specified path
# print(results)  # Printing the results
