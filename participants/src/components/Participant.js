import './Participant.css'

const Participant = (props) => {
    return (
        <tr key={props.person.cell}>
            <td>{props.person.name.first} {props.person.name.last}</td>
            <td>{props.person.email}</td>
            <td>{props.person.phone}</td>
        </tr>
    )
}

export default Participant