# Fillout

## Description
The purpose of this project is to solve a specific coding challenge provided by Fillout.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Filters](#filters)
- [Deploy](#deploy)
- [Code](#code)

## Installation
 * This project uses node and TypeScript.
 * To install the project and its dependencies, make sure you have npm installed on your system.
 * Run `npm i` to install the project and all its dependencies.

## Usage
 This project is a web application built using `express`. To test it locally, follow these steps:

1. Create a file named .env and add your `API_KEY`. Optionally, you can specify the `PORT` you prefer to run the application on.
2. Execute `npm run dev`. You should receive a confirmation message in the console indicating that the application is running. If you've set the port to 3000, the application will be accessible at http://localhost:3000.
3. For testing purposes, you'll need a formId. If you have one, navigate to http://localhost:3000/yourFormId/filteredResponses. You will get the responses of the given form.

To run the tests execute `npm run test` in the console.

## Filters
You can use the following filters added to the request as query parameters:
* **limit** (optional): The maximum number of responses to retrieve per request. Must be a number between 1 and 150. Default is 150.
* **offset** (optional): The starting position from which to fetch the responses. Default is 0.
* **afterDate** (optional): A date string to filter responses submitted after this date.
* **beforeDate** (optional): A date string to filter responses submitted before this date.
* **status** (optional): Pass `in_progress` to get a list of in-progress (unfinished) submissions. By default, only `finished` submissions are returned.
* **includeEditLink** (optional): Pass `true` to include a link to edit the submission as editLink.
* **sort** (optional): Can be `asc` or `desc`, defaults to `asc`.

Those filters above are the ones provided by **Fillout**, but additionally you can use another type of filters to filter the responses even more. These filters have the following structure:

```
{
  id: string;
  condition: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than';
  value: number | string;
}
```

You can pass an array of those filters as query parameters like this: http://localhost:3000/cLZojxk94ous/filteredResponses?filters=[{%22id%22:%22bE2Bo4cGUv49cjnqZ4UnkW%22,%22condition%22:%22equals%22,%22value%22:%22Johnny%22}]

## Deploy
The application is deployed on Render and can be accessed at https://fillout-m2az.onrender.com/cLZojxk94ous/filteredResponses. Please note that due to the usage of a free account, it might take some time to load.

## Code
- The `index.ts` file serves as the entry point for the project, functioning as the main file for the application. It's where the `express` application is initialized.

- To ensure the security of sensitive information, such as the **API_KEY**, the application utilizes the `dotenv` package. This allows the information to be retrieved from environment variables defined in a `.env` file, rather than being hard-coded in the codebase.

- The codebase follows the *hexagonal architecture* pattern, which promotes separation of concerns and modularity. Inside the `src` folder, you will find three main folders: *domain*, *application*, and *infrastructure*.

- The *domain* folder contains the entities and the service interfaces of the application. This includes the `responses`, the `filters` and the `form-service`.

- The *infrastructure* folder contains the implementations of the external dependencies and services defined in the *domain* layer. Here we can find the routes and the controllers of the application, the implementation of the form-service and the dependencies needed to bootstrap the application.

- The *application* folder contains the only use case of the project. This use case is in charge of retrieving the responses of the form from Fillout (passing the default query parameters) and filtering the results with the filters also provided as query parameters.

- Additionally, there are two extra folders. The *core* folder contains the middlewares, the http-client (interface and implementation) and the generic error. The *utils* folder has contains the logger and the schema validator used to validate the request received in the controller.