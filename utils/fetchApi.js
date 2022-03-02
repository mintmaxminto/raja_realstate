import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '8791793ce6mshf87557a183b56bbp198b7ajsn516326907da6'
        }
    });

    return data;
}