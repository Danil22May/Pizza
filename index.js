let sal = 10;
// let aceite = 2;
let levadura = "7 gramos de levadura";
let harina = 500;
function prepararMasa(harina, levadura){
    return result =
`Se disuelve la levadura seca y el azúcar en el agua tibia. Después de 10 minutos, la mezcla ya está espumosa y lista para usar.
En un bol grande, se mezclan ${harina} gramos de harina de trigo y la sal
Ahora se añade la mezcla de ${levadura} y el aceite de oliva a la harina. La masa comienza a formarse.
`;
}

function app(){
    console.log(prepararMasa(harina, levadura));
}
app();

console.log(makeString(levadura,harina))

