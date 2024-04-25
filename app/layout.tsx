import './globals.css';

import Link from 'next/link';
import { Logo, SettingsIcon, ProductIcon, VercelLogo } from '@/components/icons';
import { User } from './user';
import { NavItem } from './nav-item';

export const metadata = {
  title: 'پنل مدیریت'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className="h-full bg-gray-50">
      <body>

          

            {children}
          
        
      </body>
    </html>
  );
}
