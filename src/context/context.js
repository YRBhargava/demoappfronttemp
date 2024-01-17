import { createContext, useState, useEffect } from 'react'

import axios from 'axios';



const DataProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    }, [])

   
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users", { headers })
        //console.log(result.data)
        setUsers(result.data)
        console.log(result.data)
    }

    const deleteUser= async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
      }

    

    const headers = {
        "Content-Type": "application/json"
      };

    return (
        <div>
            <DataContext.Provider value={{
                users, deleteUser, loadUsers
            }}>

                {children}
            </DataContext.Provider>
        </div>
    )

}

export default DataProvider;
export const DataContext = createContext(null);
