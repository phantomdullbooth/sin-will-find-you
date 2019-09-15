
//components
class Movies extends React.Component {
    render() {
        console.log(this.props.movie)
        return (
            <div className="media">
                {this.props.movie.map((movies, ross) => {
                    return (
                        <div className="media-card-movie" key={ross}>

                            {(movies.poster_path 
                                ? <img className="movie" src={"https://image.tmdb.org/t/p/w300/" + movies.poster_path} />
                                : <div className="movie-null">
                                    <h3>Image unavailable</h3>
                                </div>
                                )}

                            {( movies.name
                                ? <h5><span className="important">{movies.name}</span></h5>
                                : <h5><span className="important">{movies.title}</span></h5>
                                )}

                                <p>{movies.media_type}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
