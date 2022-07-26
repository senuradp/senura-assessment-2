import {useState} from 'react';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { logUser } from '../service/api';
import {styled, FormGroup, FormControl, InputLabel , Input, Typography, Button} from "@mui/material";

const Container = styled(FormGroup)`
    width : 50%;
    margin : 5% auto 0 auto;
`;

const ContChild = styled(FormControl)`
    margin-top : 20px;
`;

const defValue = {
    email: '',
    password: ''
  }



const Login = () => {


    const [user, setUser] = useState({defValue});

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        // console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
        // console.log(user);
    }

    const logUserBtn = async () => {
        let data = await logUser(user);  

        if(!data.data.error){
          console.info(data);
          localStorage.setItem('TOKEN', data.data.token);
          localStorage.setItem('USER_TYPE', data.data.user.accountType);
          navigate('/user-list');
          refreshPg();
        }else{
          alert(data.data.error);
        }
     
    }

    function refreshPg() { window. location. reload(false); }

    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <ContChild>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" type='email'/>
            </ContChild>
            <ContChild>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="password" type='password'/>
            </ContChild>
            <ContChild>
                <Button variant="contained" onClick={() => logUserBtn()}>Login</Button>
            </ContChild>
        </Container>
    );
}
export default Login;
