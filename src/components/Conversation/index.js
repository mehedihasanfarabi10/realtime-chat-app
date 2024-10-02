
import {
    Box,
    Stack
} from '@mui/material'

import React from 'react'
import Header from './Header';
import Message from './Message';
import FooterChat from './FooterChat';


const Conversation = () => {

    return (
        <Stack height={"100vh"}
            maxHeight={"100vh"}
            width={'auto'}>

            {/* Chat Header */}

            <Header/>

            {/* Msg */}

            <Box width="100%" sx={{flexGrow:1,height:"100%",
                overflowY:"scroll"
            }}>
            <Message/>
            </Box>


            {/* Chat Send Message */}

            <FooterChat/>


        </Stack>
    )
}

export default Conversation