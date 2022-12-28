import React from 'react'
import './Main.scss'
import Paper from '@mui/material/Paper';
import Carousel from '../Carousel/Carousel';
import TextandImage from '../TextandImage/TextandImage';



export default function Main() {


  const style = {
    paper: {
      position: 'relative',
      width: '80%'
    }
  }

  return (
    <div>
        <main className='main'>
                <Paper elevation={3} style={style.paper}>
                <div className="main__header">
                    Strona w której wykorzystana została metoda CRUD. W apikacji możemy dodawać, edytować i usuwać produkty. Możemy również sortować poszczególne prezenty po różnych wariantach. 
                </div>
                </Paper>  
        </main>
        <Carousel />
        <TextandImage />
    </div>
  )
}
