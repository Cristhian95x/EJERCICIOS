let entrada = prompt(" Es un placer, bienvenida(o) a COSTAPIZZA ¿cuál es tu nombre? ");
let presentacion = prompt( " que desea pedir " + entrada + "," + " te ofrezco presentación personal; mediano o familar, ¿cuál desearias? ");
let porciones = prompt(" Perfecto, te ofrezco: pollo con champiñones; hawaiana; carnes; mexicana; criolla; vegetariana o carne y pollo.  ¿Cuál deseas llevar? :) ");  

// let ingredientes = ("general");
let ingrediente1 = ( "con pimientos" );
let ingrediente2 = ( "borde con queso costeño" );
let ingrediente3 = ( "con piña" );
let ingrediente4 = ( "con jamon" );
let ingrediente5 = ( "con salami" );
let ingrediente6 = ( "con pepperoni" );
let ingrediente7 = ( "con nachos" );
let ingrediente8 = ( "con maiz" );
let ingrediente9 = ( "con tocineta" );
let ingrediente10 = ( "con adicion de salchichas" );
let ingrediente11 = ( "con adicion de champiñones" );
let ingrediente12 = ( "con salsa de la casa" );
let ingrediente13 = ( "con pico de gallo" )


switch(porciones){
    case "pollo con champiñones":
        let ingrediente1 = prompt(" ¿desea con pimientos o sin pimientos? ");
        if (ingrediente1 == " con pimientos ") { 
            alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente1 + ", para servirte " + entrada);
        }
        else {
            let ingrediente12 = prompt(" la deseas con salsa de la casa o borde con queso costeño ");
            switch (ingrediente12) {
                case "con salsa de la casa":
                    alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente1  + ingrediente12 + ", para servirte " + entrada);
                    break;
                       case "borde con queso costeño":
                       alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente1 + " y " + ingrediente2 + ", para servirte " + entrada );
                        break;
                        case "no":
                            alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente1 + ", para servirte " + entrada);
                            break;}
        }
    }

    switch(porciones){
        case "hawaiana":
            let ingrediente3 = prompt(" ¿desea con piña o sin piña? ");
            if (ingrediente3 == " con piña ") { 
                alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente3 + ", para servirte " + entrada);
            }
            else {
                let ingrediente4 = prompt(" la deseas con jamon o con salami ");
                switch (ingrediente4) {
                    case "con jamon":
                        alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente3 +  ingrediente4 + ", para servirte " + entrada);
                        break;
                           case "con salami":
                           alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente3 + " y " + ingrediente5 + ", para servirte " + entrada );
                            break;
                            case "no":
                                alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente3 + ", para servirte " + entrada);
                                break;}
            }
        }
    

        switch(porciones){
            case "carnes":
                let ingrediente5 = prompt(" ¿desea con salami o sin salami? ");
                if (ingrediente5 == " con salami ") { 
                    alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente5 + ", para servirte " + entrada);
                }
                else {
                    let ingrediente6 = prompt(" la deseas con pepperoni o con queso ");
                    switch (ingrediente6) {
                        case "con pepperoni":
                            alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente5 +  ingrediente6 + ", para servirte " + entrada);
                            break;
                               case "con queso":
                               alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente5 + " y " + ingrediente1 + ", para servirte " + entrada );
                                break;
                                case " no ":
                                    alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente5 + ", para servirte " + entrada);
                                    break;}
                }
            }


            switch(porciones){
                case "mexicana":
                    let ingrediente5 = prompt(" ¿desea con nachos o sin nachos? ");
                    if (ingrediente5 == " con nachos ") { 
                        alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente7 + ", para servirte " + entrada);
                    }
                    else {
                        let ingrediente13 = prompt(" la deseas con pico de gallo o sin pico de gallo ");
                        switch (ingrediente13) {
                            case "con pico de gallo":
                                alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente7 +  ingrediente13 + ", para servirte " + entrada);
                                break;
                                   case "sin pico de gallo":
                                   alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente7  +  ", para servirte " + entrada );
                                    break;
                                    case " no ":
                                        alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente7 + ", para servirte " + entrada);
                                        break;}
                    }
                }


                
            switch(porciones){
                case "criolla":
                    let ingrediente5 = prompt(" ¿desea con maiz o sin maiz? ");
                    if (ingrediente5 == " con maiz ") { 
                        alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente8 + ", para servirte " + entrada);
                    }
                    else {
                        let ingrediente9 = prompt(" la deseas con tocineta o con pimientos ");
                        switch (ingrediente9) {
                            case "con tocineta":
                                alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente8 +  ingrediente9 + ", para servirte " + entrada);
                                break;
                                   case "con pimientos":
                                   alert( " tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente8 + " y " + ingrediente1 + ", para servirte " + entrada );
                                    break;
                                    case " no ":
                                        alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente8 + ", para servirte " + entrada);
                                        break;}
                    }
                }

                switch(porciones){
                    case "vegetariana":
                        let ingrediente1 = prompt(" ¿desea con maiz o sin maiz? ");
                        if (ingrediente1 == " con maiz ") { 
                            alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente1 + ", para servirte " + entrada);
                        }
                        else {
                           
                            switch (ingrediente1) {
                                case "sin maiz":
                                    alert("  tu pedido es una pizza " + presentacion + " de " + porciones   + ", para servirte " + entrada);
                                    break;
                                   
                                        case " no ":
                                            alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ", para servirte " + entrada);
                                            break;}
                        }
                    }

                    switch(porciones){
                        case "carne y pollo":
                            let ingrediente10 = prompt(" ¿desea con adicion de salchichas o adicion de champiñones? ");
                            if (ingrediente1 == " con adicion de salchichas ") { 
                                alert(" su pedido es una pizza " + presentacion + " tipo " + entrada + ingrediente10 + ", para servirte " + entrada);
                            }
                            else {
                               
                                switch (ingrediente11) {
                                    case "con adicion de champiñones":
                                        alert("  tu pedido es una pizza " + presentacion + " de " + porciones + ingrediente11  + ", para servirte " + entrada);
                                        break;
                                       
                                            case " no ":
                                                alert(" tu pedido es una pizza " + presentacion + " de " + porciones + ", para servirte " + entrada);
                                                break;}
                            }
                        }


    