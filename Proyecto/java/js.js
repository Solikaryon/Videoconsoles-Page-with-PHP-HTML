// Actividad 3 Función para modificar formatos con js.
MJ-1300-1455
function formatosFnc() {
    formato  = document.getElementById("formatos").value;
    formato = parseFloat(formato);
    const formatoOne =  document.querySelectorAll(".customers"); 
    const formatoOnea =  document.querySelectorAll(".customers td, #customers th");
    const formatoOneb =  document.querySelectorAll(".customers th");
    const formatoTres = document.querySelectorAll(".customers tr:nth-child(even)");
    switch(formato) {
        case 0: 
                   
           for(i =0;i < formatoOne.length;i++) {
            formatoOne[i].style.cssText = 
            "font-family: Arial;border-collapse: collapse;width: 90%;";   
           }
           
           for(i =0;i < formatoOnea.length;i++) {  
            formatoOnea[i].style.cssText = 
            "border: 5px solid #ddd;padding: 8px;";
           }

           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #009dff;color: green;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: #009dff;"
           }
        break;

        case 1:                       
            for(i =0;i < formatoOne.length;i++) {
                formatoOne[i].style.cssText = 
                "font-family: Helvetica;border-collapse: collapse;width: 50%;  margin:0 auto";
            }
            
            for(i =0;i < formatoOnea.length;i++) {
                formatoOnea[i].style.cssText = 
                "border: 1px dashed rgb(28, 201, 255);padding: 25px;";
            }

          
           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 8px;padding-bottom: 20px;text-align: center;background-color: black;color: green;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: red;"
           }
        break;

        case 2:
            for(i =0;i < formatoOne.length;i++) {
                formatoOne[i].style.cssText = 
                "font-size:12px;font-family: Arial black;border-collapse: collapse;width: 75%;  margin:0 auto";
            }
            
            for(i =0;i < formatoOnea.length;i++) {
                formatoOnea[i].style.cssText = 
                "border: 2px dotted rgb(28, 10, 20);padding: 15px;";
            }

          
           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 10px;padding-bottom: 15px;text-align: right;background-color: purple;color: violet;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: violet;"
           }
        break;

        case 3:
            for(i =0;i < formatoOne.length;i++) {
                formatoOne[i].style.cssText = 
                "font-size:16px;font-family: Time New Romans;border-color: blue;width: 95%;  margin:10 auto";
            }
            
            for(i =0;i < formatoOnea.length;i++) {
                formatoOnea[i].style.cssText = 
                "border: 9px dotted green;padding: 10px;";
            }

          
           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 5px;padding-bottom: 5px;text-align: center;background-color: pink;color: green;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: cyan;"
           }
        break;

        
        case 4:                       
            for(i =0;i < formatoOne.length;i++) {
                formatoOne[i].style.cssText = 
                "font-family: Times New Romans;width: 100%;  margin:0 auto";
            }
            
            for(i =0;i < formatoOnea.length;i++) {
                formatoOnea[i].style.cssText = 
                "border: 1px dashed green;padding: 25px;";
            }

          
           for(i =0;i < formatoOneb.length;i++) {  
            formatoOneb[i].style.cssText = 
            "padding-top: 18px;padding-bottom: 18px;text-align: center;background-color: black;color: white;";
           }

           for(i=0;i<formatoTres.length;i++) {
            formatoTres[i].style.cssText =
            "background-color: gray;"
           }
        break;

  }
}


function rojoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "red";
    }
}

function verdeFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "green";
    }
}

function azulFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "blue";
    }
}

function blancoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "white";
    }
}


function negroFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "black";
    }
}


function moradoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "purple";
    }
}

function doradoFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "gold";
  }
}

function cyanFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "cyan";
  }
}

function amarilloFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "yellow";
  }
}

function pinkFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "pink";
  }
}

function orangeFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "orange";
  }
}

function stFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "slateblue";
  }
}

function crimsonFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "crimson";
  }
}

function dlgFcn() {
  const encabezados = document.querySelectorAll("table .color__fuente");
  for (let i = 0;i < encabezados.length; i++) {
      encabezados[i].style.color = "darkolivegreen";
  }
}

function fuenteFcn() {
    valor = document.getElementById("fuentes").value;
    valor = parseFloat(valor);
    const encabezados = document.querySelectorAll("table .color__fuente");
    switch(valor) {
        case 0:
            
            for (let i = 0;i < encabezados.length; i++) {                
                encabezados[i].style.fontFamily = "Times New Roman";
            }    
        break;

        case 1:            
            for (let i = 0;i < encabezados.length; i++) {               
                encabezados[i].style.fontFamily = "Papyrus";
            }    
        break;

        case 2:
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Helvetica";
        }    
        break;

        case 3:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Verdana";
        }    
        break;

        case 4:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Lucida Handwriting";
        }    
        break;

        case 5:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Arial Black";
        }    
        break;

        case 6:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Lucida Handwriting";
        }    
        break;

        case 7:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Papyrus";
        }    
        break;

        case 8:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Copperplate";
        }    
        break;

        case 9:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Garamond";
        }    
        break;

        case 10:            
        for (let i = 0;i < encabezados.length; i++) {               
            encabezados[i].style.fontFamily = "Monaco";
        }    
        break;
    }
}

function fontSizeFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    vfontSize = document.getElementById("sizeFuente").value;
    
    
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.fontSize = vfontSize + "px";
    }    
    
}
