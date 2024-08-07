import { Footer, TopMenu } from "@/components";


export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <main className="main-h-screen">

      <TopMenu />

      <div className="px-0 pt-3">
        {children}
      </div>

      <Footer />

    </main>
  );
}
