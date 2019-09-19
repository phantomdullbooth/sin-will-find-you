// APP > MAIN > FETCHEDHOME > #

class HomeSeries extends React.Component {
    render() {
        return (
            <div className="media">
                {this.props.homeSeries.map((homeSeries, index) => {
                    return (
                        <div className="media-card" key={index}>

                            <p className={((homeSeries.media_type == "movie") ? "series-type movie" : "series-type tv")}>{homeSeries.media_type}</p>

                            {(homeSeries.media_type == "movie")
                                ? <a href={'https://www.themoviedb.org/movie/' + homeSeries.id} target="_blank">
                                    {(homeSeries.poster_path
                                        ? <img className="series" src={"https://image.tmdb.org/t/p/w300/" + homeSeries.poster_path} />
                                        : <div className="series-null">
                                            <h3>Image unavailable</h3>
                                        </div>
                                    )}

                                    {(homeSeries.name
                                        ? <h5>{homeSeries.name}</h5>
                                        : <h5>{homeSeries.title}</h5>
                                    )}
                                </a>
                                : <a href={'https://www.themoviedb.org/tv/' + homeSeries.id} target="_blank">
                                    {(homeSeries.poster_path
                                        ? <img className="series" src={"https://image.tmdb.org/t/p/w300/" + homeSeries.poster_path} />
                                        : <div className="series-null">
                                            <h3>Image unavailable</h3>
                                        </div>
                                    )}

                                    {(homeSeries.name
                                        ? <h5>{homeSeries.name}</h5>
                                        : <h5>{homeSeries.title}</h5>
                                    )}
                                </a>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}