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
                    <div className="section-title">
                        <h2>Podcasts</h2>

                        {(this.props.isMorePodcasts)
                            ? <h2 className="slider-title"
                                onClick={() => { { this.props.showMorePodcasts() } }}
                                onMouseLeave={() => { { this.props.toggleMorePodcasts() } }}>More</h2>
                            : null
                        }

                        <img src="../css/images/icon-more.png"
                            onMouseOver={() => { { this.props.toggleMorePodcasts() } }} />
                    </div>

                    {(this.props.homePodcasts)
                        ? <HomePodcasts
                            homePodcasts={this.props.homePodcasts} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <div className="section-title">
                        <h2>YouTube</h2>

                        {(this.props.isMoreYoutubes)
                            ? <h2 className="slider-title"
                                onClick={() => { { this.props.showMoreYoutubes() } }}
                                onMouseLeave={() => { { this.props.toggleMoreYoutubes() } }}>More</h2>
                            : null
                        }
                        
                        <img src="../css/images/icon-more.png"
                            onMouseOver={() => { { this.props.toggleMoreYoutubes() } }} />
                    </div>

                    {(this.props.homeYoutubes)
                        ? <HomeYoutubes
                            homeYoutubes={this.props.homeYoutubes} />
                        : null
                    }
                </div>

                <div className="media-section">
                    <div className="section-title">
                        <h2>Series & Film</h2>

                        {(this.props.isMoreSeries)
                            ? <h2 className="slider-title"
                                onClick={() => { { this.props.showMoreSeries() } }}
                                onMouseLeave={() => { { this.props.toggleMoreSeries() } }}>More</h2>
                            : null
                        }

                        <img src="../css/images/icon-more.png"
                            onMouseOver={() => { { this.props.toggleMoreSeries() } }} />
                    </div>

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