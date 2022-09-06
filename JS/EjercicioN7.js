/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono.
Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos.
 Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

#aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
 no puede almacenar más contactos indicar por pantalla.
#existeContacto(Conctacto): indica si el contacto pasado existe o no.
#listarContactos(): Lista toda la agenda
#buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
#eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
#agendaLlena(): indica si la agenda está llena.
#huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre,
        this.telefono = telefono
    }
}

class Agenda {
    constructor(){
        this.array_Contactos = []
    }

    agregar_Contacto(){
        let nombre = prompt("Ingrese su nombre")
        let telefono = prompt("Ingrese su telefono")
        this.array_Contactos.push(new Contacto ( nombre, telefono))  
    }
    
    existe_Contacto(nombre){
        for (let i = 0; i < this.array_Contactos.length; i++) {
            if (this.array_Contactos[i].nombre == nombre) {
                alert ("El contaxto ya existe " + "\n")
            }
        }
        alert("No existe el contacto" + "\n")
    }

    mostrar_Lista(){
        for (let i = 0; i < this.array_Contactos.length; i++) {
            document.write(this.array_Contactos[i].nombre + "<br>")
            document.write(this.array_Contactos[i].telefono + "<br>" + "-------")
        }
    }

    buscar_Contacto(nombre){
        for (let i = 0; i < this.array_Contactos.length; i++) {
            if (this.array_Contactos[i].nombre == nombre) {
               document.write(this.array_Contactos[i].telefono) 
            }
        }
        return ""
    }

    eliminar_Contacto(contacto_C){
        for (let i = 0; i < this.array_Contactos.length; i++) {
            if (this.array_Contactos[i].nombre == contacto_C) {
                this.array_Contactos.splice (i,1)
                alert("El contacto " + contacto_C + " fue eliminado " )
            }
            
        }
        return false
    }

    agenda_Llena(){
        if (this.array_Contactos.length >= 10) {
            alert("La agenda se encuentra llena")
        }else{
            return false
        }
    }

    huecos_Agenda(){
       Document.write(" Quedan " + (10 - this.array_Contactos.length) + "disponibles") 
    }
}

let agenda = new Agenda()
do{
    
    let opciones = parseInt(prompt("ELIJA LA OPCION QUE DESEE: \n [1] - Añadir Contacto \n [2] - Buscar Contacto \n [3] - Ver lista de contactos \n [4] - Buscar por Nombre (se devuelve Nro de telefono) \n [5] - Eliminar Contacto \n [6] - Indicar si la Agenda está llena \n [7] - Indicar espacos disponibles en agenda \n" ))
    switch (opciones) {
        case 1:
            agenda.agregar_Contacto()
            break;
        case 2:
            let nombre = prompt ("Ingrese el nombre que desea buscar")
            agenda.existe_Contacto(nombre)
            break;
        case 3:
            agenda.mostrar_Lista()
            break;
        case 4:
            let nombre2 = prompt ("Ingrese el nombre que desea buscar")
            agenda.buscar_Contacto(nombre2)
            break;
        case 5:
            let nombre3 = prompt ("Ingrese el nombre que desea eliminar")
            agenda.eliminar_Contacto(nombre3)
            break;
        case 6:
            agenda.agenda_Llena()
            break;
        case 7:
            agenda.huecos_Agenda()
            break;            
    
        default:
            break;
    }
}while (confirm ("Pulse Aceptar si quiere seguir, Cancelar para salir"));
