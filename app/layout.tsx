import "@incubee/styles/globals.css";
import { ThemeProvider } from "@incubee/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "../lib/utils";
import Header from "@incubee/components/ui/header";

type RootLayoutProps = {
  children: React.ReactNode;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Incubee",
  description:
    "Your Platform to Discover the Next Hacker House or Fellow. Fuel Your Innovation Journey Today!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
