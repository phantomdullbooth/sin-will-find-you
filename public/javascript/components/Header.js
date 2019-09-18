//  APP > HEADER

class Header extends React.Component {
    render() {
        return (
            <header>
                {(this.props.isMobile)
                    ? <div className="header-container">
                            <img
                                src="../css/images/icon-search.png"
                                class="header-icon"
                                onClick={() => { {this.props.toggleSearchbar()} }}
                                />
                            <img src="../css/images/logo.png" class="header-logo"
                            onClick={() => { {this.props.triggerReload()} }} />
                            <img src="../css/images/icon-menu.png" class="header-icon" />
                        </div>
                    : <div className="header-container">
                            <a href="#">Serial Killers</a>
                            <a href="#">Unsolved Crimes</a>
                            <img    src="../css/images/logo.png"
                                    class="header-logo"
                                    onClick={() => { {this.props.triggerReload()} }} />
                            <a  href="#"
                                onClick={() => { {this.props.toggleLogin()} }}>Login / Signup</a>
                            <a  href="#"
                                onClick={() => { {this.props.toggleSearchbar()} }}>Search</a>
                        </div>
                }
            </header>
        )
    }
}