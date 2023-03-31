import { useState, ReactNode } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Link from 'next/link';

const MenuItem = ({
  name,
  icon,
  link,
  mobileOpen,
  subMenu,
  OpenIcon,
  CloseIcon,
}: {
  name: string;
  icon: ReactNode;
  link: string;
  key: number;
  mobileOpen: boolean;
  subMenu: any;
  OpenIcon: ReactNode;
  CloseIcon: ReactNode;
}) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link href={`${link}`}>
            <ListItemButton onClick={() => setActive(!active)}>
              <ListItemIcon>{icon}</ListItemIcon>
              {!mobileOpen && (
                <ListItemText
                  sx={{ transition: 'all 0.5s ease-in-out' }}
                  primary={name}
                />
              )}
              <ListItemIcon>{active ? CloseIcon : OpenIcon}</ListItemIcon>
            </ListItemButton>
          </Link>
        </ListItem>
        {subMenu &&
          subMenu.length > 0 &&
          active &&
          subMenu.map(
            (
              child: {
                name: string;
                icon: ReactNode;
                link: string;
                children: any;
              },
              index: number
            ) => (
              <List
                key={index}
                sx={{ paddingLeft: '17px', overflow: 'hidden' }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{child.icon}</ListItemIcon>
                    {!mobileOpen && (
                      <ListItemText
                        sx={{ transition: 'all 0.5s ease-in-out' }}
                        primary={child.name}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              </List>
            )
          )}
      </List>
    </div>
  );
};

export default MenuItem;
