class Header extends React.Component {
    render() {
        return (
            <header>
                {this.props.isMobile
                    ? (
                        <div className="header">
                            <img
                                src="../css/images/icon-search.png"
                                class="header-icon"
                                onClick={() => { {this.props.toggleSearchbar()} }}/>
                            <img src="../css/images/logo.png" class="logo" />
                            <img src="../css/images/icon-menu.png" class="header-icon" />
                        </div>
                    )
                    : (
                        <div className="header">
                            <a href="#">Serial Killers</a>
                            <a href="#">Unsolved Crimes</a>
                            <img src="../css/images/logo.png" class="logo" />
                            <a href="#">Login / Signup</a>
                            <a href="#" onClick={() => { {this.props.toggleSearchbar()} }}>Search</a>
                        </div>
                    )
                }
            </header>
        )
    }
}