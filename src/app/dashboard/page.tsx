"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [userId,setUserId] = useState();
  const [user,setUser] = useState();

  function handleLogout(){
    localStorage.clear();
    router.push('./')

  }

  useEffect(() => {
    const token = localStorage.getItem("user");
    if(token){
         const user = JSON.parse(token);
          setUser(user.name)
          setUserId(user.id)
    }
   

    if (!token) {
      router.push("/"); 
    }
  }, [router,handleLogout]);

  return (<>
  
  <div className="p-5 w-full bg-black/50 flex justify-between">
  
  <div className="flex flex-col ">
<h1 className="text-xl">{user}</h1>
<h2 className="text-md text-white/50">#{userId}</h2>
  </div>
<button onClick={handleLogout} className="text-red-500 cursor-pointer pr-10">Log Out</button>
  </div>
  
  
  </>);
}
