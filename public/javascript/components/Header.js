class Header extends React.Component {
    render() {
        return (
            <header>
                {/* <div className="header-full">
                    <a href="#">Serial Killers</a>
                    <a href="#">Unsolved Crimes</a>
                    <img src="../css/images/logo.png" class="logo" />
                    <a href="#">Login / Signup</a>
                    <a href="#" onClick={this.props.toggleSearch}>Search</a>
                </div> */}

                <div className="header-mobile">
                    <img src="../css/images/icon-search.png" class="header-icon" onClick={this.props.toggleSearch} />
                    <img src="../css/images/logo.png" class="logo" />
                    <img src="../css/images/icon-menu.png" class="header-icon" />
                </div>
            </header>
        )
    }
}