// APP > MAIN > #

class Evidence extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEvidenceEdited: false,
            evidence: [],
            userInputs: {
                name: '',
                location: '',
                age: '',
                notes: '',
                id: null
            }
        }
    }

    // ================= FORM FUNCTIONS ================= //
    // ================= FORM FUNCTIONS ================= //
    // ================= FORM FUNCTIONS ================= //

    // GET ENTRIES
    fetchEvidence = () => {
        fetch('/evidence')
            .then(data => data.json())
            .then(entries => {
                this.setState({ evidence: entries.data, })
            })
    }

    // ADD EVIDENCE
    handleCreate = (createData) => {
        fetch('/evidence', {
            body: JSON.stringify(createData),
            method: 'Post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(createdEvidence => {
                return createdEvidence.json()
            })
            .then(jsonedEvidence => {
                this.setState(prevState => {
                    prevState.evidence.push(jsonedEvidence)
                    return { evidence: prevState.evidence }
                })
            })
            .catch(error => console.log(error))
    }

    // UPDATE EVIDENCE
    // handleUpdate = (updateData) => {
    //     fetch(`/evidence/${updateData.id}`, {
    //         body: JSON.stringify(updateData),
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(updatedEvidence => {
    //             this.fetchEvidence()
    //         })
    //         .catch(error => console.log(error))
    // }


    //   DELETE ENTRY
    handleDelete = (id) => {
        fetch(`/evidence/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(json => {
                this.setState(prevState => {
                    const evidence = prevState.evidence.filter(evidence => evidence.id !== id)
                    return { evidence }
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetchEvidence()
    }

    render() {
        return (
            <div class="evidence">
                <h1>Evidence Log</h1>
                <h3 className="evidence-funny">Since you're here, you'd might as well leave some evidence behind.</h3>

                <EvidenceForm
                    handleCreate={this.handleCreate}
                    userInputs={this.state.userInputs} />




                    {this.state.evidence.map((evidence, index) => {
                        return (
                            <div id="entry-card">
                                <h6>Entry no. {evidence.id}</h6>
                                <h2>{evidence.name}, {evidence.age} in {evidence.location}</h2>
                                {/* <h2>{evidence.location}</h2> */}
                                <p>{evidence.notes}</p>
                            </div>
                        )
                    })}
            </div>
        )
    }
}