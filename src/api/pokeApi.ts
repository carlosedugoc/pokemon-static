import axios from "axios";
import * as https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    httpsAgent: httpsAgent
})

export default pokeApi;