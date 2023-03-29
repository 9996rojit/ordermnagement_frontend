import './globals.css';
// import '../../styles/output.css';
import ColorThemeProvider from '@/provider/themeProvider';

export const metadata = {
  title: 'Order Management System with DSS',
  description:
    'Application that helps organization to manage order and keep track of incomming and outgoing expenses and help to reduce bullwhip effect in your business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: '100vh' }}>
        <ColorThemeProvider>{children}</ColorThemeProvider>
      </body>
    </html>
  );
}
