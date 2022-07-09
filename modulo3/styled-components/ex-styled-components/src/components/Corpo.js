import React from "react";
import { Formularios, FormulariosBox, FormulariosInputM, FormulariosInputR } from "../style";

const Corpo = () => {
    return (

        <Formularios>


            <FormulariosBox>
                <span>
                    Remetente:
                </span>
                <FormulariosInputR>

                </FormulariosInputR>
                <span>
                    Msg:
                </span>
                <FormulariosInputM>
                </FormulariosInputM>
                <button>
                    enviar mensagem
                </button>
            </FormulariosBox>
        </Formularios>


    )
}

export default Corpo;