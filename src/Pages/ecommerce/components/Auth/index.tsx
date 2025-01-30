import React, { useState } from 'react';
import styles from './styles.module.scss';

type AuthComponentProps = {
    mode: 'login' | 'register'; 
    closeAuth: () => void;
    switchMode: (mode: 'login' | 'register') => void; 
};

const AuthComponent: React.FC<AuthComponentProps> = ({ mode, closeAuth, switchMode }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validatePassword = () => {
        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres.');
            return false;
        }
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (mode === 'register' && !validatePassword()) {
            return;
        }
        console.log(mode === 'login' ? 'Login enviado' : 'Registro enviado');
    };

    return (
        <div className={styles.authComponent}>
            <div className={styles.authTitle}>
            <h1>{mode === 'login' ? 'Login' : 'Registre-se'}</h1>
                <button 
                    type="button" 
                    onClick={closeAuth}
                >
                    X
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                {mode === 'register' && (
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        required 
                    />
                )}
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                {mode === 'register' && (
                    <input 
                        type="password" 
                        placeholder="Confirme a senha" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                )}
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit">
                    {mode === 'login' ? 'Entrar' : 'Registrar'}
                </button>
            </form>
            <div className={styles.actions}>
                {mode === 'login' && (
                    <>
                        <button 
                            type="button" 
                            onClick={() => switchMode('register')}
                        >
                            Não possui conta? Criar conta
                        </button>
                        <button 
                            type="button" 
                            onClick={() => console.log('Esqueceu sua senha')}
                        >
                            Esqueceu sua senha?
                        </button>
                    </>
                )}
                {mode === 'register' && (
                    <button 
                        type="button" 
                        onClick={() => switchMode('login')}
                    >
                        Possui conta? Faça login
                    </button>
                )}
            </div>
        </div>
    );
};

export default AuthComponent;
