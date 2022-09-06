/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
··mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece
  la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

··esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
··mostrarDatos: devuelve toda la información del objeto.
··generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
    constructor(nombre, edad, DNI , sexo , peso , altura, nacimiento){
        this.nombre=nombre,
        this.edad = edad,
        this.DNI = DNI,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.nacimiento = nacimiento
    }

    //Metodos:
    mostrargeneracion(){
        if (this.nacimiento > 1993 && this.nacimiento < 2011) {
        document.write(this.nombre + " es de la Generacion Z " + "<br>" + " Su rasgo caracteristico es la Irreverencia ")
        }else if (this.nacimiento > 1980 && this.nacimiento < 1993) {
            document.write(this.nombre + " es de la Generacion Y (Millenias)" + "<br>" + " Su rasgo caracteristico es la Frustuacion ")
        }else if (this.nacimiento > 1968 && this.nacimiento < 1979){
            document.write(this.nombre + " es de la Generacion X" + "<br>" + " Su rasgo caracteristico es la Obsesion por el exito ")
        }else if (this.nacimiento > 1948 && this.nacimiento < 1967) {
            document.write(this.nombre + " es de la Generacion Baby Boom" + "<br>" + " Su rasgo caracteristico es la Ambicion ")
        }else if (this.nacimiento > 1929 && this.nacimiento < 1947)
            document.write(this.nombre + " es de la Generacion Silent" + "<br>" + " Su rasgo caracteristico es la Austeridad ")
    }

    mayor_Edad(){
        if (this.edad > 18) {
            document.write ("<br>"+ this.nombre + " es mayor de edad " + "<br>")
        } else {
            document.write ("<br>"+ this.nombre + " es menor de edad " + "<br>")
        }
    }

    mostrar_Datos(){
        document.write("Su nombre es :" + this.nombre + "<br>" + "Su edad es :" + this.edad + "<br>" + "DNI : " + this.DNI + "<br>" + "Sexo : " + this.sexo + "<br>" + "Peso: " + this.peso + "KG" + "<br>" + "Altura: " + this.altura + "<br>" + "Nacimiento: " + this.nacimiento )
    }

    generaDNI(){
        document.write("Generamos un DNI aleatorio, por ejemplo : " + Math.floor(Math.random() * (10000000 - 1000000) + 10000000) + "<br>")
    }
    
}

let nicolas = new Persona ("Nicolas" , 34 , 33540720 , "M" , 64, 1.65, 1988,)



