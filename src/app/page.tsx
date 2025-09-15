"use client";
import { useEffect } from 'react';
import Login from './login'
import { useRouter } from 'next/navigation';

export default function Home() {
  const route = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("user");

   

    if (token) {
      route.push("/dashboard"); 
    }
  }, []);
  return (
    <>
    
    <Login/>
    </>
  );
}
