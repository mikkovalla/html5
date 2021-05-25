import { useState } from 'react'
import './EditParticipant.css'

const EditParticipant = ( person ) => {

    const initialState = {
        name: person.person.name,
        email: person.person.email,
        phoneNumber: person.person.phoneNumber
    }

    const [init] = useState(initialState)

    const cancelUpdate = () => {
        let cancel = person.participants.map((property, i) => {            
            if(i === person.person.id) {
            property.name = init.name
            property.email = init.email
            property.phoneNumber = init.phoneNumber    
            property.edit = false
            }
            return property
        })
        person.updateParticipant(cancel)
    }

    const handleChange = (e) => {
        let updatePart = person.participants.map((property, i) => {
            if(i === person.person.id) {
                property[e.target.name] = e.target.value              
            }
            return property 
        })
        person.updateParticipant(updatePart)
    }

    const saveParticipant = () => {
        let save = person.participants.map((property, i) => {
            if(i === person.person.id) {
                property.edit = false
            }
            return property
        })
        person.updateParticipant(save)
    }
    
    return (
        <tr key={person.person.id} id={person.person.id} className='editParticipant'>            
            <td className="name">
                <input type="text" name="name" value={person.person.name} onChange={handleChange} placeholder="Full name" />
            </td>  
            <td className="email">
                <input type="email" name="email" value={person.person.email} onChange={handleChange} placeholder="E-mail address" />
            </td>
            <td className="phoneNumber">
                <input type="text" name="phoneNumber" value={person.person.phoneNumber} onChange={handleChange} placeholder="Phone number" />
            </td>
            <td>
                <button className="cancelUpdate" onClick={cancelUpdate}>Cancel</button>
            </td>
            <td>
                <button className="saveParticipant" onClick={saveParticipant}>Save</button>
            </td>
        </tr>
    )
}

export default EditParticipant