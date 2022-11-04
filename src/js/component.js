//Función saludar. 
import "../css/componente.css"
//import webpackLogo from "../assets/imgs/webpack-logo.png";

export const saludar = (nombre)=> { 
    //Agregando h1
    console.log("CREANDO ETIQUETA H1..");
    const h1 = document.createElement("h1");
    h1.innerText = `Hola ${nombre}`;
    document.body.append(h1);

    //Agregando img
    // const img = document.createElement("img");
    // img.src = webpackLogo; 
    // document.body.append(img);
}; 