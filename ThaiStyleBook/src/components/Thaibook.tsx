import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { CheckBox, Margin } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';


interface meritItem {
  id: string;
  text: string;
  hours: number;
  approve: boolean
}

const Thaibook = () => {
  const [meritItems, setMeritItems] = useState<meritItem[]>([]);
  const [newMerit, setMerit] = useState('');
  const [hour, sethour] = useState(Number())

  const addMerit = () => {
    if (newMerit !== '' && hour !== 0) {
      const newId = crypto.randomUUID()
      const newmeritItem: meritItem = {
        id: newId,
        text: newMerit,
        hours: hour,
        approve: false

      };
      setMeritItems([...meritItems, newmeritItem])
      setMerit('')
      sethour(0)
    };
  }
  const toggleApproveMerit = (id: string) => {
    const updateMeritItem = meritItems.map((meritItem) => {
      if (meritItem.id === id) {
        return { ...meritItem, approve: !meritItem.approve };
      }
      return meritItem;
    }
    );
    setMeritItems(updateMeritItem)
  }





  return (
    <>
      <React.Fragment>
        <Container maxWidth="sm" >
          <Box textAlign='center'>
            <Grid container spacing={10} >
              <Grid item >
                <TextField id='Outlined-basic' label='ความดีวันนี้' variant='outlined' value={newMerit} onChange={(e) => setMerit(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField id='Outlined-basic' label='จำนวนชั่วโมง' type='number' variant='outlined' value={hour} onChange={(e) => sethour(e.target.valueAsNumber)} />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <br />
        <Container maxWidth="sm" >
          <Grid container spacing={2} >
            <Grid item xs={4} >

            </Grid>
            <Grid item xs={4}>
              <Box textAlign='center'>
                <Button variant="contained" onClick={addMerit} >Add</Button>
              </Box>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>

        </Container>
        <br />

        <Container maxWidth="sm" >
          <Grid container spacing={2} >
            <Grid item xs={2} >

            </Grid>
            <Grid item >
              <Typography variant="h3" gutterBottom>
                สมุดบันทึกความดี
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Container>
        <br />
        <Container maxWidth="md" >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ความดีที่ทำ</TableCell>
                  <TableCell align="right">จำนวนชั่วโมง</TableCell>
                  <TableCell align="right">Approved</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {meritItems.map((meritItem) =>
                  <TableRow key={meritItem.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  > <TableCell component="th" scope="row">{meritItem.text}</TableCell>
                  <TableCell align="right">{meritItem.hours}</TableCell>
                  <TableCell align="right"> <input type='checkbox' onClick={() => toggleApproveMerit}></input></TableCell>
                  </TableRow>)}
        </TableBody>
            </Table>
          </TableContainer>
        </Container>

      </React.Fragment>


      
    </>
  )
}

export default Thaibook
