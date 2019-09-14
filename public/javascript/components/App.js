
// CONTAINS ALL ELEMENTS
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // videos: []
        }
    }
    // FETCH YOUTUBE DATA
    fetchYoutube = () => {
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=%22true%20crime%22&key=AIzaSyBKKyux5QIxE0sAdVFWXanF-Fy5K5n3Z0s')
            .then(response => response.json())
            .then(results => {
                this.setState({ video: results.items })
            })
    }

    // FETCH DATA ON PAGE LOAD
    componentDidMount() {
        this.fetchYoutube()
    }

    // RENDER DATA ON PAGE
    render() {
        // console.log(this.state.video)
        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className="main-categories">
                        <div className="main-categories-media">
                            <h3>YouTube</h3>
                                {(this.state.video)
                                    ? <Youtube
                                        video={this.state.video} />
                                    : null
                                }
                            </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
