package com.example.demo.repository;

import com.example.demo.model.Course;
import com.example.demo.model.Student;
import com.example.demo.model.Teacher;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

@DataJpaTest
public class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @BeforeEach
    void setUp() {
        studentRepository.save(new Student("John Doe", "Computer Science", "correo", "1st year"));
        studentRepository.save(new Student("Jane Doe", "Mathematics", "correo", "2nd year"));
        studentRepository.save(new Student("John Smith", "Physics", "correo", "3rd year"));
        studentRepository.save(new Student("Jane Smith", "Chemistry", "correo", "4th year"));

        teacherRepository.save(new Teacher("Dr. Smith"));
        teacherRepository.save(new Teacher("Dr. Doe"));

        Student student = studentRepository.findById(1L).get();
        Teacher teacher = teacherRepository.findById(1L).get();

        Course course = courseRepository.save(new Course("Math 101"));
        course.setStudent(student);
        course.setTeacher(teacher);

        course = courseRepository.save(new Course("Physics 101"));
        course.setStudent(studentRepository.findById(2L).get());
        course.setTeacher(teacher);
    }

    

    @Test
    public void StudentRepository_save_Student() {
        // ARRANGE
        Student student = new Student("John Doe", "Computer Science", "v3kMv@example.com", "1st year");

        // ACT
        Student savedStudent = studentRepository.save(student);

        // ASSERT
        assertThat(savedStudent).isNotNull();
        assertThat(savedStudent.getId()).isNotNull();
        assertThat(savedStudent.getNombre()).isEqualTo("John Doe");
    }

    @Test
    public void StudentRepository_findAll_NotEmptyList() {
        // ARRANGE
        Student student1 = new Student("John Doe", "Computer Science", "correo", "1st year");
        Student student2 = new Student("Jane Doe", "Mathematics", "correo", "2nd year");

        // ACT
        studentRepository.save(student1);
        studentRepository.save(student2);
        List<Student> students = studentRepository.findAll();

        // ASSERT
        Assertions.assertThat(students).isNotNull();
        Assertions.assertThat(students.size()).isEqualTo(6);

    }


    @Test
    public void StudentRepository_findById_FindWrongIndex() {
        // ARRANGE
        Long index = -1L;

        // ACT
        Optional<Student> student = studentRepository.findById(index);

        // ASSERT
        Assertions.assertThat(student).isEmpty();
    }

    @Test
    public void StudentRepository_deleteById_EmptyStudent() {

        // ARRANGE
        Long id = 2L;

        // ACT
        studentRepository.deleteById(id);

        // ASSERT
        Assertions.assertThat(studentRepository.findById(id)).isEmpty();
    }


    @Test
    public void StudentRepository_findByNombre_Student() {
        // ARRANGE
        String nombre = "John Doe";

        // ACT
        Student student = studentRepository.findByNombre(nombre);
        // ASSERT
        Assertions.assertThat(student).isNotNull();
    }

    @Test
    public void StudentRepository_updateByNombre_Student() {
        // ARRANGE
        String nombre = "John Doe";
        String newNombre = "John Smith";

        // ACT
        Student student = studentRepository.findByNombre(nombre);
        student.setNombre(newNombre);
        Student updatedStudent = studentRepository.save(student);

        // ASSERT
        Assertions.assertThat(updatedStudent).isNotNull();
        Assertions.assertThat(updatedStudent.getNombre()).isEqualTo(newNombre);
    }

    @Test
    public void StudentRepository_findStudentsFromTeacher_StudentList() {
        // ARRANGE

        int teacherId = 1;
        
        // ACT
        List<Student> students = studentRepository.findStudentsFromTeacher(teacherId);

        // ASSERT
        Assertions.assertThat(students).isNotNull();
        Assertions.assertThat(students.size()).isGreaterThan(0);
        Assertions.assertThat(students.size()).isEqualTo(2);

        
    }

        
}
