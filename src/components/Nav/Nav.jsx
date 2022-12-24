import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PhoneIcon from '@mui/icons-material/Phone';
import ParkIcon from '@mui/icons-material/Park';
import HomeIcon from '@mui/icons-material/Home';

export default function Nav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const linkNav = [
    {
      nameLink:'Home',
      hrefLink: '/'
    },
    {
      nameLink:'Prezenty',
      hrefLink: '/presents'
    },
    {
      nameLink:'Kontakt',
      hrefLink: '/contacts'
    },

  ]

  const style ={
    burger: {cursor: 'pointer', fontSize: '3rem', color: '#2b6e6c'}, 
    link: {textDecoration: 'none', color: '#2b6e6c'}
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {linkNav.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link to={text.hrefLink} style={style.link}>
            <ListItemButton>
              <ListItemIcon style={style.burger}>
                {index === 0 ? <HomeIcon /> : index === 1 ? <CardGiftcardIcon /> : index === 2 ? <PhoneIcon />  : <ParkIcon />}
              </ListItemIcon>
              <ListItemText primary={text.nameLink} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
         {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon style={style.burger} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
