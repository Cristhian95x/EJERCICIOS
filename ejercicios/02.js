let nombre = prompt(" hola,un gusto saludarte ingresa tu Nombre ");
let glosario = prompt( nombre +  " que palabra quieres traducir ");


switch (glosario) {
    case "apartamento":
        alert("apartment");
        break;

        case "carro":
            alert("car");
            break;

            case "perro":
                alert ("dog");
                break;

                 case "futbol":
                 alert ("soccer");
                 break;


    default:
        alert("a sucedido un error intentalo nuevamente")
        break;
}