import Participant from './Participant'

const ParticipantList = ({ participants }) => {
    return (
        <div className="listing">
            <h2>List of participants</h2>
            <table className="participantsTable">
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
                    <Participant person={person} />
                    )}
                </tbody>        
            </table>
        </div>
        
    )
}

export default ParticipantList