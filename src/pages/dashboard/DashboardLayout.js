import React, { useState } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { Avatar, Box, Divider, IconButton, Stack,Switch } from "@mui/material";

import SideBar from '../../layouts/dashboard/SideBar';


const DashboardLayout = () => {


  return (
    <Stack direction={'row'}>
      <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* SideBar.js code here */}
      <SideBar/>



      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
    </Stack>
  );
};

export default DashboardLayout