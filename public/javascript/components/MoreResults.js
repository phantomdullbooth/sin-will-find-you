// APP > MAIN > MORERESULTS

class MoreResults extends React.Component {
    render() {
        return (
            <div class="media-grid">
                <h1>Want more? Got more.</h1>
                {/* { console.log(this.props.morePodcasts) } */}

                {this.props.morePodcasts.map((morePodcast, index) => {
                    return (
                        <div className="media-card-podcast" key={index}>
                            <a href={morePodcast.listennotes_url} target="_blank"><img className="podcast" src={morePodcast.thumbnail} /></a>
                            <h5><span className="important">{morePodcast.podcast_title_original}</span>
                                <br />{morePodcast.title_original}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}