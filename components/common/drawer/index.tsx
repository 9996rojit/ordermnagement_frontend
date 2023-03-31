'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import getMenuItemWithPermission from '@/config/menuItem';
import MenuItem from '../menuItem';

function ResponsiveDrawer({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = mobileOpen ? 75 : 240;
  const getMenu = getMenuItemWithPermission('superadmin');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          transition: 'all 0.5s ease-in-out',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              transform: `${mobileOpen ? 'rotate(180deg)' : ''}`,
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: drawerWidth, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              transition: 'all 0.5s ease-in-out',
            },
          }}
          open={mobileOpen}
        >
          <Toolbar />
          {getMenu.map(
            (
              item: {
                name: string;
                icon: React.ReactNode;
                link: string;
                children: any;
                OpenIcon: React.ReactNode;
                CloseIcon: React.ReactNode;
              },
              index: number
            ) => {
              return (
                <MenuItem
                  key={index}
                  name={item.name}
                  link={item.link}
                  icon={item.icon}
                  subMenu={item.children}
                  mobileOpen={mobileOpen}
                  OpenIcon={item.OpenIcon}
                  CloseIcon={item.CloseIcon}
                />
              );
            }
          )}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            transition: 'all 0.5s ease-in-out',
          },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
