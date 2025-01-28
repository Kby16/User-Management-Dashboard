## **Project Description**
The **User Management Dashboard** is a simple web application that allows users to:
- View a list of users with details such as ID, name, username, email, and website.
- Add new users (simulated through a mock backend API).
- Edit existing user details.
- Delete users from the list.
- Handle errors gracefully when interacting with the backend API.

The project uses the **JSONPlaceholder** API for mock backend functionality.

---

## **Features**
- **View Users:** Fetch and display a list of users from the JSONPlaceholder `/users` endpoint.
- **Add Users:** Simulate adding a new user by posting data to the `/users` endpoint.
- **Edit Users:** Update user details by simulating a PUT request to the backend.
- **Delete Users:** Remove a user by simulating a DELETE request.
- **Error Handling:** Displays an error message if there are issues interacting with the API.

---

## **Technologies Used**
- **Frontend:** React.js (with functional components and hooks).
- **HTTP Requests:** Fetch API.
- **Styling:** TailwindCSS.

---

## **Setup Instructions**

### **1. Prerequisites**
- Install [Node.js](https://nodejs.org/) (ensure you have at least version 14.x or above).
- Install a package manager like `npm` or `yarn`.

### **2. Clone the Repository**
```bash
git clone <repository-url>
cd user-management-dashboard
```
### **3. Install Dependencies**
-Run the following command to install all the project dependencies:
```bash
npm install
```
### **4. Start the Application**
-Run the development server
```bash
npm start
```
## **Project Structure**
```php
user-management-dashboard/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── UserList.jsx   # Main component for user list and actions
│   │   ├── UserForm.jsx    # Component for adding and editing users
│   ├── App.jsx             # Root component
│   ├── App.css             # styling 
│   ├── index.css           # Global styling
│   ├── main.jsx            # Entry point
├── package.json            # Project configuration
└── README.md               # Documentation
```
## **Challenges Faced**
### **1. Handling Mock Backend**
- Challenge: Since the JSONPlaceholder API does not persist data, simulating adding, editing, and deleting users required updates to the local state.
- Solution: After making API calls, the local state was manually updated to reflect the changes in the UI.

### **2. Controlled vs. Uncontrolled Inputs**
- Challenge: Encountered warnings when form inputs became uncontrolled due to undefined values during editing.
- Solution: Ensured that formData always had default values ("") for all fields, avoiding uncontrolled input issues.
### **3. Error Handling**
- Challenge: Handling API failures (like server errors or network issues) in a user-friendly way.
- Solution: Added error handling logic for each API call using try-catch blocks and displayed appropriate error messages.
### **4. Simulating PUT and DELETE**
- Challenge: JSONPlaceholder does not truly update or delete data on the server.
- Solution: Simulated the functionality by updating the local state directly after successful API responses.
### **5. Resetting the Form After Submission**
- Challenge: After adding or editing a user, the form fields needed to reset without causing issues with the controlled inputs.
- Solution: Reset formData state to its initial structure after successful form submission.

## **Future Improvements**
- Using routes and making it a multi-page application.
- Include search functionality to filter users by name, email, or other attributes.
- Implement responsive design for better mobile usability.
- Integrate a persistent backend for real CRUD operations.
- Add pagination or infinite scrolling for the user list.
