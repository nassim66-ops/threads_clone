// Clerk provider that wraps all the the application
import { ClerkProvider } from "@clerk/nextjs";

//fonts
import { Inter } from "next/font/google";

//Styles
import "../globals.css";

//Clerk theme
import { dark } from "@clerk/themes";

//SEO friendly
export const metadata = {
  title: "Threads Clone",
  description: "A Next.js 13 Meta Threads application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1 `}>
          <div className="flex w-full justify-center items-center min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
