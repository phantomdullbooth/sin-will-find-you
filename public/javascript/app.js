// ==================================== //
// ==================================== //
// CLASS APP; HEADER, MAIN, FOOTER COMPONENTS
// ==================================== //
// ==================================== //

// require('dotenv').config()
// const APIKEY_YT = process.env.REACT_APP_APIKEY_YT
// console.log(APIKEY_YT)

// COMPONENT CLASS
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: {
                page: 'home',
                pageTitle: 'Welcome'
            },
            // YOUTUBE API FORMULA
            baseYouTubeURL: 'https://www.googleapis.com/youtube/v3/search?',
            part: 'part=snippet',
            query: '&q=%22' + 'true crime' + '%22',
            key: '&key=' + 'AIzaSyBKKyux5QIxE0sAdVFWXanF',
            searchYouTubeURL: ''
        }
        // this.handleSearch = this.handleSearch.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    // handleView = (view, postData) => {
    //     // let pageTitle = ''
    // }
    

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}





// ==================================== //
// ==================================== //
// RENDER
// ==================================== //
// ==================================== //

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)