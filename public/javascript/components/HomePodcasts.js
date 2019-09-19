// APP > MAIN > FETCHEDHOME > #

class HomePodcasts extends React.Component {
    render() {
        return (
            <div className="media">
                {this.props.homePodcasts.map((homePodcast, index) => {
                    return (
                        <div className="media-card-podcast" key={index} target="_blank">
                            <a href={homePodcast.listennotes_url}>
                                <img className="podcast" src={homePodcast.thumbnail} />
                                <h5><span className="important">{homePodcast.podcast_title_original}</span>
                                    <br />{homePodcast.title_original}</h5>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}