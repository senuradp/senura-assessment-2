import { useState, useEffect } from 'react';
import { styled, FormGroup, FormControl, InputLabel , Input, Typography, Button } from "@mui/material";
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width : 50%;
    margin : 5% auto 0 auto;
`;

const ContChild = styled(FormControl)`
    margin-top : 20px;
`;

const defValue = {
    firstName:'',
    lastName: '',
    email: '',
    dateOfBirth: '',
    mobile: '',
    status: true,
    password: '',
    accountType: ''
}



const EditUser = () => {

    const [user, setUser] = useState({defValue});

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    },[]);

    const loadUserDetails = async () => {
        let response = await getUser(id);
        setUser(response.data);
    };

    const onValueChange = (e) =>{
        // console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
        // console.log(user);
    }

    const editUserDetails = async () => {
        await editUser(user, id);  
        navigate('/user-list');
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <ContChild>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="firstName" value={user.firstName}/>
            </ContChild>
            <ContChild>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="lastName" type='text' value={user.lastName}/>
            </ContChild>
            <ContChild>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" type='email' value={user.email}/>
            </ContChild>
            <ContChild>
                <InputLabel>Date of Birth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="dateOfBirth" type='text' value={user.dateOfBirth}/>
            </ContChild>
            <ContChild>
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="mobile"  type='number' value={user.mobile}/>
            </ContChild>
            {/* <ContChild> 
                <InputLabel>Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="status"  type='boolean'/>
            </ContChild> */}
            <ContChild>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="password" type='password' value={user.password}/>
            </ContChild>
            <ContChild>
                <InputLabel>Account Type (Admin / Student)</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="accountType" type='text' value={user.accountType}/>
            </ContChild>
            <ContChild>
                <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button>
            </ContChild>
        </Container>
    );
}

export default EditUser;
