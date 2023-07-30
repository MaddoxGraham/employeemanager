package com.maddoxgraham.employeemanager.service;

import com.maddoxgraham.employeemanager.EmployeemanagerApplication;
import com.maddoxgraham.employeemanager.exception.UserNotFoundException;
import com.maddoxgraham.employeemanager.model.Employee;
import com.maddoxgraham.employeemanager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee){
        //avec un set je pourrais manuellement ajouter des information de mon employé ici.
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee){
       return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long id){
        // ici comme on retoune un optional dans employeerepository on va devoir lui préciser :
        // retoune un employé par son id si tu le trouve sinon retoure l'exception usernotfound
        return employeeRepository.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("User n° " + id + " was not found"));
    }

    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }
}
