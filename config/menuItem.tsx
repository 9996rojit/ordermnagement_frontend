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
  ShoppingCartCheckout
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
  {
    name: 'Product',
    link: '/product',
    children: [
      {
        name: 'Active Product',
        link: '/active-product',
        children: [],
        icon: <ShoppingCartCheckout />
      },
      {
        name: 'Pending Product',
        link: '/pending-product',
        children: [],
        icon: <ProductionQuantityLimits />

      }
    ],
    icon: <Inventory2 />
  },
  {
    name: 'Transaction',
    link: '/transaction',
    children: [],
    icon: <Paid />

  }
];

const menuCombiner: { [key: string]: any } = {
  "superadmin": [...AllUserMenu, ...SuperAdminMenu],
  "ceo": [],
};

const getMenuItemWithPermissin = (userPermission: string) => {
  if (!userPermission) return null;
  return menuCombiner[userPermission];
};

export default getMenuItemWithPermissin;
