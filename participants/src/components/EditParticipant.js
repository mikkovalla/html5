import './EditParticipant.css'

const EditParticipant = ( person ) => {
    
    inputChange = (event) => {
        person.updateParticipant({[event.target.name]: event.target.value})
    }
    
    return (
        <tr key={this.props.id} id={this.props.id} className='form'>
                <td className="name">
                    <input type="text" name="name" value={this.state.name} onChange={this.inputChanged} placeholder="Full name" />
                </td>  
                <td className="email">
                    <input type="email" name="email" value={this.state.email} onChange={this.inputChanged} placeholder="E-mail address" />
                </td>
                <td className="number">
                    <input type="text" name="number" value={this.state.number} onChange={this.inputChanged} placeholder="Phone number" />
                </td>
                <td className="btn"><button onClick={() => this.props.cancelPart(this.props.id)} className="cancel">Cancel</button><button className="save" onClick={() => this.props.updatePart(this.props.id, this.state.name, this.state.email, this.state.number)}>Save</button></td>
        </tr>
    )
}

export default EditParticipant