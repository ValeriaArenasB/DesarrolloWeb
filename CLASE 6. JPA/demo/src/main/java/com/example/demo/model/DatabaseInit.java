package com.example.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Controller;

import com.example.demo.repository.HomeworkRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.TeacherRepository;

import jakarta.transaction.Transactional;

@Controller
@Transactional
public class DatabaseInit implements ApplicationRunner {



    @Autowired
    StudentRepository studentRepository;

    @Autowired
    HomeworkRepository homeworkRepository;

    @Autowired
    TeacherRepository teacherRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {
        studentRepository.save(new Student("Juan", "Ingenieria", "sY6dP@example.com", "5"));
        studentRepository.save(new Student("Pedro", "Ingenieria", "ffMw0@example.com", "6"));
        studentRepository.save(new Student("Maria", "Ingenieria", "asdf@example.com", "7"));
        studentRepository.save(new Student("Luis", "Ingenieria", "asdf@example.com", "8"));

        homeworkRepository.save(new Homework("Tarea 1", "Hacer la tarea 1"));
        homeworkRepository.save(new Homework("Tarea 2", "Hacer la tarea 2"));
        homeworkRepository.save(new Homework("Tarea 3", "Hacer la tarea 3"));
        homeworkRepository.save(new Homework("Tarea 4", "Hacer la tarea 4"));



        teacherRepository.save(new Teacher("Profesor 1"));
        teacherRepository.save(new Teacher("Profesor 2"));
        teacherRepository.save(new Teacher("Profesor 3"));
        
        
        //asociar todas las tareas al estudiante 1
        Student asociar = studentRepository.findById(1L).get();
        for (Homework hw: homeworkRepository.findAll()) {
            hw.setStudent(asociar);
            homeworkRepository.save(hw);
        }

        asociar = studentRepository.findByNombre("Pedro");
        for (Homework hw: homeworkRepository.findAll()) {
            hw.setStudent(asociar);
            homeworkRepository.save(hw);
        }


        Teacher profe = teacherRepository.findById(1L).get();
        for (Student student: studentRepository.findAll()) {
            student.getProfesores().add(profe);
        }

    }
    
}
