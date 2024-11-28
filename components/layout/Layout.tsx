import { Fragment, ReactNode } from "react";
import MainNav from "./MainNav";

interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <MainNav />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
