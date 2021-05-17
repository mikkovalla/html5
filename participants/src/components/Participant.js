const Participant = (props) => {
    return (
        <tr key={props.id} id={props.id}>
            <td >{props.name}</td>
            <td>{props.email}</td>
            <td>{props.number}</td>
        </tr>
    )
}

export default Participant