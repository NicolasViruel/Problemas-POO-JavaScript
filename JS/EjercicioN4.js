/*
4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos,
 el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
 de los tres objetos instanciados.
*/


class Producto {
    constructor(codigo, nombre , precio){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio
    }
    datos(){
        document.write("El codigo del producto es : " + this.codigo +  "<br>" + "El nombre del producto es"  + this.nombre + "<br>" + "Su precio es"  + this.precio + "<br>"+"<br>")
    }
}

let pañales = new Producto (" ABCD ", " pañales " , " 7$ " )
let shampoo = new Producto (" CDFG ", " shampoo " , " 20$ ")
let miel = new Producto (" HYJK ", " Miel " , " 10$ " )

let productos = [pañales, miel , shampoo]

for (let index = 0; index < productos.length; index++) {
    document.write("<br>" + productos[index]+"<br>")

    
}

pañales.datos()
miel.datos()
shampoo.datos()


