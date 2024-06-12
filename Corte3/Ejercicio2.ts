function Mostrar(){
}
console.log("Esta Funcion Muestra El Tipico Mensaje de  \n\n\n Hola Mundo ");    

Mostrar();

function Division(x:number,y:number):number{//Parece que tener 2 variables con el mismo nombre en diferentes archivos tambien produce Error Lo que Explica Por que el Profesor Aunque Esta en Diferentes Imagenes No Repitio la Misma Variable
    return x/y;//Volviendo a estas unas Variables Globales, Sin embargo el Puso 1 con Mayus y la Otra sin , Entonces Raro es un Rato
}

//Segundo Ejercicio

Division(13,17);

let Saludo=function(){
    console.log("Hola y Bienvenido a Todo El Mundo!");
};// ? este ; es por Buena Practica o Por Costumbre 

Saludo();

//Tercer Ejercicio

let Exponente=function(x:number,y:number):number{
    return x**y;
}
Exponente(15,20)

//Cuarto Ejercicio

function StringError(Saludo:string,name:string):string{
    return Saludo+' a '+name+'!';
}
StringError('Hola',' Estudiantes');
/* Saludar('Hola');// LA Funcion no esta Diseñada para Recibir 1 o 3 Argumentos
Saludar('Hola',' Bill ','Puertas'); */

//Quinto Ejercicio

function OtroTipoError(Saludando:string,name?:string):string{
    return Saludando+''+name+'!';
}

OtroTipoError('Hola',' Steve');
OtroTipoError('Hola');//al estar ? No es obligatorio Recibir el Segundo Argumento
/* Saludos('Hola', 'Billy',' Mandy');//Da Error Pues Recibe 3 Arugmentos */

//Sexto Ejercicio 

function Saludado(name:String,Saludador:string="Hola"):string{//Mismo Comportamiento que con el ?
    return Saludador+''+name+'!';
}

Saludado('Ana');
Saludado('Ana',' Hola');
Saludado('Ana María');

//Septimo Ejercicio

let Suma=(x:number,y:number):number=>{
    return x+y;
}

Suma(20,30);

//Octavo Ejercicio

let MostrarEnConsola=()=>console.log('Hola TypeScript V2.0');

MostrarEnConsola();//Existe algo como "print" que asumo que hace lo mismo que en C++

//Ejercicio Nueve

/* ? Chingada madre si se puede tener Varias Funciones con el mismo nombre pero Diferente Type por que no hacer lo mismo en el otro sentido, y ya si quieres que esa Declaración sea Global ,Púes hya lo indicaras Manualmente */

function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:any,b:any):any{//Si Any es "Cualquiera" y "Cualquiera" Incluye a : Strings y a Numbers || Booleanos Por qué Los toma Como Diferente Entrada
    return a+b;
}

console.log(add("Hola ",'Steve'))
console.log(add(10,30));

//Ejercicio Decimo

function ErrorSuperPosicion(a:string,b:string):void //A buenas Horas de Explicarlo , un Poco tarde
{
    console.log(a+b);
} 
function ErrorSuperPosicion(a:number):void{
    console.log(a);
} 

//Undemico Ejercicio

function ParametroRest(Saludo:string,...names:string[]){
    return Saludo+''+names.join(",")+"!";
}

ParametroRest ("Hola","Stuard","Stikks");
ParametroRest ("Hola");