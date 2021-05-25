import { useState } from 'react';
import './ParticipantForm.css'

const ParticipantForm = ({participants, updateParticipant}) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMsg, setErrorMsg] = useState([]);

    //Validations
    let errors = []

    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
        }
        return false
    }

    const validateName = (name) => {
        return name !== ""
    }

    const validatePhoneNumber = (phoneNumber) => {
        let number = parseInt(phoneNumber)
        return isNaN(number)
    }

    const validateInputs = () => {
        setErrorMsg([])
        
        if(!validateEmail(email.email)) errors.push('Email is not valid!')
        if(email === "") errors.push('email cannot be empty!')
        if(!validateName(name.name)) errors.push('Invalid or empty name given!')
        if(validatePhoneNumber(phoneNumber.phoneNumber)) errors.push('Invalid phone number!')
        if(phoneNumber === "") errors.push('phone number cannot be empty!')

        if(errors.length > 0) {
            setErrorMsg(errors)
            console.log('Errors:', errorMsg)
        } else {
                alert('Participant succesfully added!')
                const newParticipant = {
                    id: participants.length,
                    name : name.name,
                    email: email.email,
                    phoneNumber: phoneNumber.phoneNumber,
                    edit: false
                }
                console.log(newParticipant)
                updateParticipant(participants => [...participants, newParticipant])
            }
    }

    return (
        <div>
            <table className="participantForm">           
                <tbody>
                    <tr>
                        <td className="name">
                            <input type="text" name="name" value={name.name} placeholder="Full name" onChange={e => setName({name: e.target.value})}/>
                        </td>
                        <td className="email">
                            <input type="email" name="email" value={email.email} placeholder="E-mail address" onChange={e => setEmail({email: e.target.value})}/>
                        </td>
                        <td className="phoneNumber">
                            <input type="text" name="phoneNumber" value={phoneNumber.phoneNumber} placeholder="Phone number" onChange={e => setPhoneNumber({phoneNumber: e.target.value})}/>
                        </td>
                        <td className="button">
                            <button onClick={validateInputs}>Add new</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ParticipantForm