import MaxWidth from "@/components/MaxWidth";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidth className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidth>
  );
};

export default Layout;
