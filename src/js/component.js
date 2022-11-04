//Función saludar. 
import "../css/componente.css"
//import webpackLogo from "../assets/imgs/webpack-logo.png";

export const saludar = ()=> { 
    //Agregando h1
    console.log("CREANDO ETIQUETA H1..");
    const h1 = document.createElement("h1");
    h1.innerText = `Bienvenidos`;
    document.body.append(h1);
}; 