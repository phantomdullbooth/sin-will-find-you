// APP > # > [ OMNISEARCH / EVIDENCE / FETCHEDHOME ]

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homePodcasts: [],
            homeSeries: [],
            homeYoutubes: [],
            searchHomePodcasts: 'https://listen-api.listennotes.com/api/v2/search?q=%22true%20crime%22&sort_by_date=1&type=episode',
            searchHomeSeries: 'https://api.themoviedb.org/3/search/multi?api_key=12f7badcc9527f6ddfae7b0034c74aa4&language=en-US&query=true%20crime&page=1&include_adult=false&region=US',
            searchHomeYoutubes: 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=%22true%20crime%22&order=date&maxResults=10&key=AIzaSyAdqXYpoB8F94qe_MI2luj1RQAypAzMSQA',
            userInputs: {
                name: null,
                location: null,
                age: null,
                notes: null,
                id: null
            },
        }
    }

    // ================= HOMEPAGE DATA FETCHING ================= //
    // ================= HOMEPAGE DATA FETCHING ================= //
    // ================= HOMEPAGE DATA FETCHING ================= //

    // FETCH PODCAST DATA FROM LISTENNOTES
    fetchPodcasts = () => {
        fetch(this.state.searchHomePodcasts, {
            headers: {
                'X-ListenAPI-Key': 'fc7f3f811890424a843401fba64ea2e6' // free; limited to 10,000/month
            }
        })
            .then(response => response.json())
            .then(results => {
                this.setState({ homePodcasts: results.results })
            })
    }

    // FETCH TV/MOVIE DATA FROM TMDB
    fetchSeries = () => {
        fetch(this.state.searchHomeSeries)
            .then(response => response.json())
            .then(results => {
                this.setState({ homeSeries: results.results })
            })
    }

    // FETCH VIDEO DATA FROM YOUTUBE
    fetchYoutube = () => {
        fetch(this.state.searchHomeYoutubes)
            .then(response => response.json())
            .then(results => {
                this.setState({ homeYoutubes: results.items })
            })
    }

    // CALL FETCH FUNCTIONS ON PAGE LOAD
    componentDidMount() {
        this.fetchPodcasts()
        this.fetchSeries()
        this.fetchYoutube()
    }

    // #################### MAIN RENDER #################### //
    // #################### MAIN RENDER #################### //
    // #################### MAIN RENDER #################### //

    render() {
        return (
            <main>

                {/* ====== SEARCHBAR ====== */}
                {(this.props.isSearchOpen)
                    ? <Omnisearch
                        // OMNISEARCH
                        handleChange={this.props.handleChange}
                        omnisearchQuery={this.props.omnisearchQuery}
                        userQuery={this.props.userQuery}
                    />
                    : null
                }

                {/* ====== GUESTBOOK ====== */}
                {(this.props.isEvidenceClosed)
                    ? <Evidence />
                    : null
                }

                {/* ====== MAIN CONTENT ====== */}
                {(this.props.isResultsClosed)
                    // IF ON PAGE LOAD, SHOW FETCHED RESULTS, UNLESS EVIDENCE SHOWS
                    ? (!this.props.isEvidenceClosed)
                        ? <FetchedHome
                            // FETCHED HOME
                            homeSeries={this.state.homeSeries}
                            homePodcasts={this.state.homePodcasts}
                            homeYoutubes={this.state.homeYoutubes}
                            // MORE PODCASTS
                            isMorePodcasts={this.props.isMorePodcasts}
                            morePodcasts={this.props.morePodcasts}
                            showMorePodcasts={this.props.showMorePodcasts}
                            toggleMorePodcasts={this.props.toggleMorePodcasts}
                            // MORE SERIES
                            isMoreSeries={this.props.isMoreSeries}
                            moreSeries={this.props.moreSeries}
                            showMoreSeries={this.props.showMoreSeries}
                            toggleMoreSeries={this.props.toggleMoreSeries}
                            // MORE YOUTUBE
                            isMoreYoutubes={this.props.isMoreYoutubes}
                            moreYoutubes={this.props.moreYoutubes}
                            toggleMoreYoutubes={this.props.toggleMoreYoutubes}
                            showMoreYoutubes={this.props.showMoreYoutubes}
                        />
                        : null
                    // BUT IF OMNISEARCH TRIGGERED, SHOW FETCHEDOMNISEARCH
                    : (this.props.omniPodcasts.length > 0) || (this.props.omniSeries.length > 0) || (this.props.omniYoutubes.length > 0)
                        // IF SEARCH TRIGGERED
                        ? <React.Fragment>
                            <h1>Results Found</h1>
                            <FetchedOmnisearch
                                omniPodcasts={this.props.omniPodcasts}
                                omniSeries={this.props.omniSeries}
                                omniYoutubes={this.props.omniYoutubes}
                                userQuery={this.props.userQuery}
                            />
                        </React.Fragment>

                        // OR IF MORE FUNCTION TRIGGERED, SHOW MORE
                        : <React.Fragment>
                            <h1>More Sin</h1>
                            <FetchedMore
                                // MORE PODCASTS
                                isMorePodcasts={this.props.isMorePodcasts}
                                morePodcasts={this.props.morePodcasts}
                                // MORE SERIES
                                isMoreSeries={this.props.isMoreSeries}
                                moreSeries={this.props.moreSeries}
                                // MORE YOUTUBES
                                isMoreYoutubes={this.props.isMoreYoutubes}
                                moreYoutubes={this.props.moreYoutubes}
                            />
                        </React.Fragment>
                }
            </main>
        )
    }
}