package com.maddoxgraham.employeemanager.exception;

// extenssion de RuntimeException
public class UserNotFoundException extends RuntimeException{
    //message apartient à la superclasse
    public UserNotFoundException(String message) {
        //appel au consructeur de la superclasse pour générer le message
        super(message);
    }
}
