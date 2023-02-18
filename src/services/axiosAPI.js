import axios from 'axios';


export const getAllQoutes = async () => {
    const response = await axios.get('https://fsd-quotes-backend.onrender.com/api/quotes');
    return response.data;
}

export const addQuote = async (quote) => {
    const response = await axios.post('https://fsd-quotes-backend.onrender.com/api/quotes', quote);
    return response.data;
}

export const updateQuote = async (quote, quoteId) => {
    const response = await axios.put(`https://fsd-quotes-backend.onrender.com/api/quotes/${quoteId}`, quote);
    return response.data;
}

export const deleteQuote = async (quoteId) => {
    const response = await axios.delete(`https://fsd-quotes-backend.onrender.com/api/quotes/${quoteId}`);
    return response.data;
}