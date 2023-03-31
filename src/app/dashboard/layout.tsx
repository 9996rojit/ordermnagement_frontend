import { ResponsiveDrawer } from '@/components';
import React, { ReactNode } from 'react';

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <ResponsiveDrawer>
      {children}
      <h1>Hello wordl</h1>
    </ResponsiveDrawer>
  );
};

export default Dashboard;
