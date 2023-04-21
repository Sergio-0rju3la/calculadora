
var cal={
    teclas:document.querySelectorAll("#calcular li"),
    operacion:document.querySelector("#operaciones"),
    accion:null,
    cantisignos:0,
    cantidecimal:false,
    digito:null,
    resultado:false

}
//objeto con los metodos de la calculadora

var me={
    inicio:function()
    {
        for(var i=0;i<cal.teclas.length;i++){
            cal.teclas[i].addEventListener("click",me.oprimirtecla);

        }
    },
    oprimirtecla:function(teclas){
        cal.accion=teclas.target.getAttribute("class");
        cal.digito=teclas.target.innerHTML;
        me.calculadora(cal.accion,cal.digito);
    },
    calculadora:function(accion,digito){
        switch(accion){
            case"numero":
            cal.cantisignos=0;
            if(cal.operacion.innerHTML=="0"){
                cal.operacion.innerHTML=digito;
            }else{
                if(cal.resultado){
                    cal.resultado=false;
                    cal.resultado.innerHTML=digito;
                }else{
                    cal.operacion.innerHTML +=digito
                }
            }break;
        }
    }
}
me.inicio();