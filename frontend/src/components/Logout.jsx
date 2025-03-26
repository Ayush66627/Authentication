import React from 'react'
import { useAuth } from "../context/AuthProvider.jsx"
import { toast } from 'react-hot-toast'

function Logout() {
  
    const[authUser, setAuthUser] = useAuth()

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            })
            localStorage.removeItem('User')
            toast.success('Logged out successfully')
            setTimeout(() => {
                window.location.reload()        
            }, 3000);
            window.location.reload('/')
        } catch (error) {
            toast.error('Failed to logout')
            setTimeout(() => {}, 3000);
        }
    }

  return (
    <div>
        <button className='bg-black cursor-pointer text-white p-2 font-semibold rounded-md hover:bg-cyan-800 duration-300'
        onClick={handleLogout}
        >logout</button>
    </div>
  )
}

export default Logout