
//components
class Youtube extends React.Component {
    render() {
        console.log(this.props.video)
        return (
            <div className="media-cards">
                {this.props.video.map((videos, ross) => {
                    return (
                        <div className="media-cards-image youtube" key={ross}>


                            <img src={videos.snippet.thumbnails.medium.url} />
                            <h6><span className="important">{videos.snippet.channelTitle}</span>
                            <br />{videos.snippet.title}</h6>
                            {/* <p className="sand-text">{videos.snippet.description}</p> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}


