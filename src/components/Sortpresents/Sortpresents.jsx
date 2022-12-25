import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Sortpresents() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
        <div className="sort">
            <div className="sort_btn"
            onClick={handleClickOpen}
            >
            Sortuj
            <i class="fa-solid fa-arrow-down-wide-short"></i>
            </div>
                    
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Opcje sortowania"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="prezent"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="id" control={<Radio />} label="Id" />
                    <FormControlLabel value="prezent" control={<Radio />} label="Prezent" />
                    <FormControlLabel value="cena" control={<Radio />} label="Cena" />
                   
                </RadioGroup>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button 
                onClick={handleClose}>Wyjście</Button>
                <Button 
                variant="contained" 
                onClick={handleClose} autoFocus>
                    Sortuj
                </Button>
                </DialogActions>
            </Dialog>
    
        </div>
    </div>
  )
}
