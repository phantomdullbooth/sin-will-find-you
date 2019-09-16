// PODCASTS, YOUTUBE VIDEO, AND TV/FILM ELEMENTS

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homePodcastsURL: 'https://api.spreaker.com/v2/search?type=episodes&q=true%20crime&limit=10',
            homeYoutubeURL: 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=%22true%20crime%22&order=date&key=AIzaSyBKKyux5QIxE0sAdVFWXanF-Fy5K5n3Z0s',
            homeMoviesURL: 'https://api.themoviedb.org/3/search/multi?api_key=12f7badcc9527f6ddfae7b0034c74aa4&language=en-US&query=true%20crime&page=1&include_adult=false&region=US'
        }
    }
    // FETCH PODCAST DATA
    fetchPodcasts = () => {
        fetch(this.state.homePodcastsURL)
            .then(response => response.json())
            .then(results => {
                console.log(results)
                this.setState({ podcast: results.response.items })
            })
    }
    // FETCH YOUTUBE DATA
    fetchYoutube = () => {
        fetch(this.state.homeYoutubeURL)
            .then(response => response.json())
            .then(results => {
                console.log(this.state.homeYoutubeURL)
                this.setState({ video: results.items })
            })
    }

    // FETCH MOVIE/TV SHOW DATA
    fetchMovies = () => {
        fetch(this.state.homeMoviesURL)
            .then(response => response.json())
            .then(results => {
                this.setState({ movie: results.results })
            })
    }

    // FETCH ALL DATA ON PAGE LOAD
    componentDidMount() {
        this.fetchPodcasts()
        this.fetchYoutube()
        this.fetchMovies()
    }

    // RENDER DATA ON PAGE
    render() {
        return (
            <main>
                {/* ONCLICK TRIGGER ON HEADER.JS */}
                {(this.props.isSearchOpen)
                    ? <Search
                        searchYoutube={this.props.searchYoutube}
                        handleChange={this.props.handleChange}
                        userQuery={this.props.userQuery} />
                    : null
                }

                {/* WAS SEARCH INITIATED? */}
                {(this.props.isResultsClosed)
                    // PAGE VIEW ON PAGE LOAD
                    ? <HomeResults
                        podcast={this.state.podcast}
                        video={this.state.video}
                        movie={this.state.movie}
                    />

                    // IF SEARCH SUBMITTED
                    : (this.props.youtubeResults)
                        ? <SearchResults
                            userQuery={this.props.userQuery}
                            youtubeResults={this.props.youtubeResults}
                        />
                        : null


                }
            </main>
        )
    }
}