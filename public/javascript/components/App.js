class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
            listenNotes: {
                URLstart: 'https://listen-api.listennotes.com/api/v2/search?q=%22true%20crime%22%2C%22',
                userQuery: '',
                URLend: '%22&sort_by_date=0&type=episode',
                searchURL: ''
            },
            tmdb: {
                URLstart: 'https://api.themoviedb.org/3/search/multi?api_key=12f7badcc9527f6ddfae7b0034c74aa4&language=en-US&query=%22',
                userQuery: '',
                URLend: '%22&page=1&include_adult=false&region=US',
                searchURL: ''
            },
            youtube: {
                URLstart: 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=%22true%20crime%22+%22',
                userQuery: '',
                URLend: '%22&order=date&maxResults=15&key=',
                apikey: 'AIzaSyAdqXYpoB8F94qe_MI2luj1RQAypAzMSQA',
                searchURL: ''
            }
        }
        // OMNISEARCH
        this.handleChange = this.handleChange.bind(this)
        this.triggerOmnisearch = this.triggerOmnisearch.bind(this)
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
    }

    // ============================ OMNISEARCH ============================ //
    // ============================ OMNISEARCH ============================ //
    // ============================ OMNISEARCH ============================ //

    // SEARCH BOX USER TOGGLE LOCATED: APP > HEADER
    // FETCH TRIGGERED BY USER SEARCH INPUT: APP > MAIN > SEARCH
    triggerOmnisearch(event) {
        event.preventDefault()
        console.log('Omnisearch triggered. Live long and prosper.')

        Promise.all([
            // FETCH LISTENNOTES DATA
            fetch(this.state.listenNotes.URLstart + this.state.userQuery + this.state.listenNotes.URLend, {
                headers: {
                    'X-ListenAPI-Key': '6e0d87eb4b284e659faa4ccfb8082cc6'
                }
            }),
            // FETCH YOUTUBE DATA
            fetch(this.state.youtube.URLstart + this.state.userQuery + this.state.youtube.URLend + this.state.youtube.apikey),
            // FETCH TMDB DATA
            fetch(this.state.tmdb.URLstart + this.state.userQuery + this.state.tmdb.URLend)
        ])
            .then(([results1, results2, results3]) => Promise.all([results1.json(), results2.json(), results3.json()]))
            .then(([podcasts, youtubes, series]) => this.setState({
                omniPodcasts: podcasts.results,
                omniYoutubes: youtubes.items,
                omniSeries: series.results,
                userQuery: ''
            }))
            this.toggleResultsWindow()
            this.toggleSearchbar()
    }

    // NEEDED TO REGISTER USER INPUT: APP > MAIN > SEARCH
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    // ============================ MORE TRIGGERS ============================ //
    // ============================ MORE TRIGGERS ============================ //
    // ============================ MORE TRIGGERS ============================ //

    // MORE PODCASTS TRIGGER: APP > MAIN > FETCHEDHOME
    showMorePodcasts() {
        console.log('Podcast search for ' + this.state.listenNotes.URLstart + '' + this.state.listenNotes.URLend + '&offset=10')

        this.setState({
            searchURL: this.state.listenNotes.URLstart + '' + this.state.listenNotes.URLend + '&offset=10'
        }, () => {
            fetch(this.state.searchURL, {
                headers: {
                    'X-ListenAPI-Key': '6e0d87eb4b284e659faa4ccfb8082cc6'
                }
            })
                .then(response => response.json())
                .then(podcasts => this.setState(
                    {
                        morePodcasts: podcasts.results
                    }), error => console.error(error))
        })
        this.toggleResultsWindow()
    }

    // MORE SERIES TRIGGER: APP > MAIN > FETCHEDHOME
    showMoreSeries() {
        console.log('Series search for ' + this.state.tmdb.URLstart + 'true crime' + this.state.tmdb.URLend)
        
        this.setState({
            searchURL: this.state.tmdb.URLstart + 'true crime' + this.state.tmdb.URLend
        }, () => {
            fetch(this.state.searchURL)
                .then(response => response.json())
                .then(series => this.setState(
                    {
                        moreSeries: series.results
                    }), error => console.error(error))
        })
        this.toggleResultsWindow()
    }

    // MORE YOUTUBE TRIGGER: APP > MAIN > FETCHEDHOME
    showMoreYoutubes() {
        console.log('Youtube search for ' + this.state.youtube.URLstart + '' + this.state.youtube.URLend + this.state.youtube.apikey)
        
        this.setState({
            searchURL: this.state.youtube.URLstart + '' + '%22&order=date&maxResults=20&key=' + this.state.youtube.apikey
        }, () => {
            fetch(this.state.searchURL)
                .then(response => response.json())
                .then(youtubes => this.setState(
                    {
                        moreYoutubes: youtubes.items
                    }), error => console.error(error))
        })
        this.toggleResultsWindow()
    }

    

    // ============================ TOGGLES ============================ //
    // ============================ TOGGLES ============================ //
    // ============================ TOGGLES ============================ //

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

    // TOGGLES MEDIA SEARCH RESULTS: APP > MAIN > SEARCH
    toggleResultsWindow() {
        this.setState({ isResultsClosed: !this.state.isResultsClosed })
    }
    
    // TOGGLES OMNISEARCH BOX: APP > HEADER
    toggleSearchbar() {
        this.setState({ isSearchOpen: !this.state.isSearchOpen })
    }


    // ============================ RENDER ============================ //
    // ============================ RENDER ============================ //
    // ============================ RENDER ============================ //

    render() {
        return (
            <React.Fragment>
                <Header
                    // TOGGLE SEARCHBAR
                    toggleSearchbar={this.toggleSearchbar} />

                <Main
                    isResultsClosed={this.state.isResultsClosed}
                    // OMNISEARCH
                    handleChange={this.handleChange}
                    isSearchOpen={this.state.isSearchOpen}
                    omniPodcasts={this.state.omniPodcasts}
                    omniSeries={this.state.omniSeries}
                    omniYoutubes={this.state.omniYoutubes}
                    triggerOmnisearch={this.triggerOmnisearch}
                    userQuery={this.state.userQuery}
                    // MORE PODCASTS
                    isMorePodcasts={this.state.isMorePodcasts}
                    morePodcasts={this.state.morePodcasts}
                    toggleMorePodcasts={this.toggleMorePodcasts}
                    showMorePodcasts={this.showMorePodcasts}
                    // MORE SERIES
                    isMoreSeries={this.state.isMoreSeries}
                    moreSeries={this.state.moreSeries}
                    showMoreSeries={this.showMoreSeries}
                    toggleMoreSeries={this.toggleMoreSeries}
                    // MORE YOUTUBE
                    isMoreYoutubes={this.state.isMoreYoutubes}
                    moreYoutubes={this.state.moreYoutubes}
                    toggleMoreYoutubes={this.toggleMoreYoutubes}
                    showMoreYoutubes={this.showMoreYoutubes}
                />

                <Footer />
            </React.Fragment>
        )
    }
}