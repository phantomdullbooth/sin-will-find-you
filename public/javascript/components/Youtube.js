
//components
class Youtube extends React.Component {
    render() {
        console.log(this.props.video)
        return (
            <div className="media">
                {this.props.video.map((videos, ross) => {
                    return (
                        <div className="media-card-youtube" key={ross}>
                            <img className="youtube" src={videos.snippet.thumbnails.medium.url} />
                            <h5><span className="important">{videos.snippet.channelTitle}</span>
                            <br />{videos.snippet.title}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}


