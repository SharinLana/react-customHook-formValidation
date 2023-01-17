# Form Validation With a Custom Hook (React.js)

> The purpose of this app is to validate the form with a custom hook.

## The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- creating a custom hook useValidate() to validate the data entered by the user in the order form;
- ReactDOM.createPortal() to display a modal informing about the status of the form submittion ("Success!" or "Error!");
- the React props (data transfer from parents to children and vice versa);
- JavaScript logic and methods (trim(), match(), isNaN(), toUpperCase(), regex, ternary operator, etc);
- CSS modules.

## To view the app in the browser, copy and paste the following line to your browser URL address bar:

```
https://sharinlana.github.io/react-customHook-formValidation/
```

## To start the app on your machine:

1. Clone the project to your machine by running:

```
git clone https://github.com/SharinLana/react-customHook-formValidation.git
```

2. To install the project dependencies, run:

```
npm install
```

3. When the installation is complete, run the following command to start the app:

```
npm start
```

## Languages, frameworks, libraries, packages, tools and technologies:

- React.js
- JavaScript
- CSS modules
- react-dom

## Functionalities:

- empty or incorrectly filled form cannot be submitted;
- first and last names cannot be numbers or contain digits, or be shorter than 2 characters;
- email address must match the regular expression in the custom useValidate() hook;
- street address cannot contain only numbers or be empty;
- city cannot contain numbers or be shorter than 2 characters;
- country must be selected from the list of options;
- postal code must contain 5 digits and cannot contain other characters;
- dynamic notifications about incorrectly filled input fields;
- providing the status of the form submittion with a modal;
- clearing the form and cart after submitting the order successfully;
- responsive design (mobile adaptation);
