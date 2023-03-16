import Header from "@/components/Header";
import "./globals.css";
export const metadata = {
  title: "WSSCM",
  description: "Water & Sanitation Services Company Mardan",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
      
        <Header />
        {children}
      </body>
    </html>
  );
}
