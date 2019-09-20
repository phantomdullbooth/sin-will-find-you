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

    // GET EVIDENCE
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
    handleUpdate = (updateData) => {
        fetch(`/evidence/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(updatedEvidence => {
                this.fetchEvidence()
            })
            .catch(error => console.log(error))
    }

    //   DELETE EVIDENCE
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
                    handleUpdate={this.handleUpdate}
                    handleDelete={this.handleDelete}
                    userInputs={this.state.userInputs} />


                <table className="evidence-log">
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Age</th>
                        <th>Notes</th>
                        <th>Options</th>
                    </tr>


                    {this.state.evidence.map((evidence, index) => {
                        return (
                            (this.state.isEvidenceEdited === false)
                                ? <tr>
                                    <td>{evidence.id}</td>
                                    <td>{evidence.name}</td>
                                    <td>{evidence.location}</td>
                                    <td>{evidence.age}</td>
                                    <td>{evidence.notes}</td>
                                    <th>
                                        <button className="minty">Tamper with Evidence</button>
                                    </th>
                                </tr>
                                : <tr style={{ backgroundColor: '#ffba00', color: '#191919' }}>
                                    <td>{evidence.id}</td>
                                    <td>{evidence.name}</td>
                                    <td>{evidence.location}</td>
                                    <td>{evidence.age}</td>
                                    <td>{evidence.notes}</td>
                                    <th>
                                        <button className="dangerStranger">Delete Evidence</button>
                                    </th>
                                </tr>

                        )
                    })}
                </table>
            </div>
        )
    }
}