import { getAllQoutes, addQuote, updateQuote, deleteQuote } from "../services/axiosAPI";
import { useEffect, useState } from 'react'

const ComponentB = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        console.log('MOUNTING')
        getQuotesList();
    }, []);

    const getQuotesList = async () => {
        const quotesList = await getAllQoutes();
        console.log('Quotes: Axios: ', quotesList);
        setQuotes(quotesList.quotes);
    }

    const addNewQuote = async () => {
        const data = {
            quote: 'Spread Happiness',
            author: 'Arjun'
        };
        await addQuote(data);
        await getQuotesList();
        console.log('Quotes added successfully');
    }

    const updateExistingQuote = async() => {
        const data = {
            quote: 'Spread Happiness to the world',
            author: 'Mr. Arjun'
        };
        const quoteId = '63f075a10217563a239add2e';

        await updateQuote(data, quoteId);
        await getQuotesList();
        console.log('Quotes updated successfully');
    }

    const deleteExistingQuote = async () => {
        const quoteId = '63f073f10217563a239add1e';
        await deleteQuote(quoteId);
        await getQuotesList();
        console.log('Quotes deleted successfully');
    }

    // useEffect(() => {
    //     console.log('Quotes NOW: ', quotes);
    // }, [quotes])


    return (
        <div>
            <h1>APIs using Axios</h1>
            <div className="quotes-container">
            {quotes.length ? quotes.map((quote, i) => (
                <div key={i}>
                    <p>Quote: {quote.quote}</p>
                    <p>Auther: {quote.author}</p>
                </div>
            )): <div>Loading...</div>}
            </div>
            <div>
                <button onClick={addNewQuote}>Add a new Quote</button>
            </div>
            <div>
                <button onClick={updateExistingQuote}>Update Quote</button>
            </div>

            <div>
                <button onClick={deleteExistingQuote}>Delete Quote</button>
            </div>
        </div>
    )
}

export default ComponentB;