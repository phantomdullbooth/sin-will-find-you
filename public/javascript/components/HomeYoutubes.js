// YOUTUBE.JS: APP > MAIN > FETCHEDHOME > #

class HomeYoutubes extends React.Component {
    render() {
        return (
            <div className="media">
                {this.props.homeYoutubes.map((homeYoutube, index) => {
                    return (
                        <div className="media-card-youtube" key={index}>
                            <img className="youtube" src={homeYoutube.snippet.thumbnails.medium.url} />
                            <h5><span className="important">{homeYoutube.snippet.channelTitle}</span>
                            <br />{homeYoutube.snippet.title}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}