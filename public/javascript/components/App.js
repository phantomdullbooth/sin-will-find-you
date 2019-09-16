// CONTAINS ALL ELEMENTS
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile: true,
            isResultsClosed: true,
            isSearchOpen: false,
            spreaker: {
                baseSpreakerURL: 'https://api.spreaker.com/v2/search?',
                type: 'type=episodes',
                baseQueryStart: '&q=true%20crime+%22',
                userQuery: '',
                baseQueryEnd: '%22',
                limit: '&limit=10'
            },
            youtube: {
                baseURL: 'https://www.googleapis.com/youtube/v3/search?',
                part: 'part=snippet&type=video',
                baseQueryStart: '&q=%22true%20crime%22+%22',
                userQuery: '',
                baseQueryEnd: '%22',
                key: '&key=' + 'AIzaSyBKKyux5QIxE0sAdVFWXanF-Fy5K5n3Z0s',
                searchURL: ''
            }
        }
        this.reformatHeader = this.reformatHeader.bind(this)
        this.searchYoutube = this.searchYoutube.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleSearchbar = this.toggleSearchbar.bind(this)
    }

    // CHANGE HEADER DEPENDING ON MOBILE OR DESKTOP VIEW
    reformatHeader() {
        this.setState({ isMobile: window.innerWidth < 1250 })
    }

    // SEARCH YOUTUBE MEDIA ON SUBMIT FOR USER QUERY
    searchYoutube(event) {
        console.log('searchYoutube triggered')
        event.preventDefault()
        this.setState({
            searchURL: this.state.youtube.baseURL + this.state.youtube.part + this.state.youtube.baseQueryStart + this.state.youtube.userQuery + this.state.youtube.baseQueryEnd + this.state.youtube.key,
            isResultsClosed: !this.state.isResultsClosed
        }, () => {
            fetch(this.state.searchURL)
                .then(response => response.json())
                .then(vids => this.setState(
                    {
                        youtubeResults: vids.items,
                        userQuery: ''
                    }), error => console.error(error))
        })
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    // TOGGLE SEARCH FUNCTION DEPENDING ON BUTTON CLICK
    toggleSearchbar() {
        this.setState({ isSearchOpen: !this.state.isSearchOpen })
    }

    // RUNS ON PAGE LOAD
    componentDidMount() {
        this.reformatHeader()
        window.addEventListener("resize", this.reformatHeader)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.reformatHeader)
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    isMobile={this.state.isMobile}
                    toggleSearchbar={this.toggleSearchbar} />

                <Main
                    isSearchOpen={this.state.isSearchOpen}
                    isResultsClosed={this.state.isResultsClosed}
                    searchYoutube={this.searchYoutube}
                    handleChange={this.handleChange}
                    userQuery={this.state.userQuery}
                    youtubeResults={this.state.youtubeResults}
                />

                <Footer />
            </React.Fragment>
        )
    }
}