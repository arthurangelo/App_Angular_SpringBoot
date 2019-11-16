package com.example.simple_crud;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class Controller {

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/signin")
    public boolean signin(@RequestBody Usuario usuario){

        Usuario u1 = new Usuario();
        u1.setEmail("teste@email.com");
        u1.setPassword("123456");

        List<Usuario> listaUsaurios = Arrays.asList(u1);

        Optional search = listaUsaurios.stream().filter(u ->
                u.getEmail().equals(usuario.getEmail()) &&
                        u.getPassword().equals(usuario.getPassword() )).findFirst();

        if(search.isPresent()){
            return true;
        }

        return false;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/clientes")
    public List<Cliente> clientes(){
        Cliente c1 = new Cliente();
        c1.setCodigo("1");
        c1.setCargo("DEV");
        c1.setCep("38488-000");
        c1.setCidade("Ribeirao Preto");
        c1.setEndereco("Rua das Flores");
        c1.setFax("34555-555");
        c1.setNome("Teste 1");
        c1.setPais("Brazil");
        c1.setTelefone("389999-0009");

        return Arrays.asList(c1);
    }
}
