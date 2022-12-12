import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography,Box } from '@mui/material';

function RandomQuotes() {



  
  const [datas,setDatas]=useState([]);
 


  const min = 1;
  const max = 10;
  const rand =  min + Math.floor(Math.random() * (max-min));

 
  function fetchData(){
    return fetch(`https://jsonplaceholder.typicode.com/users/${rand}/`)
    .then(res=> res.json())
    .then(data=>{
      setDatas(data);
      
    })
    
    
  }
  useEffect(()=>{
    fetchData();
   
  },[]); 

  function refreshPage() {
    window.location.reload(false);
  }

 
  
  return (
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>
    
    
    
        <Typography variant="h3"> Random Data</Typography>

        
          

        <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
> 
     <TableContainer component={Paper}>
      <TableRow key={datas.id}>
        <TableCell>ID: {datas.id}</TableCell>
        <TableCell>Name: {datas.name}</TableCell>
        <TableCell>Email: {datas.email}</TableCell>
        </TableRow>         
        </TableContainer>
     <Link to="/quotes"><Button variant="text">Go back</Button></Link>
     <Button variant="text" onClick={refreshPage}> Get a New Random Data</Button>
    </Box>    
     </Grid>
     
  )
}

export default RandomQuotes;
