import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import "./globals.css";

const inter = Poppins({ subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
 });

export const metadata: Metadata = {
  title: "EventBuddy",
  description: "EventBuddy is a platform for event management.",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>)
 {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
