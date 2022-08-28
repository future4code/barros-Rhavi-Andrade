
import { React, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import { useAuth } from "../hook/useAuth";
import { BASE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hook/useRequestData";
import axios from "axios";


export default function TripDetailCard(tripDetailId) {

    const [dado, setDado] = useState()

    useRequestData(`${BASE_URL}trip/${tripDetailId}`)


    return (
        <div>
            {useRequestData.description}
            <p>this is working</p>

        </div>
    )


}