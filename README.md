# onest-bap-library
Sunbird ED BAP library that can integrate into any front-end applications

# Onest-bap-library Setup

This guide will tell you how to run ny-onest module. Follow the instructions below to get started.

## Prerequisites
Before cloning and running the project, make sure you have the following software installed on your machine:

- `` Node.js v16 or greater``

- ``Yarn``

- ``Angular CLI``

After installing Node.js, open a terminal and run the following command to install the Angular CLI globally:
```
npm install -g @angular/cli@13
```
---

## Clone the Repository
To clone the repository, open a terminal and run the following command:
```
git clone https://github.com/Sunbird-Ed/onest-bap-library.git
```
---

Navigate to the project's root directory by running the following command:


## Install Dependencies

Then, install the project dependencies by running:

```
yarn install
```
---

## Using library locally

1. Build library
```console

path : onest-bap-library/SunbirdEd-onest-lib

ng build ny-onest
```
2. Link library to your project
```console
npm link ny-onest
```

- To run the  project, use the command:
- 
```
path : onest-bap-library/SunbirdEd-onest-lib/projects/ny-onest-demo/src/app
ng serve
```

After executing this command, the application will be compiled, and a local development server will be started. You can access the project by opening a web browser and navigating to http://localhost:4200/.

---
