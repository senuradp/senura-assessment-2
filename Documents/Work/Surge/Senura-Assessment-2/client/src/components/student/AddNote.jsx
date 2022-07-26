import {useState} from 'react';
import {styled, FormGroup, FormControl, InputLabel , Input, Typography, Button} from "@mui/material";
import { addNotes } from '../../service/api';
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
    mobile: '',
    password: '',
    accountType: ''
}



const AddNote = () => {

    const [user, setUser] = useState({defValue});

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        // console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
        // console.log(user);
    }

    const addStdNote = async () => {
        await addNotes(user);  
        navigate('/user-list');
    }

    return (
        <Container>
            <Typography variant="h4">Add Note</Typography>
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
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="mobile"  type='number'/>
            </ContChild>
            <ContChild>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="password" type='password'/>
            </ContChild>
            <ContChild>
                <InputLabel>Account Type (Admin / Student)</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="accountType" type='text'/>
            </ContChild>
            <ContChild>
                <Button variant="contained" onClick={() => addStdNote()}>Add User</Button>
            </ContChild>
        </Container>
    );
}

export default AddNote;
