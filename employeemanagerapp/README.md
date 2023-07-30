# Employeemanagerapp _ Angular App 
This is the frontend of the EmployeeManager application. It's a Single Page Application (SPA) that allows users to visualize and interact with data. Each action is directly reflected on the screen, providing a real-time user experience. Here, on the landing page, I'll give you a minimalistic demonstration of how the application works.

The landing page displays employee cards. Each card contains a picture and hovering over it reveals more information about the employee, such as name, email, etc.

<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/LandingPage.png" /> 


### Add An Employee 

To add a new employee, a simple click event on the "Add Employee" button brings up the following modal:
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/AddEmployeeModal.png" /> 

Enter the details of Liara, our new team member. Note that the "Save" button remains disabled until all fields are filled out.
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/validAddEmployeeModal.png" /> 

Upon validation, the newly added employee will appear alongside existing employees.
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/NewEmployee.png" /> 


### Update An Employee 

We have added a new employee, Saren, but we forgot to include his last name. Let's correct our mistake. On his profile card, click the "Edit" button.
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/OneditSaren.png" /> 

His information is already pre-filled in the form fields, allowing us to easily add his last name.
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/BeforeEditSaren.png" /> <img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/NameEditSaren.png" /> 

After saving the changes, the card dynamically updates to display the new information.
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/SarenCardAfter.png" /> 

### Delete An Employee 

Regrettably, Saren is leaving the team. To delete his profile, click the "Delete" button on his card:
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/DeleteModal.png" /> 

Upon confirming the deletion, the employee will no longer appear in the list of employees.

### Search An Employee 

Lastly, let's look at the search functionality. Enter an employee's last name, for example, "Vakarian", in the search bar to find their card.
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/searchFirstLetter.png" /> 
<img src="https://raw.githubusercontent.com/MaddoxGraham/employeemanager/main/employeemanagerapp/src/assets/searchSecondLetter.png" /> 


This EmployeeManager application provides a simple yet powerful interface for managing employee data. It demonstrates a range of functionalities, such as adding, updating, deleting, and searching for employees. The user interface is intuitive and dynamic, ensuring a seamless user experience.
