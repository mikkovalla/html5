import './EditParticipant.css'

const EditParticipant = ( person ) => {

    const updateParticipantDetails = (id, name, email, phoneNumber) => {
        let updatedDetails = person.participants.map((value, i) => {
            if(i === id) {
                value.name = name
                value.email = email
                value.phoneNumber = phoneNumber
            }
            return value
        })
        person.updateParticipant(updatedDetails)
    }

    const cancelUpdate = () => {
        return person.updateParticipant()
    }
    
    return (
        <tr key={person.person.id} id={person.person.id} className='form'>
            <td className="name">
                <input type="text" name="name" value={person.person.name} onChange={event => person.updateParticipant(event.target.value)} placeholder="Full name" />
            </td>  
            <td className="email">
                <input type="email" name="email" value={person.person.email} onChange={event => person.updateParticipant(event.target.value)} placeholder="E-mail address" />
            </td>
            <td className="phoneNumber">
                <input type="text" name="phoneNumber" value={person.person.phoneNumber} onChange={event => person.updateParticipant(event.target.value)} placeholder="Phone number" />
            </td>
            <td className="btn">
                <button className="cancelUpdate" onClick={() => cancelUpdate(person.person.id)}>Cancel</button>
                <button className="updateParticipantDetails" onClick={() => updateParticipantDetails(person.person.id, person.person.name, person.person.email, person.person.phoneNumber)}>Save</button>
            </td>
        </tr>
    )
}

export default EditParticipant