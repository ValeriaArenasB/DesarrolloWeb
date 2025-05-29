package com.example.demo;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.util.MimeTypeUtils;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/redir")

public class RedirectServlet extends HttpServlet {
     Logger logger = LoggerFactory.getLogger(RedirectServlet.class);
    //el logger slf4j para imprimir mensajes en la consola, es una buena practica usarlo en lugar de System.out.println
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        
        response.setContentType(MimeTypeUtils.TEXT_HTML_VALUE);
        response.setStatus(308);
        response.setHeader(HttpHeaders.LOCATION, "http://localhost:8090/hola");


    }
 
    
}
