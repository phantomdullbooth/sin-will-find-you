// APP > MAIN > #

class Evidence extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            // userInputs: {
            //     name: '',
            //     location: '',
            //     age: '',
            //     notes: '',
            //     id: null
            // }
        }
        this.fetchEvidence = this.fetchEvidence.bind(this)
    }

    // GET EVIDENCE
    fetchEvidence() {
        fetch('/users')
            .then(data => data.json())
            .then(users => {
                this.setState({ users: users.data, })
            })
    }

    componentDidMount() {
        this.fetchEvidence()
    }

    render() {
        return (
            <div class="evidence">
                <h1>Evidence Log</h1>
                <h3>Were you here? You might as well leave some evidence behind.</h3>

                {this.state.users.map((users, index) => {
                    return (
                        <h4>{users.id}</h4>
                    )
                })}

                
            </div>
        )
    }
}




//   handleCreate = (createData) => {
//     fetch('/api/posts', {
//       body: JSON.stringify(createData),
//       method: 'Post',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(createdPost => {
//         return createdPost.json()
//       })
//       .then(jsonedPost => {
//         //change to home view
//         this.props.handleView('home')
//         this.setState(prevState => {
//           prevState.posts.push(jsonedPost)
//           return { posts: prevState.posts}
//         })
//       })
//       .catch(error => console.log(error))
//   }
//   handleUpdate = (updateData) => {
//     fetch(`/api/posts/${updateData.id}`, {
//       body: JSON.stringify(updateData),
//       method: 'PUT',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(updatedPost => {
//       this.props.handleView('home')
//       this.fetchPosts()
//     })
//     .catch(error => console.log(error))
//   }
//   handleDelete = (id) => {
//     fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(json => {
//       this.setState(prevState => {
//         const posts = prevState.posts.filter(post => post.id !== id)
//         return {posts}
//       })
//     })
//     .catch(error => console.log(error))
//   }