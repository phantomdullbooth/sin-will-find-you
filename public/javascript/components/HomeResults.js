class HomeResults extends React.Component {
    render() {
        return (
            // CONTAINS ALL MEDIA SECTIONS
            <div className="media-layout">

                <div className="media-section">
                    <h2>Podcasts</h2>
                    {(this.props.podcast)
                        ? <Podcasts
                            podcast={this.props.podcast} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <h2>YouTube</h2>
                    {(this.props.video)
                        ? <Youtube
                            video={this.props.video} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <h2>TV & Film</h2>
                    {(this.props.movie)
                        ? <Movies
                            movie={this.props.movie} />
                        : null
                    }
                </div>

            </div>
        )
    }
}