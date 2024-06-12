let esActivo:boolean=true; // No es Obligatorio Usar ;
let daError:boolean=false;

esActivo=false;
daError=true;

const tieneAcceso:boolean=esActivo && daError;

console.log(tieneAcceso)


//Segundo Punto:

let Edad:number=30;
let Precio:number=99.99
let Contador:number=-10;

Edad=24;
Precio=90;
Contador=3;

const total:number=Precio*Contador;
const Promedio:number=total/Edad;

console.log(total)

//Tercer Ejercico

let Nombres:string="Jhon Doe",Mensaje:string="Hola Mundo",Description:string='Este es una Descripcion de Multi-linea';//Se Pueden Declarar Variables Continuas   Con ','

Nombres='Jana Smith';//? ?
Mensaje='Bienvenido de Vuelta!';
Description="Este es Otra Descripción \n Multi-Linea.";

const Nombre_Completo:string=Nombres+''+Mensaje;
const Saludo_Amistoso:string='${Nombres},${Mensajes}';

//Cuarto Ejercicio

let Binario:number=0b101010,Mascara:number=0b1000000;//No Me queda Muy claro pero estoy Convencido que el Sistema Binario Consite de 0 y 1 y Por lo Tando la B debe ser un error

const Resultado:number=Binario|Mascara;

console.log(Resultado)

//Quinto Ejercicio

let Color_Hexadecimal:number=0xFF00FF,Flags:number=0xD0A5;//!Por algún motivo quitar  el 0x Provoca error

const Colores_Combinados:number=Color_Hexadecimal&Flags;

//Sexto Ejercicio

let Numeros:number[]=[1,2,3,4,5],Primer_Nombre:string[]=['Jhon','Jane','Juan'],Banderas:boolean[]=[true,false,true];

console.log(Numeros[0]);console.log(Primer_Nombre[1]);console.log(Banderas[2]);//EL ; Indica Fin de Linea por que es Posible Hacer Varias Lineas de Codigo Mientras Sea Corto.

//Septimo Ejercicio

let Numeros1:number[]=[1,2,3,4,5],Nombres_Completo:string[]=['Samuel','Roso','Camilo'],Banderas1:boolean[]=[true,false,false];//? Re incomodo Declarar  Arryas Y Objetos o es falta de costumbre.

console.log(Numeros1[0]),console.log(Nombres_Completo[1]),console.log(Banderas1[2]);

Numeros1.push(6),Nombres_Completo.pop();

const longitud:number=Numeros1.length;

//Octavo Ejercicio //! Me acabo de Percatar que este tipo de ejercicios no Eran

function Multiplicacion(a:number,b:number) { 
    if (a<=0||b<=0) {
        throw new Error("Los Números Debe Ser Mayores a 0");//Es
    }
    return a*b;//Aquí da un error por algun motivo (O almenso yo lo concidero un Error)
}

const Numero1=13,Numero2=11;

const Resultados=Multiplicacion(Numero1,Numero2);

console.log(Resultados);

//Noveno Ejercicio

function MostrarDia(Dia:string){
    switch(Dia){
        case"Domingo":
        console.log("Es Domingo 9");
        break;
        case"Lunes":
        console.log("Es Lunes 10");
        break;
        case"Martes":
        console.log("Es Martes 11");
        break;
        case"Miercoles":
        console.log("Es Miercoles 12");
        break;
        case"Jueves":
        console.log("Es Jueves 13");
        break;
        case"Viernes":
        console.log("Es Viernes 14");
        break;
        case"Sabado":
        console.log("Es Sabado 15");
        break;
        default:
            throw new Error("Ese Día No Existe")
    }
}
MostrarDia("Domingo");

// Decimo Ejercicio

type Union={
    name:string;
    edad:number;
}|{
    Email:string;
    Telefono:String;
};
let x:Union={name:"Juancho",edad:30};
x={Email:"Juancho@example.com",Telefono:"301-304-522000"};//La entrada es en cadena de texto  , o lo Hizo Así,solo por ser Un Ejemplo.

//Undecimo Ejercicio

for(let i:number=2;i<=200;i+=5){
    console.log(i);
}

//Doceavo Ejercicio

const ListaNombres:Array<string>=["Juan","Pedro","Camilo","Samuel"];
for(const string of ListaNombres){
    console.log(ListaNombres);
}

//Treceavo Ejercicio

let I:number=1999;
while(I<=1){
    console.log(I);
    I-=23;
}