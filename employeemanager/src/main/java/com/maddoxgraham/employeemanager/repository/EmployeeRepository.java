package com.maddoxgraham.employeemanager.repository;

import com.maddoxgraham.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// JpaRepository as besoin de la class visée et du type de la clé primaire ici Id est de type Long
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    void deleteEmployeeById(Long id);
    // on auait pu retourer un Emloyee mais retourner un Opional de Employee permet de prendr en compte le cas ou notre id n'existe pas
    Optional<Employee> findEmployeeById(Long id);
}
