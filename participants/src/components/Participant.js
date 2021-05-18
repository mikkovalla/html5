import { FaPen, FaTrash } from "react-icons/fa"
import './Participant.css'

const Participant = ( person ) => {
    //delete participant
    const onDelete = () => {
        const filteredParticipants = person.participants.filter((p) => p.id !== person.person.id)
        person.removeParticipant(filteredParticipants)
    }

    const onEdit = () => {
        let editParticipants = person.participants.map((value, i) => {
            if(i === person.person.id) value.edit = true
            return value
        })
        person.updateParticipant(editParticipants)
    }

    return (
        <tr key={person.person.id} id={person.person.id}>
            <td>{person.person.name}</td>
            <td>{person.person.email}</td>
            <td>{person.person.phoneNumber}</td>
            <td className="button">
                <FaPen style={{ fill: '#909090', height:'24px', width:'24px', marginLeft:'10px' }} onClick={onEdit}/> 
                <FaTrash style={{ fill: '#909090', height:'24px', width:'24px', marginLeft:'10px' }} onClick={onDelete}/>
            </td>
        </tr>
    )
}

export default Participant