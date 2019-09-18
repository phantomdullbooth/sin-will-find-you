
//components
class Movies extends React.Component {
    render() {
        console.log(this.props.movie)
        return (
            <div className="media">
                {this.props.homeMovies.map((homeMovie, index) => {
                    return (
                        <div className="media-card-movie" key={index}>

                            {(homeMovie.poster_path 
                                ? <img className="movie" src={"https://image.tmdb.org/t/p/w300/" + homeMovie.poster_path} />
                                : <div className="movie-null">
                                    <h3>Image unavailable</h3>
                                </div>
                                )}

                            {( homeMovie.name
                                ? <h5><span className="important">{homeMovie.name}</span></h5>
                                : <h5><span className="important">{homeMovie.title}</span></h5>
                                )}

                                <p>{homeMovie.media_type}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}