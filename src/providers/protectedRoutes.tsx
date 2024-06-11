// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useAuth } from "@/context/AuthContext";

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push('/login');
//     }
//   }, [user, router]);

//   if (!user) {
//     return null; // or a loading spinner
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;

// frontend/pages/protected.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const Protected = () => {
  const [message, setMessage] = useState('');
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching protected data', error);
      }
    };

    fetchData();
  }, [user, router]);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>{message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Protected;
