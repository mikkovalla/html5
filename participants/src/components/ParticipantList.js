import Participant from './Participant'
import ParticipantForm from './ParticipantForm'
import EditParticipant from './EditParticipant'
import './ParticipantList.css'

const ParticipantList = ({ participants, removeParticipant, updateParticipant }) => {
    return (
        <div className="listing">
            <h2>List of participants</h2>
            <ParticipantForm person={ participants } updateParticipant={ updateParticipant }/>
            <table className="participantstable">
                <thead>
                    <tr>
                        <th className="name">
                            Name
                        </th>
                        <th className="email">
                            E-mail address
                        </th>
                        <th className="phoneNumber">
                            Phone number
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map((person) => 
                        {
                            return person.edit === false ? <Participant person={ person } participants={ participants } removeParticipant={ removeParticipant } updateParticipant={ updateParticipant }/>
                            : <EditParticipant person={ person } participants={ participants } updateParticipant={ updateParticipant }/>
                        }
                    )}
                </tbody>        
            </table>
        </div>
        
    )
}

export default ParticipantList