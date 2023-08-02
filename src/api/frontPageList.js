const client_id = '7d38b7060a59647709e287a23a48a2a3';

async function requestTopAnime(ranking_type, limit = 10) {
    const rankedURI = `https://api.myanimelist.net/v2/anime/ranking? \
                       ranking_type=${ranking_type}&
                       limit=${limit}`;
    try {
        const response = await fetch(rankedURI, {
            method: "GET",
            mode: "no-cors",
            headers: {
                "X-MAL-CLIENT-ID": client_id
            }
        })

        const data = await response.json();
        const animeList = data.data;
        
        localStorage.setItem(`topRanked${ranking_type}Anime`, animeList);
        //console.log(animeList)
        return animeList
    } 
    catch (error) {
        console.error('Error during API request:', error);
    }
}

export default requestTopAnime;