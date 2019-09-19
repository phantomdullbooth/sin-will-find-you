// APP > MAIN > FETCHEDHOME > #

class HomeYoutubes extends React.Component {
    render() {
        return (
            <div className="media">
                {this.props.homeYoutubes.map((homeYoutube, index) => {
                    return (
                        <div className="media-card-youtube" key={index}>
                            <a href={'https://www.youtube.com/watch?v=' + omniYoutube.id.videoId} target="_blank">
                            <img className="youtube" src={homeYoutube.snippet.thumbnails.medium.url} />
                            <h5><span className="important">{homeYoutube.snippet.channelTitle}</span>
                            <br />{homeYoutube.snippet.title}</h5>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}