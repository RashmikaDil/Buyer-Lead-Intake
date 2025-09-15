"use client";

import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";



export default function Login() {
    
    const [id,setId] = useState();
    const [massage,setMassage] = useState('');

  const router = useRouter();
function HandleLogin(id) {
  if (!id) {
    setMassage("Enter User ID to login");
    return;
  }

  const user = { id, name: "Demo User" };
  localStorage.setItem("user", JSON.stringify(user));
  router.push('/dashboard')

  
}


return(<>
<div className="flex h-screen justify-center items-center">
<div className="flex flex-col justify-center items-center w-100 h-auto p-10 pt-30 pb-30 shadow-2xl shadow-white/10  bg-black/50 rounded-2xl ">

     <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter User Id"
        className="border-1 border-white/20 rounded-2xl p-2 text-center mt-3 mb-5"
      /><button onClick={() => HandleLogin(id)  } className="p-2  bg-white cursor-pointer hover:bg-white/50 transition-all  text-black w-52 rounded-2xl">Login</button>
 <h2 className="text-white/35 mt-3 text-md">{massage}</h2>


</div>

</div>



</>)
}
