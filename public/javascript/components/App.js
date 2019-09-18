// INDEX.JS RENDERS *

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginOpen: false,
            isMobile: true,
            isMorePodcasts: false,
            isMoreSeries: false,
            isMoreYoutubes: false,
            isResultsClosed: true,
            isSearchOpen: false,
            morePodcasts: [],
            moreSeries: [],
            moreYoutubes: [],
            omniPodcasts: [],
            omniSeries: [],
            omniYoutubes: [],
            searchPodcasts: {
                URLstart: 'https://listen-api.listennotes.com/api/v2/search?q=%22true%20crime%22%2C%22',
                userQuery: '',
                URLend: '%22&sort_by_date=0&type=episode',
                searchURL: ''
            },
            searchSeries: {
                URLstart: 'https://api.themoviedb.org/3/discover/movie?api_key=12f7badcc9527f6ddfae7b0034c74aa4&language=en-US&query=%22',
                userQuery: '',
                URLend: '%22&with_genres=80,99&page=1&include_adult=false&region=US',
                searchURL: ''
            },
            searchYoutubes: {
                URLstart: 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=%22true%20crime%22+%22',
                userQuery: '',
                URLend: '%22&order=date&maxResults=15&key=',
                apikey: 'AIzaSyAdqXYpoB8F94qe_MI2luj1RQAypAzMSQA',
                searchURL: ''
            }
        }
        //  WINDOW SIZE
        this.adaptHeader = this.adaptHeader.bind(this)
        // OMNISEARCH
        this.handleChange = this.handleChange.bind(this)
        this.omnisearchQuery = this.omnisearchQuery.bind(this)
        this.omnisearchSerialKillers = this.omnisearchSerialKillers.bind(this)
        this.omnisearchUnsolved = this.omnisearchUnsolved.bind(this)
        // MORE PODCASTS
        this.showMorePodcasts = this.showMorePodcasts.bind(this)
        this.toggleMorePodcasts = this.toggleMorePodcasts.bind(this)
        // MORE SERIES
        this.showMoreSeries = this.showMoreSeries.bind(this)
        this.toggleMoreSeries = this.toggleMoreSeries.bind(this)
        // MORE YOUTUBE
        this.showMoreYoutubes = this.showMoreYoutubes.bind(this)
        this.toggleMoreYoutubes = this.toggleMoreYoutubes.bind(this)
        // TOGGLE UNIVERSAL FUNCTIONS
        this.toggleResultsWindow = this.toggleResultsWindow.bind(this)
        this.toggleSearchbar = this.toggleSearchbar.bind(this)
        this.triggerReload = this.triggerReload.bind(this)
    }

    // ============================ OMNISEARCH ============================ //
    // ============================ OMNISEARCH ============================ //
    // ============================ OMNISEARCH ============================ //

    // SEARCH BOX USER TOGGLE LOCATED: APP > HEADER
    // FETCH TRIGGERED BY USER SEARCH INPUT: APP > MAIN > OMNISEARCH
    omnisearchQuery(event) {
        event.preventDefault()
        console.log('Omnisearch triggered. Live long and prosper.')

        Promise.all([
            // FETCH LISTENNOTES DATA
            fetch(this.state.searchPodcasts.URLstart + this.state.userQuery + this.state.searchPodcasts.URLend, {
                headers: {
                    'X-ListenAPI-Key': '6e0d87eb4b284e659faa4ccfb8082cc6'
                }
            }),
            // FETCH YOUTUBE DATA
            fetch(this.state.searchYoutubes.URLstart + this.state.userQuery + this.state.searchYoutubes.URLend + this.state.searchYoutubes.apikey),
            // FETCH TMDB DATA
            fetch(this.state.searchSeries.URLstart + this.state.userQuery + this.state.searchSeries.URLend)
        ])
            .then(([results1, results2, results3]) => Promise.all([results1.json(), results2.json(), results3.json()]))
            .then(([podcasts, youtubes, series]) => this.setState({
                omniPodcasts: podcasts.results,
                omniYoutubes: youtubes.items,
                omniSeries: series.results,
                userQuery: '',
                isResultsClosed: false,
                isSearchOpen: false,
            }))
        // this.toggleSearchbar()
    }

    // SEARCH SERIAL KILLERS
    omnisearchSerialKillers() {
        console.log('Serial killer omnisearch triggered. Set phasers to "Run".')

        Promise.all([
            // FETCH LISTENNOTES DATA
            fetch(this.state.searchPodcasts.URLstart + 'serial killers' + this.state.searchPodcasts.URLend, {
                headers: {
                    'X-ListenAPI-Key': '6e0d87eb4b284e659faa4ccfb8082cc6'
                }
            }),
            // FETCH YOUTUBE DATA
            fetch(this.state.searchYoutubes.URLstart + 'serial killers' + this.state.searchYoutubes.URLend + this.state.searchYoutubes.apikey),
            // FETCH TMDB DATA
            fetch(this.state.searchSeries.URLstart + 'serial killers' + this.state.searchSeries.URLend)
        ])
            .then(([results1, results2, results3]) => Promise.all([results1.json(), results2.json(), results3.json()]))
            .then(([podcasts, youtubes, series]) => this.setState({
                omniPodcasts: podcasts.results,
                omniYoutubes: youtubes.items,
                omniSeries: series.results,
                isResultsClosed: false
            }))
    }

    // SEARCH UNSOLVED CASES
    omnisearchUnsolved() {
        console.log('Unsolved omnisearch triggered. Engage.')

        Promise.all([
            // FETCH LISTENNOTES DATA
            fetch(this.state.searchPodcasts.URLstart + 'unsolved' + this.state.searchPodcasts.URLend, {
                headers: {
                    'X-ListenAPI-Key': '6e0d87eb4b284e659faa4ccfb8082cc6'
                }
            }),
            // FETCH YOUTUBE DATA
            fetch(this.state.searchYoutubes.URLstart + 'unsolved' + this.state.searchYoutubes.URLend + this.state.searchYoutubes.apikey),
            // FETCH TMDB DATA
            fetch(this.state.searchSeries.URLstart + 'unsolved' + this.state.searchSeries.URLend)
        ])
            .then(([results1, results2, results3]) => Promise.all([results1.json(), results2.json(), results3.json()]))
            .then(([podcasts, youtubes, series]) => this.setState({
                omniPodcasts: podcasts.results,
                omniYoutubes: youtubes.items,
                omniSeries: series.results,
                isResultsClosed: false
            }))
    }

    // NEEDED TO REGISTER USER INPUT: APP > MAIN > OMNISEARCH
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    // ============================ MORE TRIGGERS ============================ //
    // ============================ MORE TRIGGERS ============================ //
    // ============================ MORE TRIGGERS ============================ //

    // MORE PODCASTS TRIGGER: APP > MAIN > FETCHEDHOME
    showMorePodcasts() {
        console.log('Podcast search for ' + this.state.searchPodcasts.URLstart + '' + this.state.searchPodcasts.URLend + '&offset=10')

        this.setState({
            searchURL: this.state.searchPodcasts.URLstart + '' + this.state.searchPodcasts.URLend + '&offset=10'
        }, () => {
            fetch(this.state.searchURL, {
                headers: {
                    'X-ListenAPI-Key': '6e0d87eb4b284e659faa4ccfb8082cc6'
                }
            })
                .then(response => response.json())
                .then(podcasts => this.setState(
                    {
                        morePodcasts: podcasts.results,
                        isResultsClosed: false
                    }), error => console.error(error))
        })
    }

    // MORE SERIES TRIGGER: APP > MAIN > FETCHEDHOME
    showMoreSeries() {
        console.log('Series search for ' + this.state.searchSeries.URLstart + 'true crime' + this.state.searchSeries.URLend)

        this.setState({
            searchURL: this.state.searchSeries.URLstart + 'true%20crime%22&with_genres=80,99&page=2&include_adult=false&region=US'
        }, () => {
            fetch(this.state.searchURL)
                .then(response => response.json())
                .then(series => this.setState(
                    {
                        moreSeries: series.results,
                        isResultsClosed: false
                    }), error => console.error(error))
        })
    }

    // MORE YOUTUBE TRIGGER: APP > MAIN > FETCHEDHOME
    showMoreYoutubes() {
        console.log('Youtube search for ' + this.state.searchYoutubes.URLstart + '' + this.state.searchYoutubes.URLend + this.state.searchYoutubes.apikey)

        this.setState({
            searchURL: this.state.searchYoutubes.URLstart + '' + '%22&order=date&maxResults=20&key=' + this.state.searchYoutubes.apikey
        }, () => {
            fetch(this.state.searchURL)
                .then(response => response.json())
                .then(youtubes => this.setState(
                    {
                        moreYoutubes: youtubes.items,
                        isResultsClosed: false
                    }), error => console.error(error))
        })
    }

    // ============================ TOGGLES ============================ //
    // ============================ TOGGLES ============================ //
    // ============================ TOGGLES ============================ //

    // CHANGES HEADER DEPENDING ON MOBILE OR NOT
    adaptHeader() {
        this.setState({ isMobile: window.innerWidth < 1250 })
    }

    // TOGGLES "MORE" LINK FOR PODCASTS: APP > MAIN > FETCHEDHOME
    toggleMorePodcasts() {
        this.setState({ isMorePodcasts: !this.state.isMorePodcasts })
    }

    // TOGGLES "MORE" LINK FOR SERIES: APP > MAIN > FETCHEDHOME
    toggleMoreSeries() {
        this.setState({ isMoreSeries: !this.state.isMoreSeries })
    }

    // TOGGLES "MORE" LINK FOR YOUTUBE: APP > MAIN > FETCHEDHOME
    toggleMoreYoutubes() {
        this.setState({ isMoreYoutubes: !this.state.isMoreYoutubes })
    }

    // TOGGLES MEDIA SEARCH RESULTS: APP > MAIN > OMNISEARCH
    toggleResultsWindow() {
        this.setState({ isResultsClosed: !this.state.isResultsClosed })
    }

    // TOGGLES OMNISEARCH BOX: APP > HEADER
    toggleSearchbar() {
        this.setState({ isSearchOpen: !this.state.isSearchOpen })
    }

    triggerReload() {
        location.reload(true);
    }

    // ============================ TOGGLES ============================ //
    // ============================ TOGGLES ============================ //
    // ============================ TOGGLES ============================ //

    componentDidMount() {
        this.adaptHeader()
        window.addEventListener("resize", this.adaptHeader);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.adaptHeader);
    }

    // ============================ RENDER ============================ //
    // ============================ RENDER ============================ //
    // ============================ RENDER ============================ //

    render() {
        return (
            <React.Fragment>
                <Header
                    // ADAPT HEADER
                    isMobile={this.state.isMobile}
                    // TOGGLE LOGIN
                    toggleLogin={this.toggleLogin}
                    // SEARCHES
                    toggleSearchbar={this.toggleSearchbar}
                    omnisearchSerialKillers={this.omnisearchSerialKillers}
                    omnisearchUnsolved={this.omnisearchUnsolved}
                    // TRIGGER RELOAD
                    triggerReload={this.triggerReload} />

                <Main
                    isResultsClosed={this.state.isResultsClosed}
                    // LOGIN
                    isLoginOpen={this.state.isLoginOpen}
                    // OMNISEARCH
                    handleChange={this.handleChange}
                    isSearchOpen={this.state.isSearchOpen}
                    omniPodcasts={this.state.omniPodcasts}
                    omniSeries={this.state.omniSeries}
                    omniYoutubes={this.state.omniYoutubes}
                    omnisearchQuery={this.omnisearchQuery}
                    userQuery={this.state.userQuery}
                    // MORE PODCASTS
                    isMorePodcasts={this.state.isMorePodcasts}
                    morePodcasts={this.state.morePodcasts}
                    showMorePodcasts={this.showMorePodcasts}
                    toggleMorePodcasts={this.toggleMorePodcasts}
                    // MORE SERIES
                    isMoreSeries={this.state.isMoreSeries}
                    moreSeries={this.state.moreSeries}
                    showMoreSeries={this.showMoreSeries}
                    toggleMoreSeries={this.toggleMoreSeries}
                    // MORE YOUTUBE
                    isMoreYoutubes={this.state.isMoreYoutubes}
                    moreYoutubes={this.state.moreYoutubes}
                    showMoreYoutubes={this.showMoreYoutubes}
                    toggleMoreYoutubes={this.toggleMoreYoutubes}
                />

                <Footer />
            </React.Fragment>
        )
    }
}