import {
  DashboardCustomize,
  People,
  Person,
  PersonRemove,
  PersonSearch,
  Business,
  AddBusiness,
  Domain,
  Inventory2,
  Paid,
  ProductionQuantityLimits,
  ShoppingCartCheckout,
  PersonAdd,
  Logout,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material';

const AllUserMenu = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    children: [],
    icon: <DashboardCustomize />,
  },
];
const SuperAdminMenu = [
  {
    name: 'Users',
    link: '/dashboard/user',
    icon: <People />,
    OpenIcon: <KeyboardArrowDown />,
    CloseIcon: <KeyboardArrowUp />,
    children: [
      {
        name: 'Add User',
        link: '/dashboard/user/add-user',
        children: [],
        icon: <PersonAdd />,
      },
      {
        name: 'Active Users',
        link: '/dashboard/user/active',
        children: [],
        icon: <Person />,
      },
      {
        name: 'Pending Users',
        link: '/dashboard/user/pending',
        children: [],
        icon: <PersonSearch />,
      },
      {
        name: 'InActive Users',
        link: '/dashboard/user/inactive',
        children: [],
        icon: <PersonRemove />,
      },
    ],
  },
  {
    name: 'Company',
    link: '/dashboard/company',
    icon: <Business />,
    OpenIcon: <KeyboardArrowDown />,
    CloseIcon: <KeyboardArrowUp />,
    children: [
      {
        name: 'Active Company',
        link: '/dashboard/company/active',
        icon: <Domain />,
        children: [],
      },
      {
        name: 'Pending Company',
        link: '/dashboard/company/pending',
        icon: <AddBusiness />,
        children: [],
      },
    ],
  },
  {
    name: 'Product',
    link: '/dashboard/product',
    children: [
      {
        name: 'Active Product',
        link: '/dashboard/product/active-product',
        children: [],
        icon: <ShoppingCartCheckout />,
      },
      {
        name: 'Pending Product',
        link: '/dashboard/product/pending-product',
        children: [],
        icon: <ProductionQuantityLimits />,
      },
    ],
    icon: <Inventory2 />,
    OpenIcon: <KeyboardArrowDown />,
    CloseIcon: <KeyboardArrowUp />,
  },
  {
    name: 'Transaction',
    link: '/dashboard/transaction',
    children: [],
    icon: <Paid />,
  },
  {
    name: 'Logout',
    link: '/logout',
    children: [],
    icon: <Logout />,
  },
];

const menuCombiner: { [key: string]: any } = {
  superadmin: [...AllUserMenu, ...SuperAdminMenu],
  ceo: [],
};

const getMenuItemWithPermission = (userPermission: string) => {
  if (!userPermission) return null;
  return menuCombiner[userPermission];
};

export default getMenuItemWithPermission;
