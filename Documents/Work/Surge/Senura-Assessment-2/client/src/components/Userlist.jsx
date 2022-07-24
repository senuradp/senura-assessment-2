import { useEffect, useState} from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { getUsers } from "../service/api";


const Userlist = () => {

    
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);
    
    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data); 
    }

    // useEffect(() => {
    //     getAllUsers();
    // }, []);
    
    // const getAllUsers = async () => {
    //     let response = await getUsers();
    //     setUsers(response.data); 
    // }
    // const getAllUsers = async () => {
    //     let response = await getUsers();
    //     setUsers(response.data); 
    // }

    // useEffect(() => {
    //     if(users){
    //         getAllUsers();
    //     }
    // }, []);

    

  return (
    <div>

      {
        users ? (
            // <h2>{users[0].firstName}</h2>
            <Table>
            <TableHead>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Emaiil</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Account Type</TableCell>
            </TableHead>
            <TableBody>

            {
                users.map((user) => {
                    return (
                        <TableRow>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.dateOfBirth}</TableCell>
                            <TableCell>{user.mobile}</TableCell>
                            <TableCell>{user.status ? 'First time':'Not First time'}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>{user.accountType}</TableCell>
                        </TableRow>
                    )
                })
            }

            </TableBody>
    </Table>

            
        ) : (
            <h2>Loading... (no data)</h2>
        )

        }

        </div>
      
  );
};

export default Userlist;
