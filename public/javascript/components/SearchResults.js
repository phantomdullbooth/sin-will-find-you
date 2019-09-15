class SearchResults extends React.Component {
    render() {
        console.log(this.props.youtubeResults)
        return (
            <div className="search-results">
                <h1>Search Results</h1>
                {this.props.youtubeResults.map((youtubeMedia, matt) => {
                    return (
                        <div className="media-grid" key={matt}>
                            <img src={youtubeMedia.snippet.thumbnails.medium.url} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
