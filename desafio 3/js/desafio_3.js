/*
let numero_3;

alert("ingrese un numero que quiera sumar");
numero_3=parseInt(prompt("ingrese numero"));

for (let i = 0; i < 10; i++) {
    
    let resultado_3=numero_3+i;
    console.log("numero ingresado"+numero_3+"se le suma "+i+" y el resulato da "+resultado_3);
}
*/

/*

let texto_3;
let i=0;

alert("ingrese texto y vea que pasa , ESC para terminar");
texto_3=prompt("ingrese texto");
while(texto_3 == null || texto_3=="" )
{
    texto_3=prompt("ingrese texto");
   
}
texto_3=texto_3.toUpperCase();

while(texto_3!=("ESC"))
{ 
i++;
console.log("tu texto mas "+texto_3+" "+i);

texto_3=prompt("ingrese texto, para terminar ingrese ESC");
while(texto_3 == null || texto_3=="" )
{
    texto_3=prompt("ingrese texto");
   
}
texto_3=texto_3.toUpperCase();

}

*/


let numero_final;
let i=0;

alert("ingrese numero para que se repita hola la cantidad que indique");
numero_final=parseInt(prompt("ingrese numero"));

do {
    i++;
    console.log("hola mas "+i);
} while (i<numero_final);