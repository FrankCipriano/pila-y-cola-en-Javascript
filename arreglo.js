let nombres = ["franklin","yessenia","sergio"];
let lugares = new Array("chicua","semeja","camanchaj");

//recorrido mediante una estructura
for(var i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}

//recorrido mediante una funcion de js con o sin indice
//-------------CON INDICE------------------
lugares.forEach(function(elemento,indice) {
    console.log(elemento,indice);
})
//-------------------SIN INDICE-----------------
nombres.forEach(function(elemento){
    console.log(elemento)
})


//agregar elemento al final del arreglo
nombres.push("maria");
lugares.push("chuabaj");
//agregar elemento el inicio del arreglo
nombres.unshift("Roberto");
lugares.unshift("chichi");
console.log(nombres);
console.log(lugares);


//eliminar el ultimo elemento del arreglo
nombres.pop();
lugares.pop();
//eliminar el primer elemento del arreglo
nombres.shift();
lugares.shift();
console.log(nombres);
console.log(lugares);

//obtener el indice de un elemento dentro del arreglo
console.log(nombres.indexOf("sergio"));

//eliminar un elemento en particular
console.log(lugares.splice(2,1));//indice 2 eliminado
console.log(lugares);