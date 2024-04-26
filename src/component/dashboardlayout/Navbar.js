import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import PagesIndex from '../../common/PagesIndex';
import Index from '../../common/Index';
import { Link } from 'react-router-dom';


const Navbar = () => {
 

  return (
 <>
    <AppBar position="static" sx={{background:"black"}}>
      <Toolbar>
        <Typography variant="h6" >
          Team Career Camp
        </Typography>
      </Toolbar>
    </AppBar>
    <Index.Box className='d-flex'>
      <Link className='text-decoration link-text' to='/dashboard/studentlist'>Student List</Link>
      <Link className='text-decoration link-text' to='/dashboard/interview/list'>Interview List</Link>
      {/* <Link className='text-decoration link-text' to='/interview/list'>Results</Link> */}
    </Index.Box>
    <PagesIndex.Outlet/>
   
    </>
  );
};

export default Navbar;
