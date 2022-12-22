const url ='https://restcountries.com/v3.1/name/'

const busqueda=document.querySelector('#input');
const envio=document.querySelector('#submit');
const respuesta=document.querySelector('#respuesta');

const muestraResultados=(res)=>{
    const capital=res[0].capital;
    const region=res[0].region;
    respuestaNombre.innerHTML=`<p>${capital}</p>`
    respuestaRegion.innerHTML=`<p>${region}</p>`
}

const recibeInfo=async()=>{
    const buscaPais=busqueda.value; //
    const endpoint=`${url}${buscaPais}`;


    try{
        //Verificar pais ingresado
        const response = await fetch(endpoint,{cache:'no-cache'});
        //Si pais coincide con api
        if(response.ok){
            const jsonResponse=await response.json();

            muestraResultados(jsonResponse);
        //Sino encuentra el pais
        }else{
            respuesta.innerHTML=`<p>No encontrado</p>`
        }

    }catch(error){
        console.log(error);
    }
}

envio.addEventListener('click',recibeInfo);

var el = document.getElementById("input");
    el.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
