import React, { useState} from 'react'
import './Presents.scss'
import { ThemeProvider, createTheme} from '@mui/material/styles';
import Data from '../../data/data.json'
import Present from '../Present/Present';
import Addpresent from '../Addpresent/Addpresent';
import Sortpresents from '../Sortpresents/Sortpresents';

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
        <Addpresent presents={presents} setPresents={setPresents}/>
        
        <div className="listofpresents">
            <div  className="listofpresents__header">Lista prezentów</div>
            <div className="listofpresents__table">
          
                    <table className="table">
                    <thead>
                        <div className='table__sort'>
                           
                                    <Sortpresents listpresent={presents} setPresents={setPresents}/>
                              
                            
                        </div>
                        <tr>
                        <th scope="col" className='table__one'>#</th>
                        <th scope="col" className='table__two'>Prezent</th>
                        <th scope="col" className='table__three'>Cena</th>
                        <th scope="col" className='table__three'>Edytuj</th>
                        <th scope="col" className='table__three'>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            presents.map((el, index) => 
                                <Present key={index} present={el} listpresent={presents} setPresents={setPresents}/>
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
