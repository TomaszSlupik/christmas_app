import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import './Addpresent.scss'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

export default function Addpresent({presents, setPresents}) {

  const [newPresent, setNewPresent] = useState()
  const [newPrice, setNewPrice] = useState()
  const [uid, setNewUid] = useState (5)

    const style = { 
        btn: {
            position: 'absolute', bottom: '2%', right: '2%'
        }
    }

    const newuid = () => {
      setNewUid(uid + 1)
    }

    const [open, setOpen] = React.useState(false);
    const [alertAddProduct, setAlertAddProduct] = useState(false)


    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleCloseButton = () => {
      setOpen(false);
    }

    const handleClose = () => {
      setOpen(false);
      const newProduct = {
        id: uid, 
        product: newPresent, 
        price: newPrice
      }

      const allproducts = [
        ...presents, newProduct
      ]
      setPresents(allproducts)
      setAlertAddProduct(true)
      newuid()
    };

    const firstAdd = (e) => {
      setNewPresent(e.target.value)
    }

    const secondAdd = (e) => {
      setNewPrice(e.target.value)
    }



  return (
    <div>
        <div className="addProduct">
            <div className="addProduct__header">
              Przeglądaj swoją listę prezentów. Możesz również dodawać nowe, edytować oraz usuwać z listy. 
            </div>
            <div className="addProduct__img">
                <div className='btn'>
                    <Button 
                    style={style.btn}
                    variant="contained" onClick={handleClickOpen}>
                    Dodaj prezent
                    </Button>
                    <BootstrapDialog
                    onClose={handleCloseButton}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseButton}>
                        Nowy prezent
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                        <TextField 
                        onChange={firstAdd}
                        id="standard-basic" label="Prezent" variant="standard" />
                        </Typography>
                        <Typography gutterBottom>
                        <TextField
                          onChange={secondAdd}
                          label="Cena prezentu"
                          id="standard-start-adornment"
                          sx={{width: '25ch' }}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">zł</InputAdornment>,
                          }}
                          variant="standard"
                        />
                        </Typography>
                        <Typography gutterBottom>
                        Podaj nazwę prezentu oraz cenę. Prezent zostanie dodany do listy. Zawsze możesz go usunąć lub edytować. 
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        
                        <Button 
                        variant="contained" 
                        autoFocus onClick={handleClose}>
                        Dodaj
                        </Button>
                    </DialogActions>
                    </BootstrapDialog>
                </div>       
            </div>       
        </div>
                    <Box sx={{ width: '100%' }}>
                      <Collapse in={alertAddProduct}>
                        <Alert
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setAlertAddProduct(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                          sx={{ mb: 2 }}
                        >
                          Prezent został dodany do listy. 
                        </Alert>
                      </Collapse>
                    </Box>
    </div>
  )
}
