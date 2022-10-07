import { useEffect, useState } from "react";

import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button} from "@mui/material";

import { getCustomers, deleteCustomer } from "../service/api";
import  {Link} from 'react-router-dom'


const styledTable = styled(Table)`
// width:90%;
// margin: 5% auto 0 auto;
`;

const Thead = styled(TableRow)`
background:blue;
& > th{
   color:#fff;
   font-size:20px;
}
`
const AllCustomers = ()=>{

    const [customers, setCustomers] = useState([]);

    useEffect(() =>{
 getCustomersDetails();
    }, [])

    const getCustomersDetails = async () => {
       let response  = await getCustomers();
       console.log(response);
       setCustomers(response.data);
    }

    const deleteCustomerData = async (id) => {
      await deleteCustomer(id);
      getCustomersDetails();
   }

    return(
       <styledTable>
        <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>DateofBirth</TableCell>
                <TableCell>nicNumber</TableCell>
                <TableCell>phoneNumber</TableCell>
                <TableCell>addressLine1</TableCell>
                <TableCell>addressLine2</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Country</TableCell>
                <TableCell></TableCell>
                
            </Thead>
            </TableHead>
            <TableBody>
             {
                customers.map(customer =>(
                    <TableRow>
                     <TableCell>{customer.id}</TableCell>   
                     <TableCell>{customer.name}</TableCell>   
                     <TableCell>{customer.dateOfBirth}</TableCell>   
                     <TableCell>{customer.nicNumber}</TableCell>   
                     <TableCell>{customer.phoneNumber}</TableCell>   
                     <TableCell>{customer.addressLine1}</TableCell>   
                     <TableCell>{customer.addressLine2}</TableCell>   
                     <TableCell>{customer.city}</TableCell>   
                     <TableCell>{customer.country}</TableCell>   
                     <TableCell>
                        <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${customer.id}`}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={()=> deleteCustomerData(customer.id)}>Delete</Button>
                     </TableCell>
                    </TableRow>  
                ))
             }
            </TableBody>

        
       </styledTable>
    )
}

export default AllCustomers;