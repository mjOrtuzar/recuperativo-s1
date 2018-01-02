//Dado un arreglo y un número, retornar el índice (posición) del número. 


var arrTest = [2,4,1,6,9,8]; //array de prueba
var arrtest = [9,2,3,4,5,6]; //array de prueba.

//a partir de estos array se creara una funcion que detecte si el elemento,
//coincide con el parametro de busqueda. Si es asi, se mostrara por la consola
//el indice de tal elemento.
//f(x)=funcion
function detect (arr,num){  //la f(x) detect, recibe dos parametros, uno es el array y el otro es el numero  que se buscara(num).
    for(i= 0;i<=arr.length; i++){ // mediante un for se iterara a lo largo del array para buscar el elemento en cuestion
        if (i===arr.indexOf(num)) { //para despues mediante un if  definir si el indice del elemento coincide con el indice del numero de busqueda (num)
            return arr.indexOf(num) //si coincide, retornara el indice del elemento.
        }
    }
}
console.log(detect(arrTest,6));

    

 
