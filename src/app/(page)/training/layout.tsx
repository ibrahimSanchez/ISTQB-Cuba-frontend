
export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <div className="mt-28 sm:px-14">
      {children}
    </div>


  );
}
