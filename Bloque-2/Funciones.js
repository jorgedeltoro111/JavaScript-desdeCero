//Anatomia de una funcion
const obtenerDescuento = (descuento, precio) => {
    const porcentajeDecimal = descuento / 100;
    return precio - (precio * porcentajeDecimal);
}

console.log(obtenerDescuento(20, 100));