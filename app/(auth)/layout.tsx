import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-200">
      {children}
    </main>
  );
};

export default Layout;
