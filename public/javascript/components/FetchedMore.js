// APP > MAIN > #

class FetchedMore extends React.Component {
    render() {
        return (
            <div className="more-grid">

                {/* ======================= PODCASTS ======================= */}

                {this.props.morePodcasts.map((morePodcast, index) => {
                    return (
                        <div className="more-card" key={index} target="_blank">
                            <a href={morePodcast.listennotes_url}>
                                <img className="podcast-more" src={morePodcast.thumbnail} />
                                <h5 className="limited">{morePodcast.podcast_title_original}</h5>
                                <p className="limited">{morePodcast.title_original}</p>
                            </a>
                        </div>
                    )
                })}

                {/* ======================= TV & MOVIES ======================= */}

                {this.props.moreSeries.map((moreSeries, index) => {
                    return (
                        <div className="more-card" key={index}>
                            <p className={((moreSeries.media_type == "movie") ? "series-type movie" : "series-type tv")}>{moreSeries.media_type}</p>

                            {(moreSeries.media_type == "movie")
                                ? <a href={'https://www.themoviedb.org/movie/' + moreSeries.id} target="_blank">
                                    {(moreSeries.poster_path
                                        ? <img className="series" src={"https://image.tmdb.org/t/p/w300/" + moreSeries.poster_path} />
                                        : <div className="series-null">
                                            <h3>Image unavailable</h3>
                                        </div>
                                    )}

                                    {(moreSeries.name
                                        ? <h5 className="limited">{moreSeries.name}</h5>
                                        : <h5 className="limited">{moreSeries.title}</h5>
                                    )}
                                </a>
                                : <a href={'https://www.themoviedb.org/tv/' + moreSeries.id} target="_blank">
                                    {(moreSeries.poster_path
                                        ? <img className="series" src={"https://image.tmdb.org/t/p/w300/" + moreSeries.poster_path} />
                                        : <div className="series-null">
                                            <h3>Image unavailable</h3>
                                        </div>
                                    )}

                                    {(moreSeries.name
                                        ? <h5 className="limited">{moreSeries.name}</h5>
                                        : <h5 className="limited">{moreSeries.title}</h5>
                                    )}
                                </a>
                            }
                        </div>
                    )
                })}

                {/* ======================= YOUTUBE ======================= */}

                {this.props.moreYoutubes.map((moreYoutube, index) => {
                    return (
                        <div className="more-card" key={index}>
                            <a href={'https://www.youtube.com/watch?v=' + moreYoutube.id.videoId}
                                target="_blank">
                                <img className="youtube" src={moreYoutube.snippet.thumbnails.medium.url} />
                            </a>
                            <h5 className="limited">{moreYoutube.snippet.channelTitle}</h5>
                            <p className="limited">{moreYoutube.snippet.title}</p>
                        </div>

                    )
                })}

            </div>

        )

    }
}