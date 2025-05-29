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

@WebServlet("/hola") //anotacion que indica que esta clase es un servlet y que responde a la url /hola-mundo
public class HolaMundoServlet extends HttpServlet { //un servlet es un objeto de java que recibe y responde solicitudes HTTP
    

    Logger logger = LoggerFactory.getLogger(HolaMundoServlet.class);
    //el logger slf4j para imprimir mensajes en la consola, es una buena practica usarlo en lugar de System.out.println
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        
        response.setContentType(MimeTypeUtils.TEXT_HTML_VALUE);
        
        ServletOutputStream out = response.getOutputStream();


        String referrer = request.getHeader(HttpHeaders.REFERER);
        logger.info("Referrer: {}", referrer);


        //leer cookies
        if(request.getCookies() != null){
            for (jakarta.servlet.http.Cookie cookie : request.getCookies()) {
                logger.info("Cookie: " + cookie.getName() + " = " + cookie.getValue());
                        }
        }

        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Hola Mundo</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Hola Mundo desde Servlet</h1>");
        out.println("<a href='/referencia'>Pagina referenciada</a><br>");
        out.println("<a href='/redir'>Pagina redireccionar</a><br>");
        out.println("<a href='/download'>Pagina descargar</a><br>");
        out.println("<a href='/cookie'>Pagina Cookies</a><br>");
        out.println("<a href='/form'>Pagina Formulario</a><br>");





        out.println("</body>");
        out.println("</html>");

    }

}
