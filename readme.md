#How to . 

   * Clone repository
   * modify file application.proprieties (location : src/main/ressources)
   * create database in phpmyadmin
   * launch BackEnd
   * Insert data.
   * npm install -g @angular/cli
   * launch FrontEnd
     

## Employee Manager Instruction Starter - Notes

1. Using Java JDK / IntelliJ / Spring Boot / Angular / VSCode.

2. Go to [Spring Initializr](https://start.spring.io/) and select the following options:
   - **Project**: Maven
   - **Spring Boot**: 3.1.2 (default used)
   - **Project Metadata**:
     - **Group**: com.maddoxgraham
     - **Artifact**: employeemanager
     - **Name**: employeemanager
     - **Description**: Employee Manager App
     - **Package Name**: (should generate itself based on previous information)
     - **Packaging**: Jar (Java application)
     - **Java**: Anything below v8 (default works perfectly)
   - **Add dependencies**: Select Spring Web / Select Spring Data JPA / Select MySQL Driver.
   When ready, click on **GENERATE**.

### Starting with JAVA environment (Backend):

- Launch IntelliJ from the command line:
cd ~/Documents/idea-IC-231.9225.16/bin
./idea.sh

sql
Copy code

1. Create the **Employee** class:
 - Create the package `model` under `src/main/java/com.maddoxgraham.employeemanager`.
 - Then create a Java class file named **Employee**.
 - Follow the steps in the file. Basically, generate a class as an entity and provide it with constructors, getters, setters, and a `toString` method.

### Access MySQL Command Line:

As there might be difficulties updating the user and its password, follow these steps to use the MySQL command line:
- Check if MySQL is running: `sudo service mysql status` (if not running, start it with `sudo service mysql start`).
- Find the user and password with: `sudo cat /etc/mysql/debian.cnf`.
User is "debian-sys-maint". Copy the password used and launch MySQL with:
mysql -u debian-sys-maint -p

markdown
Copy code

### Configure the properties of the app:

- Go to `resource/application.properties`.
- Use the previous information to complete the file.

### Running the project:

- You can run the project from the main file: `EmployeeManagerApplication`.
- Click on the green arrow in front of `public static void ...`.

### Database creation:

- If the database does not exist, you can create it using the command line (MySQL Command Line):
create database nameofdatabase

go
Copy code

### Create a package "repository":

- In `src/main/java/com.maddoxgraham.employeemanager`, create the package `repository`.
- Create the interface `EmployeeRepository`. (Click on `New/Java Class/Interface`.)

### Create a package "service":

- In `src/main/java/com.maddoxgraham.employeemanager`, create the package `service`.
- In this service, we create multiple functions used to manipulate the employee entity.

### Create a package "exception":

- In `src/main/java/com.maddoxgraham.employeemanager`, create the package `exception`.
- Create the class `UserNotFoundException` (create the package when hovering over the call to the `UserNotFoundException(String s)` class, then select "Create class", and change the package name).

### CONTROLLER:

- Create `EmployeeResource`, which represents our controller (path: `src/main/java/com.maddoxgraham.employeemanager`).
- It will use REST and be mapped by a string. Then, call the service.

// Once parameterized, we can see that the controller resembles the service in many ways.


# Postman Manipulations and testing 

With postman we will test the appication. First we launch the app from InteliJ (big green arrow run ) and verify tha it's runing smoothly.
We should have de port on witch the ap is running. Then in postman click on th + on top and enter the path to one of path we've made on the contrller 
for exemple : GET http://localhost:8080/employee/all
Now, for the moment there is nothing but an empty array becase we did not save any employee so let's add one employee
in a new tab  : POST http://localhost:8080/employee/add then click on body then raw, then select JSON (in text dropdown menu )  
and insert values as : 


{
"email":"NormadySR2@gmail.com",
"imageUrl":"https://i.pinimg.com/564x/eb/00/cc/eb00cc191be45d77267645bd7bc9ad23.jpg",
"jobTitle":"The Fool",
"isTeam":1,
"name":"Jane Shepard"
}
{
"email":"LastWish@toobroody.com",
"imageUrl":"https://i.pinimg.com/564x/d1/cf/ae/d1cfae8baaee7346478d684b49bba362.jpg",
"jobTitle":"Temperence",
"isTeam":1,
"name":"Thane Krios"
}
{
"email":"Archangel@calibration.com",
"imageUrl":"https://i.pinimg.com/564x/6f/6c/4e/6f6c4e17800531c914d6c5876606155e.jpg",
"jobTitle":"Judgement",
"isTeam":1,
"name":"Garrus Vakarian"
}
{
"email":"justiciar@glorydays.com",
"imageUrl":"https://i.pinimg.com/564x/4d/2c/33/4d2c33256b5f62bb0f7d5caa16fef1f3.jpg",
"jobTitle":"Justice",
"isTeam":0,
"name":"Samara T'serra"
}
{
"email":"bigbuddy@hotmail.com",
"imageUrl":"https://i.pinimg.com/564x/5c/04/e8/5c04e8f62752a2e98ee0b57c8c2a9769.jpg",
"jobTitle":"The Empero",
"isTeam":false,
"name":"Wrex Urdnot"
}
{
"email":"doesthisunit@haveasoul.com",
"imageUrl":"https://i.pinimg.com/564x/f7/1d/e0/f71de0fa61c5f2e36069e8571503957a.jpg",
"jobTitle":"The Hermit",
"isTeam":0,
"name":"Legion"
}
{
"email":"mymomwas@complicated.net",
"imageUrl":"https://i.pinimg.com/564x/0d/66/f9/0d66f91d1d5b5e6651cbebafba86c27b.jpg",
"jobTitle":"The Star",
"isTeam":0,
"name":"Liara T'Soni"
}
{
"email":"zero@mail.net",
"imageUrl":"https://i.pinimg.com/564x/75/d9/9e/75d99eb9d2f2e3b5e4088ced621a0ef2.jpg",
"jobTitle":"The Tower",
"isTeam":0,
"name":"Jack"
}
{
"email":"pelgrim@karamail.com",
"imageUrl":"https://i.pinimg.com/564x/cc/04/5b/cc045b1c9b9ab90a213aa9617bfe42ff.jpg",
"jobTitle":"The Sun",
"isTeam":0,
"name":"Tali Zora Vas Neema"
}


# FRONT END _ ANGULAR 

start with Angular. 
