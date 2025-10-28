const API_KEY = process.env.API_KEY;

export default async function getData() {
    const res = await fetch(`https://api.artsearch.io/artworks?api-key=${API_KEY}&query=medieval+knights&number=10`)
    return res.json();
}