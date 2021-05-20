import './ParticipantForm.css'

const ParticipantForm = (person) => {

    const inputValue = (event) => {
        let updateEdit = person.person[event.target.name] = event.target.value

        person.updateParticipant(updateEdit)
    }

    const addParticipant = (name, email, phoneNumber) => {
        let addNewParticipant = person.participants.map((property, i) => {
            if(i === person.person.id) {
                property.name = name
                property.email = email
                property.phoneNumber = phoneNumber
                property.edit = false
            }
            return property
        })
        console.log('NEW: ', addNewParticipant)
        person.updateParticipant({name, email, phoneNumber, person:[addNewParticipant, ...person.person]})
    }

    return (
        <div>
            <table className="participantForm">           
                <tbody>
                    <tr>
                        <td className="name">
                            <input type="text" name="name" placeholder="Full name" onChange={inputValue}/>
                        </td>
                        <td className="email">
                            <input type="email" name="email" placeholder="E-mail address" onChange={inputValue}/>
                        </td>
                        <td className="phoneNumber">
                            <input type="text" name="phoneNumber" placeholder="Phone number" onChange={inputValue}/>
                        </td>
                        <td className="button">
                            <button onClick={() => addParticipant(person.person.name, person.person.email, person.person.phoneNumber)}>Add new</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ParticipantForm