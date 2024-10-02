import React, { Suspense, lazy } from 'react'
import Chats from './Chats'
import { Box, Stack } from '@mui/material'
import Conversation from '../../components/Conversation'
import { useTheme } from '@emotion/react'

//dynamic import => for loading animation in refreshes

const Cat = lazy(() => import("../../components/Cat"))

const GeneralApp = () => {

  const theme = useTheme()

  return (

    <Stack direction={"row"}
      sx={{ width: "100%" }}>



      {/* Chats */}


      <Chats />




      {/*  Conversation */}

      <Box sx={{ height: "100vh", 
      width: "100%", 
      backgroundColor:theme.palette.mode === 'light' ? "#F0F4FA" : theme.palette.background.default }}>
        <Conversation />
      </Box>



    </Stack>

  )
}

export default GeneralApp