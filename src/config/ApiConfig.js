import axios from "axios"

export const BASE_API_URL = "http://localhost:8080"

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL:BASE_API_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        'Content-Type':"application/json"
    }
})