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
                                <h5>{morePodcast.podcast_title_original}</h5>
                                <p>{morePodcast.title_original}</p>
                            </a>
                        </div>
                    )
                })}
                
                {/* ======================= SERIES & MOVIES ======================= */}

                {this.props.moreSeries.map((moreSeries, index) => {
                    return (
                        <div className="more-card" key={index}>
                            <a  href={'https://www.themoviedb.org/movie/' + moreSeries.id} target="_blank">
                            
                                {/* IF POSTER, SHOW POSTED / OTHERWISE, SHOW REPLACEMENT */}
                                {(moreSeries.poster_path
                                    ? <img className="series-more" src={"https://image.tmdb.org/t/p/w300/" + moreSeries.poster_path} />
                                    : <div className="series-null"><h3>Image unavailable</h3></div>
                                )}
                                </a>

                                {/* IF NAME, SHOW NAME / OTHERWISE, SHOW ORIGINAL TITLE */}
                                {(moreSeries.name)
                                    ? <h5><span>{moreSeries.name}</span></h5>
                                    : <h5><span>{moreSeries.title}</span></h5>
                                }
                        </div>
                                )
                            })}

                    {/* ======================= YOUTUBE ======================= */}

                    {this.props.moreYoutubes.map((moreYoutube, index) => {
                        return (
                            <div className="media-card more" key={index}>
                                <a  href={'https://www.youtube.com/watch?v=' + moreYoutube.videoId}
                                    target="_blank">
                                        <img className="youtube" src={moreYoutube.snippet.thumbnails.medium.url} />
                                </a>
                                
                                <h5>
                                    <span>{moreYoutube.snippet.channelTitle}</span>
                                    <br />{moreYoutube.snippet.title}</h5>
                            </div>
                                    
                                ) 
                            })}
                            
                        </div>
                        
                    )
                    
                }             
}