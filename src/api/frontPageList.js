const proxyURL = 'http://localhost:8080/api';


async function requestTopAnime(ranking_type) {
    const rankedURI = `${proxyURL}/anime/ranked?ranking_type=${ranking_type}`;
    try {
        const response = await fetch(rankedURI, {
            method: "GET"
        })

        const animeList = await response.json();
        
        return animeList.map(item => ({
            id: item.node.id,
            title: item.node.title,
            rank: item.ranking.rank,
            main_picture: item.node.main_picture
        }))
    } 
    catch (error) {
        console.error('Error during API request:', error);
    }
}

requestTopAnime('airing');

export default requestTopAnime;