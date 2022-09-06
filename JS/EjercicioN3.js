/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades,
 calcular el perímetro y el área
 */

 class Rectángulos {
    constructor(alto , ancho){
        this.alto = alto,
        this.ancho = ancho
    }

    perimetro(){
        console.log("El Perimetro de su Rectangulo es = " + (2*this.alto) + (2*this.ancho) )
    }
    area(){
        console.log ("El area de su Rectangulo es = " + (this.alto * this.ancho))
    }
 }
let objeto = new Rectángulos (40, 40)