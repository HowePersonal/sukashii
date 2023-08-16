import FilmBanner from "./FilmBanner";

function FilmRow({animeList}) {
    animeList.forEach((anime) => {
        console.log(anime.main_picture.medium)
    })
    const animeBanners = animeList.map(
        anime => 
        <div>
            <FilmBanner
            title = {anime.title}
            image = {anime.main_picture.medium}
            />
        </div>
        )
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4">
            {animeBanners}
        </div>
    )
}

export default FilmRow;