// APP > MAIN > FETCHEDHOME > # [ PODCAST INFORMATION ]

class HomePodcasts extends React.Component {
    render() {
        return (
            <div className="media">
                {this.props.homePodcasts.map((homePodcast, index) => {
                    return (
                        <div className="media-card" key={index} target="_blank">
                            <a href={homePodcast.listennotes_url}>
                                <img className="podcast" src={homePodcast.thumbnail} />
                                <h5>{homePodcast.podcast_title_original}</h5>
                                <p>{homePodcast.title_original}</p>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}