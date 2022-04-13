import axios from "axios";

export default class GetWeather {
    static async getAll(city) {
        const response = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
            params: {
                q: city
            },
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '650094388cmsh8c5786fe394148bp10fba0jsn30934f6321ff'
            }
        })
        return response.data;
    }
}