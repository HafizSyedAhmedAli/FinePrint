import type { Metadata } from 'next';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
  title: 'FinePrint',
  description: 'Understand the fine print in contracts. Not legal advice.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
