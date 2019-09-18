// APP > MAIN > #

class Omnisearch extends React.Component {
    render() {
        return (
            <form class="search-form" onSubmit={this.props.omnisearchQuery}>
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