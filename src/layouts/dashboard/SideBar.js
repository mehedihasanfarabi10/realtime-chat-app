
import React, { useState } from 'react'

import {
    Avatar, Box, Divider,
    IconButton, Stack
} from "@mui/material";

import {
    Nav_Buttons,
    Nav_Setting
} from '../../data';

import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSettings from '../../hooks/useSettings';
import AntSwitch from '../../components/AntSwitch';



const getPath = (index) => {
    switch (index) {
      case 0:
        return "/app";
  
      case 1:
        return "/group";
  
      case 2:
        return "/call";
  
      case 3:
        return "/settings";
  
      default:
        break;
    }
  };
  
const UpdateTab = ({ tab }) => ({
    type: "UPDATE_TAB",
    payload: { tab },
});
  

const SideBar = () => {


    const theme = useTheme();
    const dispatch = useDispatch();
    const { tab } = useSelector((state) => state.app);
    const navigate = useNavigate();
    const { settings, onToggleMode } = useSettings();

    const handleChangeTab = (index) => {
        dispatch(UpdateTab({ tab: index }));
        navigate(getPath(index));
    };

    return (
        <Box
            sx={{
                width: 100,
                backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.paper,
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Stack py={3} alignItems={'center'} justifyContent="space-between" sx={{ height: '100%' }}>
                <Stack alignItems={'center'} spacing={4}>
                    <Box
                        sx={{
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,
                            backgroundColor: theme.palette.primary.main,
                            p: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden', // Ensures the image doesn't overflow the Box
                        }}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/10003/10003704.png"
                            alt="icon"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </Box>
                    <Stack sx={{ width: 'max-content' }} direction="column" alignItems={'center'} spacing={3}>
                        {Nav_Buttons.map((el) => (
                            el.index === tab ? (
                                <Box
                                    key={el.index}
                                    sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                                    p={1}
                                >
                                    <IconButton
                                        onClick={() => handleChangeTab(el.index)}
                                        sx={{ width: 'max-content', color: '#ffffff' }}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ) : (
                                <IconButton
                                    key={el.index}
                                    onClick={() => handleChangeTab(el.index)}
                                    sx={{
                                        width: 'max-content',
                                        color: theme.palette.mode === 'light' ? '#080707' : theme.palette.text.primary,
                                    }}
                                >
                                    {el.icon}
                                </IconButton>
                            )
                        ))}
                        <Divider sx={{ width: 48 }} />
                        <Stack spacing={2}>
                            <AntSwitch defaultChecked={settings.themeMode === 'dark'} onChange={onToggleMode} />
                        </Stack>
                        {Nav_Setting.map((el) => (
                            el.index === tab ? (
                                <Box
                                    key={el.index}
                                    sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                                    p={1}
                                >
                                    <IconButton
                                        onClick={() => handleChangeTab(el.index)}
                                        sx={{ width: 'max-content', color: '#ffffff' }}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ) : (
                                <IconButton
                                    key={el.index}
                                    onClick={() => handleChangeTab(el.index)}
                                    sx={{
                                        width: 'max-content',
                                        color: theme.palette.mode === 'light' ? '#080707' : theme.palette.text.primary,
                                    }}
                                >
                                    {el.icon}
                                </IconButton>
                            )
                        ))}
                        <Avatar src={faker.image.avatar()} />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SideBar