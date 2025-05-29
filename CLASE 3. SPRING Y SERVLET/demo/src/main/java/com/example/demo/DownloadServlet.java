package com.example.demo;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.util.MimeTypeUtils;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/download")

public class DownloadServlet extends HttpServlet {
     Logger logger = LoggerFactory.getLogger(DownloadServlet.class);
    //el logger slf4j para imprimir mensajes en la consola, es una buena practica usarlo en lugar de System.out.println
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        
        response.setContentType(MimeTypeUtils.TEXT_HTML_VALUE);
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment");
        
        ServletOutputStream out = response.getOutputStream();


        logger.error("Error message");
        logger.warn("Warning message");
        logger.info("Info message");


        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Descarga</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>PDescarga</h1>");
        out.println("<a href='/hola'>Volver</a>");

        out.println("</body>");
        out.println("</html>");

    }
 
    
}
