"use client"
// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// interface AuthContextProps {
//   user: string | null;
//   token: string | null;
//   login: (username: string, token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<string | null>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const storedUser = Cookies.get('user');
//     const storedToken = Cookies.get('token');

//     if (storedUser && storedToken) {
//       setUser(storedUser);
//       setToken(storedToken);
//     }
//   }, []);

//   const login = (username: string, token: string) => {
//     setUser(username);
//     setToken(token);
//     Cookies.set('user', username, { secure: true, sameSite: 'strict' });
//     Cookies.set('token', token, { secure: true, sameSite: 'strict' });
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     Cookies.remove('user');
//     Cookies.remove('token');
//     router.push('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {

//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// frontend/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setUser(email);
      router.push('/protected');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  };

  const register = async (email: string, password: string) => {
    try {
      await axios.post('http://localhost:3001/api/register', { email, password });
      await login(email, password);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
