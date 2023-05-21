import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

const searchData = async (url, query) => {
    const data = await axios.get(`${apiBaseUrl}${url}?query=${query}&api_key=${apiKey}`)
    
    return data.data.results
}

export default searchData