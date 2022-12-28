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
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './Sortpresents.scss'


export default function Sortpresents({listpresent, setPresents}) {

    const [open, setOpen] = React.useState(false);


    const handleClick = () => {
      setOpen(true);
    };
  

    const handleClickchangeidZA = () => {
      const sorid_ZA = [...listpresent.sort((a, b) => a.id < b.id ? 1 : -1)]
      setPresents(sorid_ZA)
      setOpen(true);
    };

    const handleClickchangeidAZ = () => {
      const sorid_AZ = [...listpresent.sort((a, b) => a.id < b.id ? -1 : 1)]
      setPresents(sorid_AZ)
      setOpen(true);
    };

    const handleClickchangeproductZA = () => {
      const sortproduct_ZA = [...listpresent.sort((a,b) => a.product < b.product ? 1 : -1)]
      setPresents(sortproduct_ZA)
      setOpen(true);
    }

    const handleClickchangeproductAZ = () => {
      const sortproduct_AZ = [...listpresent.sort((a,b) => a.product < b.product ? -1 : 1)]
      setPresents(sortproduct_AZ)
      setOpen(true);
    }

    const handleClickchangepriceAZ = () => {
      const sortpriceAZ = [...listpresent.sort((a,b) => a.price < b.price ? -1 : 1)]
        setPresents(sortpriceAZ)
    }

    const handleClickchangepriceZA = () => {
      const sortpriceZA = [...listpresent.sort((a, b) => a.price < b.price ? 1 : -1)]
      setPresents(sortpriceZA)
    }

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
        <div className="sort">
            <div className="sort_btn"
            onClick={handleClick}
            >
            Sortuj
            <i className="fa-solid fa-arrow-down-wide-short"></i>
            </div>
            <div className="sort_filter">
              Filtruj
            <FilterAltIcon />
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
                    defaultValue="prezent_az"
                    name="radio-buttons-group"
                >
                    <FormControlLabel 
                    onClick={handleClickchangeidAZ}
                    value="id_az" control={<Radio />} label="Id A-Z" />
                    <FormControlLabel 
                    onClick={handleClickchangeidZA}
                    value="id_za" control={<Radio />} label="Id Z-A" />
                    <FormControlLabel 
                    onClick={handleClickchangeproductAZ}
                    value="prezent_az" control={<Radio />} label="Prezent A-Z" />
                    <FormControlLabel 
                    onClick={handleClickchangeproductZA}
                    value="prezent_za" control={<Radio />} label="Prezent Z-A" />
                    <FormControlLabel 
                    onClick={handleClickchangepriceAZ}
                    value="cena_az" control={<Radio />} label="Cena A-Z" />
                    <FormControlLabel 
                    onClick={handleClickchangepriceZA}
                    value="cena_za" control={<Radio />} label="Cena Z-A" />
                   
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
