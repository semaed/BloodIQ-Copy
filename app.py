#!/usr/bin/python3  # Shebang line to indicate that the script is run with Python 3

from flask import Flask, request, jsonify  # Importing necessary modules from Flask
from werkzeug.utils import secure_filename  # Importing utility for secure filenames
import os  # Importing os module for interacting with the operating system
import sys  # Importing sys module for system-specific parameters and functions
from numberExtract import Extract  # Importing Extract class from numberExtract module
from flask_cors import CORS, cross_origin  # Importing CORS to handle Cross-Origin Resource Sharing

app = Flask(__name__)  # Creating an instance of the Flask class
CORS(app)  # Enabling CORS for the Flask app

sys.path.append('/home/yaniel/github/BloodIQ')  # Adding a directory to Python's module search path
print(sys.path)  # Printing the updated system path

UPLOAD_FOLDER = './Flask/uploads'  # Setting the upload folder for files
ALLOWED_EXTENSIONS = {'pdf', 'jpg'}  # Defining allowed file extensions

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER  # Configuring the app to use the defined upload folder

# Function to check if the uploaded file has an allowed extension
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route for handling file uploads
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})  # Return error if no file is uploaded
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'})  # Return error if no file is selected
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)  # Secure the filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))  # Save the file
        return jsonify({'message': 'File uploaded successfully'})  # Return success message
    else:
        return jsonify({'error': 'Invalid file type'})  # Return error for invalid file type

# Route for generating responses
@app.route('/generate-response', methods=['GET'])
@cross_origin()  # Allow cross-origin requests for this route
def generate_response():
    extract = Extract()  # Creating an instance of the Extract class
    response = extract.generate_response()  # Generating a response
    return jsonify({'response': response})  # Returning the response as JSON

# Main block to run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)  # Running the app on host 0.0.0.0, port 5001 with debug mode on
