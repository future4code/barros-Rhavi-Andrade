import React from "react";
import { Cardbox, Logo1, Logo2, Imgbox, Infobox, Buttonbox, Dislike, Like, Name, Age, Bio } from "./style";




export default function Matchcard(props) {
    const { perfilInfo } = props

    return (
        <div>
            <Cardbox>
                <Logo1>Kipanga</Logo1><Logo2>Match</Logo2>
                <Imgbox>

                    <Infobox>
                        <Name>{props.name}</Name>
                        <Age>{props.age}</Age>
                        <Bio></Bio>
                    </Infobox>
                </Imgbox>
                <Buttonbox>
                    <Dislike></Dislike>
                    <Like></Like>
                </Buttonbox>
            </Cardbox>
        </div>
    )
}

