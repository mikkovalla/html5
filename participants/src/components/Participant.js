import { FaPen, FaTrash } from "react-icons/fa"
import './Participant.css'

const Participant = ( person ) => {
    const onDelete = () => {
        const filteredParticipants = person.participants.filter((p) => p.id.value !== person.person.id.value)
        person.removeParticipant(filteredParticipants)
    }
    return (
        <tr key={person.person.id.value} id={person.person.id.value}>
            <td>{person.person.name.first} {person.person.name.last}</td>
            <td>{person.person.email}</td>
            <td>{person.person.phone}</td>
            <td className="button">
                <FaPen style={{ fill: '#909090', height:'24px', width:'24px', marginLeft:'10px' }} /> 
                <FaTrash style={{ fill: '#909090', height:'24px', width:'24px', marginLeft:'10px' }} onClick={onDelete}/>
            </td>
        </tr>
    )
}

export default Participant