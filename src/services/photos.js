import axios from 'axios';

const API_BASE_URL = 'https://picsum.photos';

export async function fetchPhotos(page = 3, limit = 40) {
    try {
        const response = await axios.get(`${API_BASE_URL}/v2/list`, {
            params: {
                page: page,
                limit: limit
            }
        });

        const shuffled = response.data.sort(() => Math.random() - 0.5);

        return shuffled;

    } catch (error) {
        let message = "Falha ao conectar-se à API.";
        let status = 0;

        if (axios.isAxiosError(error) && error.response) {
            status = error.response.status;
            message = error.response.statusText || `Erro no servidor (${status}).`;
        } else if (error.request) {
            message = "Erro de rede. Verifique sua conexão.";
        }
        
        throw { status, message }; 
    }
}
