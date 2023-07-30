import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public employees!: Employee[] ;
  public editEmployee?: Employee;
  public deleteEmployee?: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('addEmployeeCancelBtn')?.click();
    //va renvoyer les valeurs du formulaire d'ajout en JSON.
    this.employeeService.addEmployee(addForm.value).subscribe(
      (Response: Employee) => {
        console.log(Response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmployee(employee: Employee): void {
    document.getElementById('updateEmployeeCancelBtn')?.click();
    //va renvoyer les valeurs du formulaire d'ajout en JSON.
    this.employeeService.udpateEmployee(employee).subscribe(
      (Response: Employee) => {
        console.log(Response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmployee(id: number ): void{
    document.getElementById('deleteEmployeeCancelBtn')?.click();
    this.employeeService.deleteEmployee(id).subscribe(
      (Response: void) => {
        console.log(Response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key:string): void{
    const results : Employee[] = [];
    for(let employee of this.employees){
      // Est ce que le nom (en minuscule) d'un employé contient l'élément key(en minuscule) ? -1 parce que indexOf est un array
     // Si on voulait changer la valeur ont pourrait faire employee.email ... Etc ... 
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key){
      this.getEmployees();
    }

  }

  // on va créer une fonction qui va générer les modales en fonction du bouton mode sera le boutton sur lequel on as cliqué
  public onOpenModal(employee: Employee | null, mode: string): void {
    const container = document.getElementById('main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEmployee');
    }
    if (mode === 'edit' && employee != null) {
      this.editEmployee = employee;
      button.setAttribute('data-bs-target', '#updateEmployee');
    }
    if (mode === 'delete' && employee != null) {
      this.deleteEmployee = employee;
      button.setAttribute('data-bs-target', '#deleteEmployee');
    }

    container?.appendChild(button);
    button.click();
  }
}
