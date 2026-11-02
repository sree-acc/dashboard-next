// @ts-ignore Next.js bundles this stylesheet; TypeScript may lack CSS declarations.
import './ui/global.css';
import { inter } from './ui/font';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
