import { Providers } from "@/components/Providers";
import "./globals.css";
import { TheFooter } from "@/components/TheFooter";
import { TheHeader } from "@/components/TheHeader";

export const metadata = {
  title: "Home Next App",
  description: "Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TheHeader />
          <main className="container">{children}</main>
          <TheFooter />
        </Providers>
      </body>
    </html>
  );
}
