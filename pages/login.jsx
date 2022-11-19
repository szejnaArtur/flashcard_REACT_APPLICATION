import React, {useState} from 'react';

function login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        const {value} = event.target;
        setEmail(value);
    }

    const handlePasswordChange = (event) => {
        const {value} = event.target;
        setPassword(value);
    }

    return(
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='w-full h-20 bg-red-400 flex  flex-col'>
                <input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange}/>
                <input type="password" placeholder="Hasło" value={password} onChange={handlePasswordChange}/>
            </div>
        </div>
    )
}

export default login;
