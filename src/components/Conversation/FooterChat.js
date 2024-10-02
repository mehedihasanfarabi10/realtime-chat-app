import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Box, IconButton, InputAdornment } from '@mui/material';
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';
import Picker from '@emoji-mart/react';
import emojiData from '@emoji-mart/data';
import StyledTextField from '../StyledTextField';

const ChatEmojiInput = ({ onEmojiClick }) => {
    return (
        <StyledTextField
            fullWidth
            placeholder="Write a message..."
            variant="filled"
            InputProps={{
                disableUnderline: true,
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <LinkSimple />
                        </IconButton>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={onEmojiClick}>
                            <Smiley />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

const FooterChat = () => {
    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);

    const handleEmojiClick = () => {
        setOpenPicker(!openPicker);
    };

    return (
        <Stack direction="row" alignItems="center" spacing={3}>
            <Box
                p={2}
                sx={{
                    height: '10vh',
                    width: '100%',
                    backgroundColor: theme.palette.mode === 'light' ? '#c8f7fa' : theme.palette.background.default,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Stack sx={{ width: "100%" }}>
                    {openPicker && (
                        <Box
                            sx={{
                                zIndex: 10,
                                position: 'fixed',
                                bottom: 81,
                                right: 100,
                            }}
                        >
                            <Picker
                                theme={theme.palette.mode}
                                data={emojiData}
                                onEmojiSelect={(emoji) => console.log(emoji)}
                            />
                        </Box>
                    )}
                    <ChatEmojiInput onEmojiClick={handleEmojiClick} />
                </Stack>

                <Box
                    sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main }}
                    borderRadius={2}
                >
                    <Stack
                        sx={{ height: '100%', width: '100%' }}
                        alignItems="center"
                        justifyContent="center"
                        spacing={3}
                    >
                        <IconButton>
                            <PaperPlaneTilt color="#fff" />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    );
};

export default FooterChat;
