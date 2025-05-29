package com.example.demo;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.MimeTypeUtils;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/form2")

public class Form2Servlet extends HttpServlet {
     Logger logger = LoggerFactory.getLogger(Form2Servlet.class);
    //el logger slf4j para imprimir mensajes en la consola, es una buena practica usarlo en lugar de System.out.println
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        
        response.setContentType(MimeTypeUtils.TEXT_HTML_VALUE);
        
        ServletOutputStream out = response.getOutputStream();


        //POST parametros 
        String apellido = request.getParameter("apellido");



        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Pag referenciada</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Procesamiento de formulario</h1>");
        out.println("<p>El apellido ingresado es: "+apellido+"</p>");


        out.println("<a href='/hola'>Volver</a>");

        out.println("</body>");
        out.println("</html>");

    }
 
    
}
