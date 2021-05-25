import Participant from './Participant'
import ParticipantForm from './ParticipantForm'
import EditParticipant from './EditParticipant'
import './ParticipantList.css'

const ParticipantList = ({participants, updateParticipant, removeParticipant}) => {

    const sortNames = () => {
        const sortByName =
            [...participants].sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
        const finalArray = sortByName.map((value, i) => 
            {
                value.id = i
                return value
            })
        updateParticipant(finalArray)
    }


    return (
        <div className="listing">
            <h2>List of participants</h2>
            <ParticipantForm person={ participants } />
            <table className="participantstable">
                <thead>
                    <tr>
                        <th className="name" onClick={sortNames}>
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
                            : <EditParticipant person={ person } participants={ participants } updateParticipant={ updateParticipant } />
                        }
                    )}
                </tbody>        
            </table>
        </div>
        
    )
}

export default ParticipantList