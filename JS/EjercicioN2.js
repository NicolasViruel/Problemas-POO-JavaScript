/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
*/


class cuenta {

    constructor(nuevoNombre){
        this.nombre= nuevoNombre,
        this.saldo=0
    }

    ingresar(dinero){
        this.saldo += dinero //Seria lo mismo saldo = saldo + dinero
        document.write('<br>' + 'El dinero que ingreso = ' + this.saldo)
    }
    extraer(dinero){

        if (dinero<this.saldo) {
            document.write('<br>' + ' El dinero que extrajo es de ' + this.saldo)
        } else {
            document.write('<br>' + 'No puede extraer esa cantidad su saldo es menor ')
        }
    }
    informar(){
        document.write('<br>' + 'La cuenta del titular ' + this.nombre + ' tiene un saldo de ' + this.saldo)
    }


}
let cuentaAlex = new cuenta('Alex');
console.log ("La cuenta de Alex")

cuentaAlex.informar()
cuentaAlex.ingresar(10000)
cuentaAlex.extraer(11000)
cuentaAlex.informar()
cuentaAlex.extraer(5000)







/*
class Persona {
    constructor( nombre , edad , altura, peso){
        this.nombre = nombre,
        this.edad = edad,
        this.altura = altura,
        this.peso = peso
    }
    hablar(){
        console.log ( `${this.nombre} esta hablando`)
    }

}

let Nicolas = new Persona('Nicolas' , 34 , 1.65 , 64)

class Profesor extends Persona {
    constructor(nombre, edad, altura, peso , oficio , idiomas){
        super(nombre,edad,altura,peso)
        this.oficio = oficio
        this.idiomas = idiomas
    }

    ingles(){
        console.log ("Sabe hablar en otros idiomas " + this.idiomas)
    }
    oficio(){
        console.log("Es profesor de ingles" + this.oficio)
    }
}

let Leandro = new Profesor("Leandro", 34, 1,64, 64, "profesor" , "Ingles" )
let Sergio = new Profesor ("Sergio" , 32 , 1.70, 75,"profesor" , "ingles")
console.log(Leandro)
*/