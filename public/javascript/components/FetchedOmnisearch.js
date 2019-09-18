// APP > MAIN > SEARCHRESULTS > #

class FetchedOmnisearch extends React.Component {
    render() {
        return (
            <div class="media-grid">

            {/* =================== PODCASTS =================== */}
                <div className="results-section-title">
                    <h3>Podcasts</h3>
                </div>

                {this.props.omniPodcasts.map((omniPodcast, index) => {
                    return (
                        <React.Fragment>
                            <div key={index}>
                                <a href={omniPodcast.listennotes_url} target="_blank">
                                    <img className="podcast searched result-podcast" src={omniPodcast.thumbnail} />
                                </a>
                            </div>
                        </React.Fragment>
                    )
                })}

                {/* =================== YOUTUBE =================== */}
                <div className="results-section-title">
                    <h3>YouTube</h3>
                </div>

                {/* RETURNS YOUTUBE VIDEOS */}
                {this.props.omniYoutubes.map((omniYoutube, index) => {
                    return (
                        <div>
                            <a href={'https://www.youtube.com/watch?v=' + omniYoutube.id.videoId} target="_blank">
                                <img className="youtube searched result-youtube"
                                src={omniYoutube.snippet.thumbnails.high.url} />
                            </a>
                        </div>
                    )
                })}

                {/* =================== SERIES =================== */}
                <div className="results-section-title">
                    <h3>Series <br /><span class="trivial">&</span> Film</h3>
                </div>

                {this.props.omniSeries.map((omniSeries, index) => {
                    return (
                        <React.Fragment>
                            <div key={index}>
                                <a href={'https://www.themoviedb.org/movie/' + omniSeries.id} target="_blank">

                                {(omniSeries.poster_path 
                                ? <img className="series searched result-series"
                                    src={"https://image.tmdb.org/t/p/w300/" + omniSeries.poster_path} />
                                : <div className="result-series-null">
                                    {(omniSeries.name
                                ? <h4>{omniSeries.name}</h4>
                                : <h4>{omniSeries.title}</h4>
                                )}
                                </div>
                                )}
                                </a>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
}