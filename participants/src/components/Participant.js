import { FaPen, FaTrash } from "react-icons/fa"
import './Participant.css'

const Participant = ( person ) => {
    console.log('Ppp: ', person)
    //delete participant
    const onDelete = () => {
        const filteredParticipants = person.participants.filter((p) => p.id !== person.person.id)
        person.removeParticipant(filteredParticipants)
    }

    return (
        <tr key={person.person.id} id={person.person.id}>
            <td>{person.person.name}</td>
            <td>{person.person.email}</td>
            <td>{person.person.phoneNumber}</td>
            <td className="button">
                <FaPen style={{ fill: '#909090', height:'24px', width:'24px', marginLeft:'10px' }} /> 
                <FaTrash style={{ fill: '#909090', height:'24px', width:'24px', marginLeft:'10px' }} onClick={onDelete}/>
            </td>
        </tr>
    )
}

export default Participant