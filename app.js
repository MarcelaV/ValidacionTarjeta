var pregunta;
var item;
function isValidCard(){

pregunta = prompt('Ingrese el n\u00famero de su tarjeta de cr\u00E9dito por favor'); //preguntar al usuario número de tarjeta

																								   //Incluye ParseInt para convertir string en númerico
//pregunta.split([''][])
var bunker = pregunta.split("").map(Number); //split separa una cadena. Map, convierte la cadena en Array

var array; 

for (var i = 0; i < bunker.length; i++) {
  item = bunker.pop(); //POP corta última posición
  array = bunker.splice(i, 0, item); //splice retorna: (i) donde se inicia, (0) lo que se quita, (item), la variable
  										//como pop cortó en una iteración, cuando se retorna item, se devuelven las cifras inversas.
  
}

var pares = []; //push sólo sirve para array por eso se crea uno

for (var i = 0; i < bunker.length; i++) {
	if (i % 2 == 0){ //así se realiza la búsqueda de números pares, el % es una función llamada residuo
pares.push(i); //con push enviamos la información de una "caja" a otra, se pide que i envíe a pares ya que se hace la búsqueda desde la iteración

  }
}

var multiplica;

/*
for (var i = 0; i < pares.length; i++){
	multiplica = (i * 2);
	pares.push(i);

}
*/
console.log(pares);



}

isValidCard();



