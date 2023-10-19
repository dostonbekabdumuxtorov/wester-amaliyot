import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import './Kirish.css'
import logowester from './../../assets/wester-yangi.png'
import { NavLink } from 'react-router-dom'



export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="kirish" >
      <div >
        <div className='divkirish' >
          <NavLink to={'/'}>
            <img className='imgkirish' src={logowester} alt="" />

          </NavLink>
          <div className='navbarkirish'>
            <NavLink className={"navlink"} to='/Royhat'>Kirish</NavLink>
            <NavLink className={"navlinks"} to='/Kurslar'>Kurslar</NavLink>
            <NavLink className={"navlinks"} to='/Bloglar'>Bloglar</NavLink>
          </div>

          <Button className='kirishbutton'
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <DehazeIcon />

          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Kurslar</MenuItem>
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Ma'lumotlar</MenuItem>
            <MenuItem onClick={handleClose}>Ommabop kurslar</MenuItem>
            <MenuItem onClick={handleClose}>Bizning loyihalar</MenuItem>
          </Menu>

        </div>


      </div>
    </div>
  );
}