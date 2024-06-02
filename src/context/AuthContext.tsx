"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  user: string | null;
  token: string | null;
  login: (username: string, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = Cookies.get('user');
    const storedToken = Cookies.get('token');

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  const login = (username: string, token: string) => {
    setUser(username);
    setToken(token);
    Cookies.set('user', username, { secure: true, sameSite: 'strict' });
    Cookies.set('token', token, { secure: true, sameSite: 'strict' });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove('user');
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
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
