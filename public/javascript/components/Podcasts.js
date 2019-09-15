// PODCAST COMPONENT; LOADS ON MAIN

class Podcasts extends React.Component {
    render() {
        console.log(this.props.podcast)
        return (
            <div className="media">
                {this.props.podcast.map((podcasts, index) => {
                    return (
                        <div className="media-card-podcast" key={index}>
                            <img className="podcast" src={podcasts.image_url} />
                            <h5><span className="important">{podcasts.show.title}</span>
                                <br />{podcasts.title}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}