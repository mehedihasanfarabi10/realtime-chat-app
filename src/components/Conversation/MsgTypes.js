import {
    Box, Divider, IconButton, Link, Stack, Typography,
    useTheme
} from '@mui/material'
import { DownloadSimple, Image } from 'phosphor-react';
import React from 'react'


const DocType = ({ el }) => {
    const theme = useTheme();

    return (
        <Stack direction={'row'}
            justifyContent={el.incoming ? 'start' : "end"

            }>

            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.default,
                    borderRadius: 1.5,//1.5 * 8 = 12px
                    width: 'max-content',
                    justifyContent: "start"

                }

                }>

                <Stack spacing={2}>
                    <Stack p={2}
                        spacing={3} direction="row"
                        alignItems="center"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }} >

                        <Image  size={48} />
                        <Typography variant='caption'>
                            New.pdf
                        </Typography>

                        <IconButton>
                            <DownloadSimple/>
                        </IconButton>

                    </Stack>

                    <Typography variant='body2'
                    sx={{color:el.incoming ? theme.palette.text : "#fff"}} >
                        {el.message}
                    </Typography>

                </Stack>


            </Box>
        </Stack>
    )
}


const LinkMsg = ({ el }) => {
    const theme = useTheme();

    return (
        <Stack direction={'row'}
            justifyContent={el.incoming ? 'start' : "end"

            }>

            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.default,
                    borderRadius: 1.5,//1.5 * 8 = 12px
                    width: 'max-content',
                    justifyContent: "start"

                }

                }>

                <Stack spacing={2}>
                    <Stack p={2} spacing={3} alignItems="center"
                        sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                        <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                        <Stack spacing={2}>
                            <Typography variant='subtitle2'>
                                Creating Chat App
                            </Typography>
                            <Typography
                                sx={{ color: theme.palette.primary.main }}
                                variant='subtitle2' component={Link}
                                to="//https://www.facebook.com" >
                                www.facebook.com
                            </Typography>
                        </Stack>

                        <Typography color={el.incoming ? theme.palette.text : "#fff"} variant='body2'>
                            {el.message}

                        </Typography>

                    </Stack>
                </Stack>



            </Box>



        </Stack>
    )
}

const ReplyMsg = ({ el }) => {
    const theme = useTheme();

    return (
        <Stack direction={'row'}
            justifyContent={el.incoming ? 'start' : "end"

            }>

            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.default,
                    borderRadius: 1.5,//1.5 * 8 = 12px
                    width: 'max-content',

                }

                }>

                <Stack spacing={2}>

                    <Stack p={2} direction={'column'}
                        spacing={3}
                        sx={{
                            backgroundColor: theme.palette.primary.main
                            , borderRadius: 1
                        }}

                        alignItems={'center'}>

                        <Typography
                            variant='body2'
                            color={theme.palette.text}
                        >
                            {el.message}
                        </Typography>
                    </Stack>

                    <Typography variant='body2'
                        color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.reply}
                    </Typography>

                </Stack>





            </Box>



        </Stack>
    )
}



const MediaMsg = ({ el }) => {
    const theme = useTheme();

    return (
        <Stack direction={'row'}
            justifyContent={el.incoming ? 'start' : "end"

            }>

            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.default,
                    borderRadius: 1.5,//1.5 * 8 = 12px
                    width: 'max-content',

                }

                }>

                <Stack spacing={1}>
                    <img src={el.img} alt={el.message}
                        style={{
                            maxHeight: 210,
                            borderRadius: "10px"
                        }} />
                    <Typography
                        variant='body2'
                        color={el.incoming ? theme.palette.text : "#fff"}
                    >
                        {el.message}
                    </Typography>
                </Stack>



            </Box>



        </Stack>
    )
}



const TextMsg = ({ el }) => {

    const theme = useTheme();

    return (
        <Stack direction={'row'}
            justifyContent={el.incoming ? 'start' : "end"

            }>
            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.primary.main
                        : theme.palette.primary.default,
                    borderRadius: 1.5,//1.5 * 8 = 12px
                    width: 'max-content',

                }

                }>

                <Typography variant='body2'
                    color={el.incoming ? theme.palette.text : "#fff"}>
                    {el.message}
                </Typography>

            </Box>

        </Stack>
    )
}

const TimeLine = ({ el }) => {

    const theme = useTheme();

    return (
        <Stack direction={'row'} alignItems={'center'}
            justifyContent={'space-between'}>

            <Divider width="48%" />
            <Typography variant='caption'
                sx={{ color: theme.palette.text }}>
                {el.text}
            </Typography>

            <Divider width="48%" />

        </Stack>
    )
}

export {
    TimeLine,
    TextMsg,
    MediaMsg,
    ReplyMsg,
    LinkMsg,
    DocType
}