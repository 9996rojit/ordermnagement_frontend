import './globals.css';
import "../../styles/output.css";


export const metadata = {
  title: 'Order Management System with DSS',
  description: 'Application that helps organization to manage order and keep track of incomming and outgoing expenses and help to reduce bullwhip effect in your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
