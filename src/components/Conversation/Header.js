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
import StyledBadge from '../StyleBadge';


const Header = () => {
    const theme = useTheme();


    return (
        <Box sx={{
            //   height: "10vh", 
            width: "98%",

            backgroundColor: theme.palette.mode === 'light' ? "#c8f7fa" : theme.palette.background.default
        }}
            p={2}
        >

            <Stack alignItems='center' direction='row'
                justifyContent="space-between"
                sx={{
                    width: "100%",
                    height: "100%"
                }}>
                <Stack direction={'row'} p={2} spacing={3}>
                    <Box>
                        <StyledBadge overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot" >
                            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                        </StyledBadge>

                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant='subtitle2'>{faker.name.fullName()}</Typography>
                        <Typography variant='caption'>Online</Typography>
                    </Stack>
                </Stack>

                <Stack direction={'row'} alignItems={'center'}
                    spacing={3}>
                    <IconButton>
                        <VideoCamera />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>

                    <Divider orientation='vertical' flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>
                </Stack>

            </Stack>


        </Box>
    )
}

export default Header