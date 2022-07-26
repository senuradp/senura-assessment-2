import {useState} from 'react';
import {styled, FormGroup, FormControl, InputLabel , Input, Typography, Button} from "@mui/material";
import { addUser } from '../../service/api';
import { useNavigate} from 'react-router-dom';

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



const AddUser = () => {

    const [user, setUser] = useState({defValue});

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        // console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
        // console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);  
        navigate('/user-list');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <ContChild>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="firstName" type='text'/>
            </ContChild>
            <ContChild>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="lastName" type='text'/>
            </ContChild>
            <ContChild>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" type='email'/>
            </ContChild>
            <ContChild>
                <InputLabel>Date of Birth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="dateOfBirth" type='text'/>
            </ContChild>
            <ContChild>
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="mobile"  type='number'/>
            </ContChild>
            {/* <ContChild>
                <InputLabel>Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="status"  type='boolean'/>
            </ContChild> */}
            <ContChild>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="password" type='password'/>
            </ContChild>
            <ContChild>
                <InputLabel>Account Type (Admin / Student)</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="accountType" type='text'/>
            </ContChild>
            <ContChild>
                <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </ContChild>
        </Container>
    );
}

export default AddUser;
