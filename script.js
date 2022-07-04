function comprar(){
    let compra1=parseInt(prompt("Ingrese USDT que desea comprar (Maximo 10.000 USDT)"));
    let compra2= compra1*239;
    if(compra1>10000){
        alert("Ha exedido el limite de compra.");
        locattion.reload()
    }else if(compra1<1){
        alert("Debe comprar al menos 1 USDT");
    }
    while((compra1>0)&&(compra1<10000)){
        alert("Total de compra en ARS: "+compra2+". Presione ACEPTAR para confirmar la compra.");
        alert("Gracias por tu compra!");
        break;
    }
}