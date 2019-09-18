// APP > MAIN #

class Search extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.searchYoutube}>
                <label htmlFor="userQuery">Search</label>
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder="What are you looking for?"
                    value={this.props.userQuery}
                    id="userQuery" />
                <input
                    type="submit"
                    value="Search"
                    className="search-button" />
            </form>
        )
    }
}