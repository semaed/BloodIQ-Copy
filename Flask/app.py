#!/usr/bin/python3

from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import sys
from numberExtract import Extract

app = Flask(__name__)

sys.path.append('/home/yaniel/github/BloodIQ')
print(sys.path)
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'pdf', 'jpg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'})
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({'message': 'File uploaded successfully'})
    else:
        return jsonify({'error': 'Invalid file type'})


@app.route('/generate-response', methods=['GET'])
def generate_response():
    extract = Extract()
    response = extract.generate_response()
    return jsonify({'response': response})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
