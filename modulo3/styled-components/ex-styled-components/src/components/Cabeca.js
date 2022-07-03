import React from "react";
import { Labelogo, Logotipo, Logotitle } from "../style"
import logoimg from "../img/logotipo.png"

export default function Cabeca() {
    return (
        <Logotipo>
            <Labelogo src={logoimg} alt='Teste do cabra' />
            <Logotitle>LabZapLin</Logotitle>
        </Logotipo>
    )
}