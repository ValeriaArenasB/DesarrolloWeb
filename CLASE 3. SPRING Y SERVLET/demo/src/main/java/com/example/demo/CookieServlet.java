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

@WebServlet("/cookie")

public class CookieServlet extends HttpServlet {
     Logger logger = LoggerFactory.getLogger(CookieServlet.class);
    //el logger slf4j para imprimir mensajes en la consola, es una buena practica usarlo en lugar de System.out.println
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        
        response.setContentType(MimeTypeUtils.TEXT_HTML_VALUE);
        
        ServletOutputStream out = response.getOutputStream();


        logger.error("Error message");
        logger.warn("Warning message");
        logger.info("Info message");




        //Guardar una cookie
        jakarta.servlet.http.Cookie cookie = new jakarta.servlet.http.Cookie("nombre", "valor");
        response.addCookie(cookie);

        cookie = new jakarta.servlet.http.Cookie("hola", "mundo");
        response.addCookie(cookie);


        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Cookies</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>COOKIES</h1>");
        out.println("<a href='/hola'>Volver</a>");

        out.println("</body>");
        out.println("</html>");

    }
 
    
}
