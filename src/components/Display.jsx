import {useState} from 'react'
import FilmBanner from './FilmDisplay.jsx';
import requestTopAnime from '../api/frontPageList.js'

function RankedAiringDisplay() {
    let RankedList = localStorage.getItem('topRankedairingAnime');
    if (RankedList === null) {
        RankedList = requestTopAnime('airing', 10);
    }
    console.log(RankedList);
    return (
        <div className='grid grid-rows-5'>
            
        </div>
    )
}


export default RankedAiringDisplay