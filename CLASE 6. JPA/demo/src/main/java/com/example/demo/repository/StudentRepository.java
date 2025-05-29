package com.example.demo.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Student;

@Repository

public interface StudentRepository extends JpaRepository<Student, Long> {

    //select * from student where name = "nombre"
    Student findByNombre(String nombre);

    Optional<Student> findById(Long id);


}
