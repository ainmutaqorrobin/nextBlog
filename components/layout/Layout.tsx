import { Fragment, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
