import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return ( 
        <form className="signup" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Sign up</button>
        </form>
    );
}
 
export default Signup;