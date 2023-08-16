
function FilmBanner({title="error", image='../assets/error-icon.png'}) {
    return (
        <div>
            <a>
                <img src={image} className='w-[225px] h-[318px]'></img>
            </a>
            <p>{title}</p>
        </div>
    )
}



export default FilmBanner