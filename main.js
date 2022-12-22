const url ='https://restcountries.com/v3.1/name/'

const busqueda=document.querySelector('#input');
const envio=document.querySelector('#submit');
const respuesta=document.querySelector('#respuesta');

const muestraResultados=(res)=>{
    const capital=res[0].capital;
    respuesta.innerHTML=`<p>${capital}</p>`
}

const recibeInfo=async()=>{
    const buscaPais=busqueda.value;
    const endpoint=`${url}${buscaPais}`;

    try{
        //Verificar pais ingresado
        const response = await fetch(endpoint,{cache:'no-cache'});
        //Si coincide con la api
        if(response.ok){
            const jsonResponse=await response.json();

            muestraResultados(jsonResponse);
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