import './EditParticipant.css'

const EditParticipant = ( person ) => {

    const cancelUpdate = () => {
        let updateEdit = person.participants.map((value, i) => {
            if(i === person.person.id) {
                value.edit = false
            }
            return value
        })
        person.updateParticipant(updateEdit)
    }

    const inputValue = (event) => {
        let updateEdit = person.participants.map((property, i) => {
            if(i === person.person.id) {
            property[event.target.name] = event.target.value
            }
            return property
        })
        person.updateParticipant(updateEdit)
    }

    const saveParticipant = (name, email, phoneNumber) => {
        let save = person.participants.map((property, i) => {
            if(i === person.person.id) {
                property.name = name
                property.email = email
                property.phoneNumber = phoneNumber
                property.edit = false
            }
            return property
        })
        person.updateParticipant(save)
    }
    
    return (
        <tr key={person.person.id} id={person.person.id} className='editParticipant'>
            <td className="name">
                <input type="text" name="name" value={person.person.name} onChange={inputValue} placeholder="Full name" />
            </td>  
            <td className="email">
                <input type="email" name="email" value={person.person.email} onChange={inputValue} placeholder="E-mail address" />
            </td>
            <td className="phoneNumber">
                <input type="text" name="phoneNumber" value={person.person.phoneNumber} onChange={inputValue} placeholder="Phone number" />
            </td>
            <td>
                <button className="cancelUpdate" onClick={cancelUpdate}>Cancel</button>
            </td>
            <td>
                <button className="saveParticipant" onClick={() => saveParticipant(person.person.name, person.person.email, person.person.phoneNumber)}>Save</button>
            </td>
        </tr>
    )
}

export default EditParticipant