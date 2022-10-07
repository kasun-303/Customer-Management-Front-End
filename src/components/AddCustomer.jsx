import { useState } from "react";

import { FormControl, FormGroup, InputLabel,Input,Typography,Button,styled } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { addCustomer } from "../service/api";


const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div{
margin-top:20px;
}
`

const initialValues = {
    name:'',
    dateOfBirth:'',
    nicNumber:'',
    phoneNumber:'',
    addressLine1:'',
    addressLine2:'',
    city:'',
    country:'',
}

const AddCustomer =  ()=>{

    const [customer, setCustomer] = useState(initialValues);
    const  navigate = useNavigate();


    const onValueChange  =(e)=>{
       
        setCustomer({ ...customer,[e.target.name]:e.target.value})
    }

    const addCustomerDetails = async () => {
        await addCustomer(customer);
        navigate('/all');

    }

return(
   <Container>
    <Typography variant="h4">Add Customer</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"/>
    </FormControl>

    <FormControl>
        <InputLabel>Date Of Birth</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="dateOfBirth"/>
    </FormControl>

    <FormControl>
        <InputLabel>nicNumber</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="nicNumber"/>
    </FormControl>

    <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phoneNumber"/>
    </FormControl>

    <FormControl>
        <InputLabel>addressLine1</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="addressLine1"/>
    </FormControl>
    <FormControl>

        <InputLabel>addressLine2</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="addressLine2"/>
    </FormControl>
    <FormControl>
        <InputLabel>city</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="city"/>
    </FormControl>
    <FormControl>
        <InputLabel>country</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="country"/>
    </FormControl>

    <FormControl>
    <Button onClick={()=>addCustomerDetails()} variant="contained">Add Customer</Button>
    </FormControl>
   </Container>
)
}

export default AddCustomer;