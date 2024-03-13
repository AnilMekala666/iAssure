import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from '../pages/Home';
import Assessment from '../pages/Assessment';
import { useState } from 'react';
import AssessmentDetails from '../pages/AssessmentDetails';
import Schedule from '../pages/Schedule';
import AssessmentsReport from '../pages/AssessmentsReport';
import HomeIcon from '../assets/images/HomeIcon.png';
import Notification from '../assets/images/Notification.png';
import Assessments from '../assets/images/Assessment.png';
import Schedules from '../assets/images/Schedule.png';
import Training from '../assets/images/Training.png';
import Incidents from '../assets/images/Incident.png';
import Stocks from '../assets/images/Stock.png';
import Attendance from '../assets/images/Attendance.png';

 

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const ContentMap = {
  'Home': <Home />,
  // 'Notification': <Notification />,
  'Assessment': <Assessment />,
  'Schedule': <Schedule />,
  'AssessmentDetails': <AssessmentDetails/>
};

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedItem, setSelectedItem] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
         
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div className=''>
      <Drawer variant="permanent" open={open}>
      <Header>
        <IconButton onClick={handleToggleDrawer} className='sidebar-arrow'>
          {open ? (theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />) : <ChevronRightIcon />}
        </IconButton>
      </Header>
        <Divider />
        <List>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
            
          >
           
          </IconButton>
          {['Home', 'Notification', 'Assessment', 'Schedule','Training','Incidents','Stocks','Attendance'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}
            
            onClick={() => handleListItemClick(text)}
            
            selected={selectedItem === text}
            >
              <ListItemButton
              onClick={handleDrawerOpen}
             
                className='side-menubar-text'
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text === 'Home' ? <img src={HomeIcon} alt="HomeIcon" />: 
                  text === 'Notification' ? <img src={Notification} alt="Notification" />: 
                  text === 'Assessment' ? <img src={Assessments} alt="Assessment" /> : 
                  text === 'Schedule' ? <img src={Schedules} alt="Schedule" />:
                  text === 'Training' ? <img src={Training} alt="Training" />:
                  text === 'Incidents' ? <img src={Incidents} alt="Incidents" />:
                  text === 'Stocks' ? <img src={Stocks} alt="Stocks" />:
                  text === 'Attendance' ? <img src={Attendance} alt="Attendance" />: ''
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <List>
            <ListItem
              button
              onClick={handleDrawerOpen}
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  bgcolor: '#A9ECFF', // Background color on hover
                },
                ...(selectedItem === 'Home' && { bgcolor: 'grey.300' }), // Background color when active
              }}
            >
            </ListItem>
            {['Home', 'Assessment'].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => handleListItemClick(text)}
                disablePadding
                selected={selectedItem === text}
              >
                <ListItemIcon>
                  {text === 'Home' ? <InboxIcon /> : text === 'Assessment' ? <MailIcon /> : ''}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
      </Drawer>
      </div>
      
      <Box component="main" sx={{ flexGrow: 1, }}>
        
        <Header />
        {ContentMap[selectedItem]}
      </Box>
    </Box>
  );
}
