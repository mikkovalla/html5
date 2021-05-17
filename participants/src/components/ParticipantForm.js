import './ParticipantForm.css'

const ParticipantForm = (props) => {
    return (
        <div>
            <table className="participantForm">           
                <tbody>
                    <tr>
                        <td className="name">
                            <input type="text" name="name" placeholder="Full name" />
                        </td>
                        <td className="email">
                            <input type="email" name="email" placeholder="E-mail address" />
                        </td>
                        <td className="phoneNumber">
                            <input type="text" name="number" placeholder="Phone number" />
                        </td>
                        <td className="button">
                            <button>Add new</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ParticipantForm