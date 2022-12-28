import React, { useContext, useState} from 'react'
import './Present.scss'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThemeContext from '../../context/themeContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Present({present, listpresent, setPresents}) {

  const [edidproduct, setEditProduct] = useState(present.product)
  const [edidprice, setEditPrice] = useState(present.price)

  const changeFirst = (e) => {
    setEditProduct (e.target.value)
  }
  
  const changeSecond = (e) => {
    setEditPrice(e.target.value) 
  }

  const editProducttoList = (id) => {
    const copyeditpresent = [...listpresent]
    const editnewproduct  = {
      id: id,
      product: edidproduct, 
      price: edidprice
    }
    setPresents(copyeditpresent.map(el => el.id === id ? editnewproduct : el))
  }
  

  const [open, setOpen] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (id) => {
    editProducttoList(id)
    setOpen(false);
  };

const theme = useContext (ThemeContext)

const style = {
  item: {cursor: 'pointer'}
}

const deleteItemWithList = (id) => {
  const copypresent = [...listpresent]
  const editallpresent = copypresent.filter(el => el.id !== id)
  setPresents(editallpresent)
}




  return (
        <>
            <tr>
             <th scope="row" className='rowOne'>{present.id}</th>
            <td className='rowTwo'>{present.product}
            
            </td>
            <td className='rowThree'>{present.price} zł</td>
            <td><EditIcon 
            onClick={handleClickOpen}
            className={`text-${theme.warning}`} style={style.item}/>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Czy na pewno chcesz wprowadzić zmiany?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                  <TextField 
                  onChange={changeFirst}
                  id="standard-basic" label="Prezent" variant="standard" />
                  <TextField
                          onChange={changeSecond}
                          label="Cena prezentu"
                          id="standard-start-adornment"
                          sx={{width: '25ch' }}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">zł</InputAdornment>,
                          }}
                          variant="standard"
                  />

                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Powrót</Button>
                  <Button 
                  variant="contained" 
                  onClick={() => handleClose(present.id)}>Akceptuję</Button>
                </DialogActions>
              </Dialog>
            </td>
            <td>
            <DeleteIcon 
            onClick={() => deleteItemWithList(present.id)}
            className={`text-${theme.danger}`} style={style.item}/>
            </td>
            </tr>

        </>
           
  )
}
