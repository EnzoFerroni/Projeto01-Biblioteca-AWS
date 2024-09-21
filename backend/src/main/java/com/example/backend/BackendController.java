package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;
import java.util.List;
import java.util.Map;
import java.util.Arrays;

// Classe para representar os livros
class Book {
    private String title;
    private String author;
    private String description;
    private String cover;

    // Construtor
    public Book(String title, String author, String description, String cover) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.cover = cover;
    }

    // Getters (somente para JSON serializar os dados corretamente)
    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getDescription() {
        return description;
    }

    public String getCover() {
        return cover;
    }
}

@RestController
public class BackendController {

    // Redirecionar do "/" para "/books"
    @GetMapping("/")
    public RedirectView redirectToBooks() {
        return new RedirectView("/books");
    }

    // Endpoint original que retorna uma mensagem
    @GetMapping("/data")
    public Map<String, String> getData() {
        return Map.of("message", "Hello from the backend in Java!");
    }

    // Novo endpoint para retornar a lista de livros
    @GetMapping("/books")
    public List<Book> getBooks() {
        // Lista de livros pré-definida
        return Arrays.asList(
                new Book("The Great Gatsby", "F. Scott Fitzgerald",
                        "A novel about the American dream and the Roaring Twenties.",
                        "https://m.media-amazon.com/images/I/71V1cA2fiZL._AC_UF1000,1000_QL80_.jpg"),
                new Book("To Kill a Mockingbird", "Harper Lee", "A story of racial injustice in the Deep South.",
                        "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"),
                new Book("1984", "George Orwell", "A dystopian novel about totalitarianism and surveillance.",
                        "https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg"));
    }
}
