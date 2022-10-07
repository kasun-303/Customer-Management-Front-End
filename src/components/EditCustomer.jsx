import { useState,useEffect  } from "react";

import { FormControl, FormGroup, InputLabel,Input,Typography,Button,styled } from "@mui/material";

import { useNavigate,useParams } from "react-router-dom";

import { getCustomer ,editCustomer} from "../service/api";


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

const EditCustomer =  ()=>{

    const [customer, setCustomer] = useState(initialValues);
    const  navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
    getCustomerData();
    }, [])

    const getCustomerData = async() =>{
    let response =  await getCustomer(id);  
    setCustomer(response.data);
    }


    const onValueChange  =(e)=>{
        console.log(e.target.name,e.target.value);
        setCustomer({ ...customer,[e.target.name]:e.target.value})
    }

    const addCustomerDetails = async () => {
        await editCustomer(customer,id);
        navigate('/all');
    }

return(
   <Container>
    <Typography variant="h4">Edit Customer</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={customer.name}/>
    </FormControl>

    <FormControl>
        <InputLabel>Date of Birth</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="dateOfBirth" value={customer.dateOfBirth} />
    </FormControl>

    <FormControl>
        <InputLabel>Nic Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="nicNumber" value={customer.nicNumber}/>
    </FormControl>

    <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phoneNumber" value={customer.phoneNumber}/>
    </FormControl>

    <FormControl>
        <InputLabel>address Line1</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="addressLine1" value={customer.addressLine1}/>
    </FormControl>

    <FormControl>
        <InputLabel>address Line2</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="addressLine2" value={customer.addressLine2}/>
    </FormControl>

    <FormControl>
        <InputLabel>City</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="city" value={customer.city}/>
    </FormControl>

    <FormControl>
        <InputLabel>Country</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="country" value={customer.country}/>
    </FormControl>

    <FormControl>
    <Button onClick={()=>addCustomerDetails()} variant="contained">Edit Customer</Button>
    </FormControl>
   </Container>
)
}

export default EditCustomer;