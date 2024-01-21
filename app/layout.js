import './globals.css';

import MainHeader from '@/components/main-header/main-header';
import { Modal } from '@/components/ui/Model';

export const metadata = {
  title: 'NextLevel Cars',
  description: 'Affordable cars, shared by a car-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
