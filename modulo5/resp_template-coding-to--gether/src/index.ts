import {carros,Carro} from "./data"
function buscarCarrosPorMarca(frota:Carro[], marca?:string):Carro[] {
    if (marca === undefined || marca.length===0) {
        return frota
    }
    return frota.filter(
        (carro:Carro) => {
            return carro.marca === marca
        }
        )
    }
     
console.table(buscarCarrosPorMarca(carros) );
    