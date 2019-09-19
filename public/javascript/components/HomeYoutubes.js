// APP > MAIN > FETCHEDHOME > #

class HomeYoutubes extends React.Component {
    render() {
        return (
            <div className="media">
                {this.props.homeYoutubes.map((homeYoutube, index) => {
                    return (
                        <div className="media-card" key={index}>
                            <a href={'https://www.youtube.com/watch?v=' + homeYoutube.id.videoId} target="_blank">
                                <img className="youtube" src={homeYoutube.snippet.thumbnails.medium.url} />
                                <h5>{homeYoutube.snippet.channelTitle}</h5>
                                <p>{homeYoutube.snippet.title}</p>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}