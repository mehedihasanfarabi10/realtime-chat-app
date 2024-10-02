import React from 'react'
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker'
import {
    Stack, Box, Avatar, styled,
    Badge, Typography, IconButton,
    Divider, TextField,
    InputAdornment
} from '@mui/material'
import {
    CaretDown,
    LinkSimple,
    MagnifyingGlass,
    PaperPlaneTilt,
    Phone, Smiley, VideoCamera
} from 'phosphor-react';
import { Chat_History } from '../../data';
import { DocType, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes';


const Message = () => {

    const theme = useTheme();


    return (

        <Box
            p={3}
            sx={{
                flexGrow: 1,
                backgroundColor: theme.palette.mode === 'light' ? "#fff" : theme.palette.background.default,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25"
            }}
        >

            <Stack spacing={3}>

                {Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            //TimeLine
                            return <TimeLine el={el} />
                        case "msg":
                            switch (el.subtype) {
                                case 'img':
                                    return <MediaMsg el={el}/>

                                   
                                case 'doc':
                                    return <DocType el={el}/>
                                case 'link':
                                    return <LinkMsg el={el}/>

                                case 'reply':
                                    return <ReplyMsg el={el}/>

                                default:
                                    return <TextMsg el={el}/>
                            }

                            break;

                        default:
                            return <>
                            </>
                    }
                })}

            </Stack>

        </Box>
    )
}

export default Message