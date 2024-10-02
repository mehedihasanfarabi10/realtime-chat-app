
import React from 'react'
import AppRoutes from './routes'
import { ThemeProvider, createTheme } from '@mui/material'
import useSettings from './hooks/useSettings';
import GeneralApp from './pages/dashboard/GeneralApp';

import './App.css'
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  const { settings } = useSettings();

const theme = createTheme({
  palette: {
    mode: settings.themeMode,
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
    background: {
      default: settings.themeMode === 'light' ? '#ffffff' : '#121212', // Customize background color for light and dark modes
      paper: settings.themeMode === 'light' ? '#f0f4fa' : '#424242', // Customize paper background color
    },
    text: {
      primary: settings.themeMode === 'light' ? '#000000' : '#ffffff', // Customize primary text color
      secondary: settings.themeMode === 'light' ? '#666666' : '#bbbbbb', // Customize secondary text color
    },

  }
})

  return (
    <>
    
    <ThemeProvider theme={theme}>

      
      <AppRoutes/>{" "}
     

     
    </ThemeProvider>
    
     
    </>
  )
}

export default App

