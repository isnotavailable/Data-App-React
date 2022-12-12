import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Tab } from 'material-ui';
import { Button, Typography } from '@mui/material';

function Quotes() {
  
    
const [datas,setDatas]=useState([]);

    function fetchData(){
        return fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())
.then(data=>{
    setDatas(data);
    
})




    }
    useEffect(()=>{
        fetchData();
    },[]); 

  

    return (
            
            <TableContainer>
                <Table>
                    <TableHead>
        <Typography variant="h3">List of Data</Typography>
        
            {datas && datas.length>0 && datas.map((userObj, index)=>(
                <TableRow key={userObj.index}>
                    <TableCell key={userObj.index} >ID: {userObj.id}</TableCell> 
                    <TableCell key={userObj.index}>Name: {userObj.name}</TableCell> 
                    <TableCell key={userObj.index}>Email: { userObj.email}</TableCell>
                    </TableRow>
            ))}
            </TableHead>
            </Table>
     <Link to="/random-quotes"><Button variant="text">Get Random Data</Button></Link>
        </TableContainer>
     
  );
}

export default Quotes;
