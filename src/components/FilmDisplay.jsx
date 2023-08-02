
function FilmBanner(title="error", mediumIMG='../assets/error-icon.png') {
    return (
        <div>
            <a>
                <img src={mediumIMG} className='w-[225px] h-[318px]'></img>
            </a>
            <p>{title}</p>
        </div>
    )
}



export default FilmBanner