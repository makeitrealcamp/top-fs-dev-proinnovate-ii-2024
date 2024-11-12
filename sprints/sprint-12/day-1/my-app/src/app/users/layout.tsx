export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-slate-600">
        <h1> USERS LAYOUT</h1>

        {children}
      </div>
    </>
  );
}
