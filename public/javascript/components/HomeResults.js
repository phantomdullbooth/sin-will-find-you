class HomeResults extends React.Component {
    render() {
        return (
            // CONTAINS ALL MEDIA SECTIONS
            <div className="media-layout">

                <div className="media-section">
                    <h2>Podcasts</h2>
                    {(this.props.podcast)
                        ? <Podcasts
                            homePodcasts={this.props.homePodcasts} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <h2>YouTube</h2>
                    {(this.props.video)
                        ? <Youtube
                            homeYoutubes={this.props.homeYoutubes} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <h2>TV & Film</h2>
                    {(this.props.movie)
                        ? <Series
                        homeSeries={this.props.homeSeries} />
                        : null
                    }
                </div>

            </div>
        )
    }
}