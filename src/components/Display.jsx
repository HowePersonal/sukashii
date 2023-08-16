import {useState, useEffect} from 'react'
import FilmRow from './FilmRow.jsx'
import requestTopAnime from '../api/frontPageList.js'

function RankedAiringDisplay() {
    const [rankedList, setRankedList] = useState([]);

    useEffect(() => {
        requestTopAnime('airing')
            .then(data => {
                setRankedList(data)
            })
            .catch(error => {
                console.error("Error while fetching data: ", error)
            })
    }, [])

    return (
        <div>
            <FilmRow animeList = {rankedList}/>
        </div>
    )
}


export default RankedAiringDisplay