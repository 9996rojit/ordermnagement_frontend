import {
  DashboardCustomize,
  People,
  Person,
  PersonRemove,
  PersonSearch,
  Business,
  AddBusiness,
  Domain,
} from '@mui/icons-material';

const AllUserMenu = [
  {
    name: 'Dashboard',
    link: '/',
    children: [],
    icon: <DashboardCustomize />,
  },
];
const SuperAdminMenu = [
  {
    name: 'Users',
    link: '/user',
    icon: <People />,
    children: [
      {
        name: 'Active Users',
        link: '/active',
        children: [],
        icon: <Person />,
      },
      {
        name: 'Pending Users',
        link: '/pending',
        children: [],
        icon: <PersonSearch />,
      },
      {
        name: 'InActive Users',
        link: '/pending',
        children: [],
        icon: <PersonRemove />,
      },
    ],
  },
  {
    name: 'Company',
    link: '/company',
    icon: <Business />,
    children: [
      {
        name: 'Active Company',
        link: '/active',
        icon: <Domain />,
        children: [],
      },
      {
        name: 'Pending Company',
        link: '/pending',
        icon: <AddBusiness />,
        children: [],
      },
    ],
  },
];

const menuCombiner = {
  superadmin: [...AllUserMenu, ...SuperAdminMenu],
  ceo: [],
};

const getMenuItemWithPermissin = (userPermission: {
  userPermisson: string;
}) => {
  if (!userPermission) return null;
  return menuCombiner[userPermission];
};

export default getMenuItemWithPermissin;
