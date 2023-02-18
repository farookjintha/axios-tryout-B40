export const getAllQoutes = async () => {
    const response = await fetch('https://fsd-quotes-backend.onrender.com/api/quotes');
    const data = await response.json();
    return data;
}

export const addQuote = async (quote) => {
    const response = await fetch('https://fsd-quotes-backend.onrender.com/api/quotes', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quote)
    })
    const data = await response.json();
    return data;
}

export const updateQuote = async (quote, quoteId) => {
    const response = await fetch(`https://fsd-quotes-backend.onrender.com/api/quotes/${quoteId}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quote)
    })
    const data = await response.json();
    return data;
}

export const deleteQuote = async (quoteId) => {
    const response = await fetch(`https://fsd-quotes-backend.onrender.com/api/quotes/${quoteId}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    return data;
}