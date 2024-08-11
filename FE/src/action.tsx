'use server';

export const fetchData = async (page) => {
    // const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
    try {
        const res = await fetch(`${process.env.NEXT_DOMAIN_URL}?page=${page}&limit=7`, { cache: 'no-store' });
        const data = await res.json();
        console.log('test data 29/7', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchData;
