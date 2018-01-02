/*Dado un arreglo de números positivos, retornar true si este se encuentra ordenado de menor a mayor, en caso contrario false. 
No puede usar el método sort() de javascript.*/


var arr = ["1","2","5","8","10","2"] // array con el que se probara la funcion 
var arr2 = [2,4,6,8,10]
function validate(arr) { //la funcion validate, validara si el array que se le entrega esta ordenado.
    var result = true;                       //se pasa un valor por defecto que es true si el array esta ordenado.
    arr.forEach(function(element,index){ //se usa el medoto.forEach para que itere y ordene el array ingresado
        if(arr[index]>arr[index+1]){
            result = false; //si  la condicion del if es falsa, el valor de result cambia al valor entregado por defecto.
        }
    });
    return result;
}
console.log(validate(arr2));
