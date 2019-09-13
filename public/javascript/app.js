// ==================================== //
// ==================================== //
// CLASS APP; HEADER, MAIN, FOOTER COMPONENTS
// ==================================== //
// ==================================== //
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

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