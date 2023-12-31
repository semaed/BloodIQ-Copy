<a name="top"></a>
<h1><img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Logo.jpeg" alt="BloodIQ Logo" width="80" height="80"/> BloodIQ</h1>
<p align="center">
  <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Banner/BloodIQ.jpeg" width="750" height="200">
</p>

## **📋 Table of Contents**
1. [Introduction](#introduction)
2. [Synopsis](#synopsis)
3. [Project](#Project)
  - [Description of each file](#description-of-each-file)
  - [Environment](#environment)
  - [What's The Next Step](#whats-the-next-step)
  - [Contact](#contact)
  - [Contributing](#contributing)
  - [Project Status](#project-status)
5. [Contributors](#contributors)

## **📜Introduction**
BloodIQ is a sophisticated Python-based tool designed to analyze Clinical Laboratories results. It utilizes advanced image 
processing techniques, data extraction, and AI-powered interpretation to provide insights into blood test parameters, 
helping users understand their medical reports in a more accessible way.

[Back to Top](#top)

## **💡Synopsis**
BloodIQ automates the process of extracting numerical data from blood test reports (both PDF and image formats), 
compares these values against standard medical ranges, and uses OpenAI's GPT-3.5 model to interpret the results. 
It's designed to assist both medical professionals and patients in quick and accurate analysis of blood test data.

[Back to Top](#top)

## **💽Project**

### **🗃Description of each file**
- `pending.jsx`: A React component for capturing pictures using a webcam, uploading files, and sending them to a server with Axios.
- `firebase.config.jsx`: Configures Firebase for a React application, including Firebase Authentication.
- `CreateAccount.jsx`: React component for user account creation, displaying a registration form and integrating with Firebase.
- `Home.jsx`: React home page component with a welcome message and a link to the login page.
- `LoadingResults.jsx`: React component displaying a loading animation using `styled-components` and `ClockLoader`.
- `Login.jsx`: React login component with a form for user authentication using Firebase.
- `Results.jsx`: Displays blood test results, including a PDF document viewer, in a React component.
- `TestProvider.jsx`: Manages uploading and analyzing blood test results, file uploads, and displays a loading indicator during processing.
- `firebase.config.jsx` (Second Instance): Similar to the first `firebase.config.jsx` but with additional Axios configuration using Firebase authentication tokens.
- `LoginForm.jsx`: React component for the login form, handling authentication via Firebase.
- `RegistrationForm.jsx`: React registration form component, managing new user registration with Firebase.
- `style.css`: CSS stylesheet with common styles for forms, buttons, and UI elements.
- `Disclaimer.jsx`: React component for displaying a disclaimer message using `styled-components`.
- `Logo.jsx` and `Logo_[2-4].jsx`: React components for displaying different versions of a logo using `styled-components`.
- `AuthContext.jsx`: React context file for authentication state and logic.
- `routes.jsx`: Defines React application routing, including private and public routes.
- `App.css`: Main application stylesheet for global styles and theming.
- `App.jsx`: Main React component that includes routing and wraps around the application.
- `main.jsx`: Entry point for the React application, setting up the React DOM, routing, and Firebase context.
- `app.py`: Python Flask app for file upload endpoints and processing blood test results.
- `bloodiqjson.json`: JSON file with reference ranges for blood test parameters.
- `compare_ranges.py`: Python script to compare blood test results with reference ranges.
- `firebase_db.py`: Python script for Firebase database interactions, including data reading and writing.
- `firebase_sdk.json`: Firebase SDK credentials configuration file.
- `imageCapture.py`: Python script for capturing and processing images from a PDF or webcam for text extraction.
- `json_to_dict.py`: Python utility script to load JSON data into a dictionary.
- `numberExtract.py`: Extracts numbers from images, compares with reference ranges, and generates responses using OpenAI's GPT-3.
- `start.py`: Python Flask script to initialize the web application.
- `testFile.py`: Python script defining a parent class with properties used for calling the correct file.


[Back to Top](#top)


### **🌎Environment**
**Languages**: 
  -  <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Python.png" alt="Python" width="30" height="30"/> **Python**
      - **External Libraries***: <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Firebase.png" alt="Firebase" width="30" height="30"/> firebase-admin, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Tesseract.png" alt="Tesseract" width="30" height="30"/> pytesseract, pdf2image, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/OpenCV.png" alt="OpenCV" width="30" height="30"/> cv2, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/OpenAI.png" alt="OpenAI" width="30" height="30"/> openai
      - **APIs**: <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Firebase.png" alt="Firebase" width="30" height="30"/> Firebase, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/OpenAI.png" alt="OpenAI" width="30" height="30"/> OpenAI GPT-3.5
  - <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/JavaScript.png" alt="JavaScript" width="30" height="30"/> **JavaScript**
    - **External Libraries***: <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/React.png" alt="React" width="30" height="30"/> React, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/React.png" alt="React" width="30" height="30"/> React-Dom, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/React.png" alt="React" width="30" height="30"/> React-PDF, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Vite.png" alt="Vite" width="30" height="30"/> Vite, <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Axios.png" alt="Axios" width="120" height="30"/> Axios
  - <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Flask.png" alt="Flask" width="30" height="30"/> **Flask**
  - <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/CSS.png" alt="CSS" width="30" height="30"/> **Cascading Style Sheets (CSS)**
  - <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Figma.png" alt="Figma" width="30" height="30"/> **Figma**
   
[Back to Top](#top)

### **📡What's The Next Step**
- **Enhanced Versatility in Reading Formats**: We aim to significantly upgrade BloodIQ's capabilities to interpret and analyze not just every format of blood tests but also various formats of clinical laboratory tests. This enhancement will ensure that BloodIQ can process data from a diverse range of sources and formats, including both standard and specialized medical tests. By accommodating a wide spectrum of testing formats, BloodIQ aspires to be a universally adaptable tool for medical data analysis, offering unparalleled convenience and accuracy in health result interpretations.

- **Broader Scope for Clinical Results**: In our vision to expand the scope of BloodIQ, we plan to include not only a wider range of clinical laboratory results but also data from specialized medical studies such as X-rays, MRIs, and other diagnostic tests. This expansion aims to make BloodIQ a comprehensive tool for interpreting a variety of health-related test results, offering users a more complete understanding of their overall health.

- **Integration with Healthcare Apps**: Develop capabilities for BloodIQ to seamlessly integrate with other healthcare applications, enhancing user experience and utility across different platforms.

- **Medical File Sharing**: Implement a secure feature for users to share their medical files with healthcare professionals or their personal medic, facilitating better communication and care coordination.
- **Advanced AI-Powered Health Insights**: In the future, we aim to upgrade from GPT-3.5 to more advanced AI models as they become available. This upgrade will enhance our ability to provide users with even more personalized and accurate health insights and recommendations, based on their test results and broader health data. The adoption of newer AI technologies will ensure that BloodIQ remains at the forefront of innovative health analysis tools.
- **Automated Trend Analysis**: Introduce a feature to track and analyze trends in blood test results over time, helping users and healthcare providers spot significant changes or patterns.
- **User-Friendly Dashboard**: Design an interactive dashboard that provides a comprehensive overview of test results, making it easier for users to understand and track their health metrics.
- **Comprehensive Health Services Locator**: An upcoming enhancement to BloodIQ is a sophisticated map tool that will help users locate not only the nearest clinical laboratories but also facilities offering specialized medical studies like X-rays, MRIs, and other diagnostic services. This feature is designed to provide users with easy access to a broad range of healthcare services, ensuring they can find the most suitable locations for their specific health testing and diagnostic needs.
- **Direct Scheduling for Specialized Medical Services**: Alongside the locator, we are developing a feature for direct appointment scheduling within the app. This will enable users to conveniently book appointments not just with clinical laboratories but also with centers offering specialized medical studies. This streamlined scheduling process is aimed at simplifying the steps to access varied and specialized healthcare services, making it easier and more efficient for users to manage their healthcare appointments.
- **Community Support Platform**: Establish a community forum within the app where users can share experiences, seek support, and discuss health-related topics.

These planned enhancements are part of our commitment to making BloodIQ a more comprehensive, user-friendly, and integrative tool in the health tech ecosystem.

[Back to Top](#top)

## **📬Contact**
For any inquiries or to report issues, please reach out to us:

[Back to Top](#top)

## **📂Contributing**
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

[Back to Top](#top)

## **⏳Project Status**
This project is currently in development. We are actively adding new features and addressing any issues. Keep an eye out for updates, and feel free to contribute to the project.

[Back to Top](#top)


## 🤝Contributors
- <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Logo.jpeg" alt="Yaniel Ramos" width="30" height="30"/> <a href="https://github.com/YanielRamos" target="_blank">YanielRamos</a>
- <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Logo.jpeg" alt="Eduardo Figueroa" width="30" height="30"/> <a href="https://github.com/semaed" target="_blank">Eduardo Figueroa</a>
- <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Logo.jpeg" alt="Xavier Betancourt" width="30" height="30"/> <a href="https://github.com/Xespinosa" target="_blank">Xavier Betancourt</a>
- <img src="https://github.com/semaed/BloodIQ-Copy/blob/main/Languages%20Icons/Logo.jpeg" alt="Giovanni Barreto" width="30" height="30"/> <a href="https://github.com/gbc6292" target="_blank">Giovanni Barreto</a>

[Back to Top](#top)
