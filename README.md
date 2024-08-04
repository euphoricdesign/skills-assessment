# Skills assessment

## Overview

This project is a web application that allows uploading files up to 5MB to Vercel's blob storage and making calls to third party APIs at different points in the upload process. It is built using Next.js and focuses on meeting the requirements of a knowledge challenge.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone <https://github.com/your-username/evaluacion-javascript.git`>
2. Install the dependencies: `npm install`.
3. Start the development server: `npm run dev` .

## Project Structure

The project is organized in the following directories:

- `app`: Application pages and actions.
- `components`: Reusable components
- `public`: Public files and assets
- `node_modules`: Dependencies installed via npm

## Features

- Upload files up to 5MB to Vercel blob storage
- Call third-party APIs at different points in the upload process
- Display a list of uploaded file links with download option
- Rename uploaded files
- Delete uploaded files
- Display a skeleton while uploading the file list
- Persist full state when refreshing the page

## Requirements

- Node.js 14.x
- npm 6.x
- Vercel CLI

## Authors

- Merlina Villecco

## Notes

- Third-party API calls are commented out to avoid errors during file upload. Uncomment the corresponding lines to test the functionality.
- Although the project was started with Next.js, the option to create a project without TypeScript was not selected. Therefore, a `tsconfig.json` file is found in the project, but most of the code is written in JavaScript (.js), except for the `shdcn/ui` components which are in TypeScript.
