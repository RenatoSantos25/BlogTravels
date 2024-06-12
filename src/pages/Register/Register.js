import React, { useState, useEffect } from "react"; 
import styles from "./Register.modules.css";
import { useAuthentication } from "../../hooks/useAuthentication"; 

const Register = () => { 
    const [displayName, setDisplayName]=useState(''); 
    const [email, setEmail]  = useState(''); 
    const [password, setPassword]  = useState(''); 
    const [displayConfirm, setConfirm]  = useState(''); 
    const [error, setError] = useState(''); 
    const {createUser, error: authError, loading} = useAuthentication();    

    const handleSubmit = async(e)=> { 
        e.preventDefault(); 
        setError("") 
        const user = { 
            displayName, 
            email, 
            password 
        } 
        if (password !== displayConfirm) { 
            setError("As senhas precisam ser iguais!") 
            return 
        } 
        const res = await createUser(user)
    } 

    useEffect(() => { 

        if (authError) { 
          setError(authError) 
        } 
      }, [authError]) 

    return ( 
        <div className={styles.register}> 
        <h1>Cadastre-se para postar</h1> 
        <form onSubmit={handleSubmit}> 
            <label> 
                <span> 
                    Nome: 
                </span> 
                <input type="text" name="displayName" required placeholder="Nome Usuário" value={displayName} onChange={(e) =>   setDisplayName(e.target.value)} /> 
            </label> 
            <label> 
                <span> 
                    E-mail: 
                </span> 
                <input type="text" name="email" required placeholder="E-mail Usuário"  value={email} onChange={(e) =>   setEmail(e.target.value)} /> 
            </label> 
            <label> 
                <span> 
                    Senha: 
                </span> 
                <input type="password" name="password" required placeholder="Senha Usuário"  value={password} onChange={(e) =>   setPassword(e.target.value)} /> 
            </label> 
            <label> 
                <span> 
                    Confirmação de Senha: 
                </span> 
                <input type="password" name="displayConfirm" required placeholder="Confirme Senha Usuário"  value={displayConfirm} onChange={(e) =>   setConfirm(e.target.value)} /> 
            </label> 
            {!loading && <button className="btn">Cadastrar</button>} 
            {loading &&  <button className="btn" disabled>Aguarde...</button>} 
            {error && <p className="error">{error}</p>} 
        </form> 
        </div> 
  ); 
}

export default Register;
