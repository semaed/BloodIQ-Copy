#!/usr/bin/python3  # Shebang line indicating the script is run using Python 3

from flask import Flask, request, jsonify  # Importing Flask to create a web application, handle requests, and jsonify responses
from werkzeug.utils import secure_filename  # Importing secure_filename to sanitize file names for security
import os  # Importing the os module for interacting with the operating system
import sys  # Importing sys for system-specific parameters and functions
from numberExtract import Extract  # Importing the Extract class from the numberExtract module

app = Flask(__name__)  # Creating a new Flask web application instance

sys.path.append('/home/yaniel/github/BloodIQ')  # Adding a specific directory to Python's system path for module searching
print(sys.path)  # Printing the system path (useful for debugging)

UPLOAD_FOLDER = './uploads'  # Defining the directory to store uploaded files
ALLOWED_EXTENSIONS = {'pdf', 'jpg'}  # Defining the set of allowed file extensions for uploads

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER  # Configuring the Flask app to use the defined upload folder

# Function to check if the file has an allowed extension
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route to handle file uploads
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})  # Return error if no file part in request
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'})  # Return error if no file was selected for upload
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)  # Sanitize the file name
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))  # Save the file to the upload folder
        return jsonify({'message': 'File uploaded successfully'})  # Return a success message
    else:
        return jsonify({'error': 'Invalid file type'})  # Return an error for invalid file types

# Route to generate a response based on uploaded data
@app.route('/generate-response', methods=['GET'])
def generate_response():
    extract = Extract()  # Create an instance of the Extract class
    response = extract.generate_response()  # Use the Extract instance to generate a response
    return jsonify({'response': response})  # Return the response in JSON format

# Main block to run the Flask app if this script is executed as the main program
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Running the app on host 0.0.0.0, port 5000 with debug mode on
