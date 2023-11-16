import firebase_admin  # Import the firebase_admin module for Firebase functionality
from firebase_admin import credentials  # Import credentials sub-module for authentication
from firebase_admin import db  # Import db sub-module for database interaction

# Fetch and use credentials from a JSON file for Firebase authentication
cred = credentials.Certificate('firebase_sdk.json')  # Load Firebase credentials from a JSON file

# Initialize the Firebase application with the specified credentials and database URL
firebase_admin.initialize_app(cred, {
    'databaseURL': 'DB URL'  # Placeholder for the Firebase database URL
})

# The commented section below is for adding data to the Firebase database
"""
ref = db.reference('/')  # Get a reference to the root of the Firebase database
ref.set({  # Set or update data at the reference
    'BASOPHILS': {
        'high_range': 1,
        'low_range': 0
    },
    'BASOPHILS ABSOLUTE VALUE': {
        'high_range': 0.2,
        'low_range': 0
    },
    'EOSINOPHILS': {
        'high_range': 5.4,
        'low_range': 0
    },
    'EOSINOPHILS ABSOLUTE VALUE': {
        'high_range': 0.7,
        'low_range': 0
    },
    'HEMATOCRIT (HCT)': {
        'high_range': 51,
        'low_range': 34.1
    },
    'HEMOGLOBIN (HGB)': {
        'high_range': 17.5,
        'low_range': 11.2
    },
    'IG': None,
    'IG%': None,
    'LYMPHOCYTES': {
        'high_range': 53.1,
        'low_range': 19.3
    },
    'LYMPHOCYTES ABSOLUTE VALUE': {
        'high_range': 3.7,
        'low_range': 1.2
    },
    'MCH': {
        'high_range': 32.2,
        'low_range': 25.6
    },
    'MCHC': {
        'high_range': 36.5,
        'low_range': 32.2
    },
    'MCV': {
        'high_range': 94.8,
        'low_range': 79
    },
    'MONOCYTES': {
        'high_range': 9.3,
        'low_range': 1.7
    },
    'MONOCYTES ABSOLUTE VALUE': {
        'high_range': 0.6,
        'low_range': 0.1
    },
    'MPV': {
        'high_range': 10.4,
        'low_range': 7.4
    },
    'NEUTROPHILS': {
        'high_range': 71.1,
        'low_range': 34
    },
    'NEUTROPHILS ABSOLUTE VALUE': {
        'high_range': 6.1,
        'low_range': 1.6
    },
    'NRBC': None,
    'NRBC%': None,
    'PLATELET COUNT (PLT)': {
        'high_range': 369,
        'low_range': 163
    },
    'RDW': {
        'high_range': 11,
        'low_range': 11
    },
    'RDW-SD': None,
    'RED BLOOD CEL': {
        'high_range': 6.08,
        'low_range': 3.93
    },
    'WHITE BLOOD CELL': {
        'high_range': 10,
        'low_range': 4
    }
})
"""

# Function to retrieve data from Firebase for a given key
def get_data_from_firebase(data_key):
    ref = db.reference(data_key)  # Create a database reference for the specified key
    return ref.get()  # Retrieve and return the data from Firebase

# Example usage of the function
data_key = 'BASOPHILS'  # Defining a key to retrieve data for
result = get_data_from_firebase(data_key)  # Retrieving data from Firebase
print(result)  # Printing the retrieved data
