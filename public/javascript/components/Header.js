//  APP > # [ RELOAD TRIGGER, SEARCHBAR TOGGLE, LINKS ]

class Header extends React.Component {
    render() {
        return (
            <header>
                {(this.props.isMobile)

                    // ========================= MOBILE HEADER ========================= //
                    // ========================= MOBILE HEADER ========================= //

                    ? <nav>
                        <img src="../css/images/icon-anonymous.png" onClick={() => { {this.props.toggleEvidence()} }} className="header-icon pointer" />
                        <img src="../css/images/logo.png" onClick={() => { {this.props.triggerReload()} }} className="header-logo pointer" />
                        <img src="../css/images/icon-search.png" onClick={() => { {this.props.toggleSearchbar()} }} className="header-icon pointer" />
                    </nav>

                    // ========================= FULL HEADER ========================= //
                    // ========================= FULL HEADER ========================= //

                    : <nav>
                        <a onClick={() => { {this.props.omnisearchSerialKillers()} }} className="header-link pointer">Serial Killers</a>
                        <a onClick={() => { {this.props.omnisearchUnsolved()} }} className="header-link pointer">Unsolved</a>
                        <img src="../css/images/logo.png" onClick={() => { {this.props.triggerReload()} }} className="header-logo" />
                        <a onClick={() => { {this.props.toggleSearchbar()} }} className="header-link pointer">Search</a>
                        <a onClick={() => { {this.props.toggleEvidence()} }} className="header-link pointer">Evidence Log</a>
                    </nav>
                }
            </header>
        )
    }
}