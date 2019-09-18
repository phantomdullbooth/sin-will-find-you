// APP > MAIN > #
// # > HOMEPODCASTS
// # > HOMEYOUTUBES
// # > HOMESERIES

class FetchedHome extends React.Component {
    render() {
        return (
            // CONTAINS ALL MEDIA SECTIONS
            <div className="media-layout">

                <div className="media-section">
                    <h2>Podcasts</h2>
                    {(this.props.homePodcasts)
                        ? <HomePodcasts
                            homePodcasts={this.props.homePodcasts} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <h2>YouTube</h2>
                    {(this.props.homeYoutubes)
                        ? <HomeYoutubes
                            homeYoutubes={this.props.homeYoutubes} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <h2>Series <span class="trivial">&</span> Film</h2>
                    {(this.props.homeSeries)
                        ? <HomeSeries
                        homeSeries={this.props.homeSeries} />
                        : null
                    }
                </div>

            </div>
        )
    }
}