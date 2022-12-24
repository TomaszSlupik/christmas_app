import React, { useState } from 'react'
import './Presents.scss'
import { ThemeProvider, createTheme} from '@mui/material/styles';
import Data from '../../data/data.json'
import Present from '../Present/Present';

export default function Presents() {

    const [presents, setPresents] = useState(Data)

    
const theme = createTheme({
    palette: {
        primary: {
            main: '#2b6e6c'
        }
    },
});


  return (
    <div>
        <ThemeProvider theme={theme} >
        <div className="listofpresents">
            <div  className="listofpresents__header">Lista prezentów</div>
            <div className="listofpresents__table">
          
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Prezent</th>
                        <th scope="col">Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            presents.map((el, index) => 
                                <Present key={index} present={el} />
                            )
                        }
                    </tbody>
                    </table>
     
            </div>
        </div>
        </ThemeProvider>
    </div>
  )
}
