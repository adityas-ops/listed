import Login from "../components/login/Login";
import Dashboard from "@/components/dashboard/Dashboard";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();


  return (
   <div className="font-Montserrat">
      {!session ? <Login /> : <Dashboard  session={session} />}  
   </div>
  )
}
