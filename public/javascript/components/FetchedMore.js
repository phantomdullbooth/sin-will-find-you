// APP > MAIN > #

class FetchedMore extends React.Component {
    render() {
        return (
            <div class="media-grid">

                {/* ======================= PODCASTS ======================= */}

                {this.props.morePodcasts.map((morePodcast, index) => {
                    return (
                        <div className="media-card-podcast" key={index}>
                            <a href={morePodcast.listennotes_url} target="_blank"><img className="podcast" src={morePodcast.thumbnail} /></a>
                            <h5><span className="important">{morePodcast.podcast_title_original}</span>
                                <br />{morePodcast.title_original}</h5>
                        </div>
                    )
                })}
                
                {/* ======================= SERIES & FILM ======================= */}

                {this.props.moreSeries.map((moreSeries, index) => {
                    return (
                        <div className="media-card-series" key={index}>
                            <a  href={'https://www.themoviedb.org/movie/' + moreSeries.id} target="_blank">
                            
                                {/* IF POSTER, SHOW POSTED / OTHERWISE, SHOW REPLACEMENT */}
                                {(moreSeries.poster_path
                                    ? <img className="series" src={"https://image.tmdb.org/t/p/w300/" + moreSeries.poster_path} />
                                    : <div className="series-null"><h3>Image unavailable</h3></div>
                                    
                                )}
                                </a>

                                {/* IF NAME, SHOW NAME / OTHERWISE, SHOW ORIGINAL TITLE */}
                                {(moreSeries.name)
                                    ? <h5><span className="important">{moreSeries.name}</span></h5>
                                    : <h5><span className="important">{moreSeries.title}</span></h5>
                                }
                        </div>
                                )
                            })}

                    {/* ======================= YOUTUBE ======================= */}

                    {this.props.moreYoutubes.map((moreYoutube, index) => {
                        return (
                            <div className="media-card-youtube" key={index}>
                                <a  href={'https://www.youtube.com/watch?v=' + moreYoutube.videoId}
                                    target="_blank">
                                        <img className="youtube" src={moreYoutube.snippet.thumbnails.medium.url} />
                                </a>
                                
                                <h5>
                                    <span className="important">{moreYoutube.snippet.channelTitle}</span>
                                    <br />{moreYoutube.snippet.title}</h5>
                            </div>
                                    
                                ) 
                            })}
                            
                        </div>
                        
                    )
                    
                }             
}