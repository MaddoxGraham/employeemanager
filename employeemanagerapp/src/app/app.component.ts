import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[])=> {
        this.employees =response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddEmployee(addForm: NgForm): void {

  }

  // on va créer une fonction qui va générer les modales en fonction du bouton mode sera le boutton sur lequel on as cliqué
  public onOpenModal( employee: Employee | null,mode: string): void{
    const container = document.getElementById('main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle','modal');

    if (mode === 'add'){
      button.setAttribute('data-bs-target','#addEmployee');
    }
    if( mode === 'edit'){
      button.setAttribute('data-bs-target','#updateEmployee');
    }
    if (mode === 'delete'){
      button.setAttribute('data-bs-target','#deleteEmployee');
    }

    container?.appendChild(button);
    button.click();

  }

}
