class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-full">
                    <a href="#">Serial<br />Killers</a>
                    <a href="#">Unsolved<br />Crimes</a>
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