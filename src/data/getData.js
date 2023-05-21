import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

const getData = async (url) => {
    const data = await axios.get(`${apiBaseUrl}${url}?api_key=${apiKey}`)
    
    return data.data.results
}

export default getData