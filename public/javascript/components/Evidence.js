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

    componentDidMount() {
        this.fetchEvidence()
    }

    render() {
        return (
            <div className="evidence">
                <h1 className="evidence-title">Evidence Log</h1>
                <h3>Since you're here, you'd might as well leave some evidence behind.</h3>

                <EvidenceForm
                    handleCreate={this.handleCreate}
                    userInputs={this.state.userInputs} />

                <div id="evidence-cards">

                    {this.state.evidence.map((evidence, index) => {
                        return (
                            <div id="entry-card">
                                <h6>Entry no. {evidence.id}</h6>
                                <h6 className="entry-persona">{evidence.name}, {evidence.age} // {evidence.location}</h6>

                                <p>{evidence.notes}</p>
                                
                            </div>
                        )
                    })}
                </div>
            </div>  
        )
    }
}