/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro()
para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Book {
    constructor (ISBN , titulo, autor, N_paginas){
        this.ISBN = ISBN,
        this.titulo = titulo,
        this.autor = autor,
        this.N_paginas = N_paginas
    }

    metodo_get_ISBN(){
        return this.ISBN
    }
    metodo_set_ISBN(parametro){
        this.ISBN = parametro
        return this.ISBN
    }
    metodo_get_titulo(){
        return this.titulo
    }
    metodo_set_titulo(nuevo_titulo){
        this.titulo = nuevo_titulo
        return this.titulo
    }
    metodo_get_autor(){
        return "this.titulo"
    }
    metodo_set_autor(nuevo_autor){
        this.autor = nuevo_autor
        return this.autor
    }
    metodo_get_N_paginas(){
        return this.N_paginas
    }
    metodo_set_N_paginas(nuevo_N_paginas){
        this.N_paginas = nuevo_N_paginas
        return this.N_paginas
    }

    mostrarLibro(){
       console.log(" El libro " + this.metodo_get_titulo() + " con " + " ISBN " + this.metodo_get_ISBN() + " creado por el autor " + this.metodo_get_autor() + " tiene páginas " + this.metodo_get_N_paginas()) 
    }
    
}
// getter no reciben parametros, por que solamente traen informacion.
// setter si reciben un parametro, modifican algo, 

let book1 = new Book (1000 , " Caperusita roja ", " Leandro Ceballos ",  400)
let book2 = new Book (2000 , " Los 3 chanchitos ", " Nicolas Viruel ",  600)
let book3 = new Book (3000 , " El lobo feroz ", " Sergio Rosales ",  300)

book1.mostrarLibro()
book2.mostrarLibro()
book3.mostrarLibro()


if ((book1.metodo_get_N_paginas() > book2.metodo_get_N_paginas()) && (book1.metodo_get_N_paginas() > book3.metodo_get_N_paginas())){
    document.write(" El libro de " + book1.metodo_get_titulo() + " tiene mas hojas ")

}if ((book1.metodo_get_N_paginas() < book2.metodo_get_N_paginas()) && (book2.metodo_get_N_paginas() > book3.metodo_get_N_paginas())){
    document.write(" El libro de " + book2.metodo_get_titulo() + " tiene mas hojas ")

}if ((book1.metodo_get_N_paginas() < book3.metodo_get_N_paginas()) && (book2.metodo_get_N_paginas() < book3.metodo_get_N_paginas())) {
    document.write(" El libro de " + book3.metodo_get_titulo() + " tiene mas hojas ")
}
