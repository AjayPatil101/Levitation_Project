The Assignment will consist of the following modules:

Page 1: Login Page

Objective: Create a login page with email field validation and appropriate messages for login success and failure. Integrate an API for authentication. Upon successful login, redirect the user to the Add Products Page.

---

Page 2: Registration Page

Objective: Create a Registration page asking for basic details like Name, Email, and Password.
Validate Email using Regex.
Upon Successful registration, redirect user to Login Page

---
Page 3: Add product Page

Objective: This step should capture Product Information.
Fields: Product Name, Product Qty, Product Rate
Show Product Total as Product Qty * Product Rate
Show Product GST as 18% on Product Total
Users should have an option to add multiple products.
Provide a next button, clicking on next button redirect user to Generate the pdf invoice

---
Page 4: Generate PDF

Objective: Users should have an option to generate PDF, after clicking on this button, make appropriate API calls to backend, and save the product details along with user details and date in backend and send generated PDF as response.
Generated PDF should be downloaded (download button should be provided to user)
Note: The generated invoices should mirror the format from the below sample provided to you.

---

💻 Requirement

Backend (NodeJS):

Set up a Node.js server using Express.js.

Use MongoDB as the Database to store data.

Implement required functionality for invoices.

Ensure proper validation and error handling

Include a feature to generate PDF invoices with a library called `puppeteer`

Frontend (React):

Create a React-based frontend for the Invoice Generator.

TypeScript is mandatory

Use Redux for State Management (optional)

Design a user-friendly interface with components for creating new invoices

Make use of Component based Architecture

Implement form validation on the frontend.

Integrate with the backend API to fetch and display invoice data.

Include the ability to download generated invoices as PDF files

Authentication :

Implement user authentication (e.g., using JWT tokens) to secure the application.
Allow only authenticated users to create invoices.

Sample Output:How Invoice format should look.

🛫 Deploy
