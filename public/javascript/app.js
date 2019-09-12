class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-full">
                    <a href="#">Serial Killers</a>
                    <a href="#">Unsolved Crimes</a>
                    <img src="../css/images/logo.png" class="header-logo" />
                    <a href="#">Login / Signup</a>
                    <a href="#">Search</a>
                </div>

                <div className="header-mobile">
                    <img src="../css/images/icon-search.png" class="header-icon" />
                    <img src="../css/images/logo.png" class="header-logo" />
                    <img src="../css/images/icon-menu.png" class="header-icon" />
                </div>
            </header>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="main-media">
                    <h3>Podcasts</h3>
                    <div className="box-media">
                        <div class="box-card">
                            <div className="example-box"></div>
                            <h6>Criminal</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box"></div>
                            <h6>Unmasking a Killer</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box"></div>
                            <h6>Forensic Files</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box"></div>
                            <h6>Death in Ice Valley</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box"></div>
                            <h6>Today in True Crime</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box"></div>
                            <h6>Serial Killers</h6>
                        </div>
                        <div className="more-button">
                            <img src="../css/images/icon-more.png" className="main-icon" />
                        </div>
                    </div>
                </div>

                <div className="main-media">
                    <h3>Videos</h3>
                    <div className="box-media">
                        <div class="box-card">
                            <div className="example-box vid"></div>
                            <h6>Crime Watch Daily</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box vid"></div>
                            <h6>Criminally Listed</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box vid"></div>
                            <h6>Forensic Files</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box vid"></div>
                            <h6>Buzzfeed Unsolved: True Crime</h6>
                        </div>
                        <div className="more-button">
                            <img src="../css/images/icon-more.png" className="main-icon" />
                        </div>
                    </div>
                </div>

                <div className="main-media">
                    <h3>TV & Film</h3>
                    <div className="box-media">
                        <div class="box-card">
                            <div className="example-box film"></div>
                            <h6>Making a Murderer</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box film"></div>
                            <h6>Snapped</h6>
                        </div>
                        <div class="box-card">
                            <div className="example-box film"></div>
                            <h6>Nightmare Next Door</h6>
                        </div>
                        <div className="more-button">
                            <img src="../css/images/icon-more.png" className="main-icon" />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>this app was made with determination and a mac by a true crime enthusiast in atlanta.</p>
            </footer>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div id="beckham">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.body')
)