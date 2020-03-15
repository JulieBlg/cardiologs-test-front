import { Card } from '../typings';

interface CardStatus {
    card: Card;
    status: string;
}

export const getCards = async () => {
    const response = await window.fetch('http://localhost:4000/cards', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    return data;
}

export const updateCardStatus = async ({card, status}: CardStatus) => {
    const response = await window.fetch(`http://localhost:4000/cards/${card.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...card, status }),
    });

    const data = await response.json();

    return data;
}

export const searchCards = async (input: string) => {
    const response = await window.fetch(`http://localhost:4000/cards?q=${input}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    return data;
}