import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { getUsers } from "../service/api";
import { Link } from 'react-router-dom';

const Userlist = () => {
  const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
  `;

  const THead = styled(TableRow)`
    background: #000000;
  `;

  const THCell = styled(TableCell)`
    color: #fff;
    font-size: 20px;
  `;

  const TBody = styled(TableRow)`
    font-size: 20px;
  `;

  const EditButton = styled(Button)`
    margin-right: 10px;
    margin-top: 6px;
  `;

  const DeleteButton = styled(Button)`
    margin-top: 6px;
  `;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <div>
      {users ? (
        // <h2>{users[0].firstName}</h2>
        <Table>
          <TableHead>
            <THead>
              <THCell>Id</THCell>
              <THCell>First Name</THCell>
              <THCell>Last Name</THCell>
              <THCell>Emaiil</THCell>
              <THCell>Date of Birth</THCell>
              <THCell>Mobile</THCell>
              <THCell>Status</THCell>
              <THCell>Password</THCell>
              <THCell>Account Type</THCell>
              <THCell></THCell>
            </THead>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TBody>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.dateOfBirth}</TableCell>
                  <TableCell>{user.mobile}</TableCell>
                  <TableCell>
                    {user.status ? "First time" : "Not First time"}
                  </TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.accountType}</TableCell>
                  <EditButton variant="contained" id="editButton" component={Link} to={`/edit/${user._id}`}>
                    Edit
                  </EditButton>
                  <DeleteButton variant="contained" color="secondary">
                    Delete
                  </DeleteButton>
                </TBody>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <h2>Loading... (no data)</h2>
      )}
    </div>
  );
};

export default Userlist;
