
import { faker } from '@faker-js/faker';
import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha, styled } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { ChatList } from '../../data';
import { SimpleBarStyle } from './Scrollbar';
import { useTheme } from '@emotion/react';




const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

//Chat Element Component New

const ChatElement = ({id,name,img,time,unread,msg,online}) =>{
  
  const theme = useTheme();
  
  return(
    
      <Box direction="column"
      sx={{width:"90%",
      height:60,
      borderRadius:1,
      backgroundColor:theme.palette.mode==="light"?'#fff':theme.palette.background.paper,}}
      p={2}>

        <Stack direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Stack 
            direction={"row"} alignItems="center"
              spacing={2}>
                {/* Logic if online then status */}
                {online ?  <StyledBadge overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot" >
            <Avatar src={faker.image.avatar()}/>
          </StyledBadge>: <Avatar src={faker.image.avatar()}/>}
         
          <Stack spacing={0.3}>
              <Typography variant='subtitle2'>
                {name}</Typography>
              <Typography variant='caption'>
               {msg}</Typography>
          </Stack>

          {/* //Time Stack   */}
          <Stack spacing={2}
          alignItems="center"
          position={"relative"}
          justifyContent="flex-end">

            <Typography sx={
              {fontWeight:600,
                
              }
            } variant='caption'>
              {time}
            </Typography>

            <Badge color='primary' badgeContent={unread}>

            </Badge>

          </Stack>

          </Stack>
        </Stack>

     
    </Box>
  )
}

//Old ChatElement
// const ChatElement = () =>{
//   return(
    
//       <Box direction="column"
//       sx={{width:"90%",
//       height:50,
//       borderRadius:1,
//       backgroundColor:"#fff"}}
//       p={2}>

//         <Stack direction="row"
//           alignItems={"center"}
//           justifyContent={"space-between"}>
//           <Stack 
//             direction={"row"} alignItems="center"
//               spacing={2}>
//           <StyledBadge overlap="circular"
//               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//               variant="dot" >
//             <Avatar src={faker.image.avatar()}/>
//           </StyledBadge>
//           <Stack spacing={0.3}>
//               <Typography variant='subtitle2'>
//                 Mehedi Hasan</Typography>
//               <Typography variant='caption'>
//                 How are you ?</Typography>
//           </Stack>

//           {/* //Time Stack   */}
//           <Stack spacing={2}
//           alignItems="center"
//           position={"relative"}
//           justifyContent="flex-end">

//             <Typography sx={
//               {fontWeight:600,
                
//               }
//             } variant='caption'>
//               10:00
//             </Typography>

//             <Badge color='primary' badgeContent={2}>

//             </Badge>

//           </Stack>

//           </Stack>
//         </Stack>

     
//     </Box>
//   )
// }


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Chats = () => {

  const theme = useTheme();



  return (
    <Box
        sx={{
            position:"relative",
           
            width:320,
            backgroundColor:theme.palette.mode==="light"?'#F8FAFF':theme.palette.background.paper,
            boxShadow:"0 ,0,0, 0.25",

        }}>

        <Stack p={4} spacing={3} sx={{height:"100vh"}}>
            <Stack direction="row"
              	alignItems={"center"}
                  justifyContent={"space-between"}>
                <Typography variant='h5'>
                    Chats 
                </Typography>

                <IconButton>
                  <CircleDashed/>
                </IconButton>
              
            </Stack>
            <Stack sx={{width:"100%"}}>
                <Search sx={{backgroundColor:'#ff3'}}>
                  <SearchIconWrapper>
                    <MagnifyingGlass color='#709CE6'/>
                  </SearchIconWrapper>
                  <StyledInputBase sx={{border:"#709CE6"}} placeholder='Search'/>
                </Search>
              </Stack>
              <Stack>
                <Stack direction="row" alignItems={"center"}
                  spacing={1.5}>
                    <ArchiveBox/>
                    <Button >Archived</Button>
                </Stack>
                <Divider/>
              </Stack>
              <Stack spacing={3} direction="column" sx={{flexGrow:1,overflow:"scroll",
                    height:"100%"
                }}  >
                {/* 1 */}

                <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4} 
               >
                  <Typography sx={{
                    color:"#676767",
                    fontWeight:600}} variant='subtitle2'>
                    Pinned</Typography>
                    {/* Render All ChatList from data */}
                    {ChatList.filter((el)=>el.pinned).map((el)=>{
                      // passing ChatList element by props
                      return <ChatElement {...el}/>
                    })}
                    
                </Stack>
                {/* 2 */}
                <Stack spacing={2.4}>
                  <Typography sx={{
                    color:"#676767",
                    fontWeight:600}} variant='subtitle2'>
                    All Chats</Typography>
                    {/* Render All ChatList from data */}
                    {ChatList.filter((el)=> !el.pinned).map((el)=>{
                      // passing ChatList element by props
                      return <ChatElement {...el}/>
                    })}
                    
                </Stack>
                </SimpleBarStyle>
             
              </Stack>

             
        </Stack>

    </Box>
  )
}

export default Chats