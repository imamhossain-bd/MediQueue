import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../Api/axios';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const u = localStorage.getItem("mq_user");
        return u ? JSON.parse(u) : null;
    });

    const [token, setToken] = useState(() => localStorage.getItem("mq_token") || null);
    const navigate = useNavigate();

    // whenever token set, configure default header

    useEffect(() =>{
        if(token){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem("mq_token", token);
        }else{
            delete api.defaults.headers.common['Authorization'];
            localStorage.removeItem("mq_token");
        }
    }, [token]);

    useEffect(() =>{
        if(user) localStorage.setItem("mq_user", JSON.stringify(user));
        else localStorage.removeItem("mq_user");
    }, [user]);
    
    
    const register = async (formData) => {
        const res = await api.post('/register', formData);
        return res.data;
    }


    const login = async (email, password) => {
        const res = await api.post('/login', { email, password });
        const {token: t, user: u} = res.data;
        setToken(t || res.data.access_token || null);
        setUser(u || res.data.user || null);


         if (u?.role === 'admin') navigate('/admin-dashboard');
        else if (u?.role === 'doctor') navigate('/doctor-dashboard');
        else navigate('/');
        return res.data;

    };


     const logout = async () => {
    try {
      // call backend logout to invalidate token
      await api.post('/logout');
    } catch (err) {
      // ignore network errors but still clear local state
        console.warn('logout error', err);
        }
        setToken(null);
        setUser(null);
        navigate('/login');
    };

    // helper: refresh user from backend (optional)
    const fetchUser = async () => {
        try {
        const res = await api.get('/user');
        setUser(res.data.user || res.data);
        return res.data;
        } catch (err) {
        setUser(null);
        return null;
        }
    };



    return(
        <AuthContext.Provider value={{ user, token, register, login, logout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
}