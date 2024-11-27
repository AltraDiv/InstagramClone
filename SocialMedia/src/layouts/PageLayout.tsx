import SideBar from "../pages/components/sidebar/SideBar";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      {pathname !== "/auth" ? (
        <div className="flex flex-row h-full">
          {/* Sidebar */}
          <div className="w-1/6 fixed h-full">
            <SideBar />
          </div>
          {/* Main Content */}
          <div className="ml-[16%] h-full flex-grow">
            {children}
          </div>
        </div>
      ) : (
        <div className="h-full">{children}</div>
      )}
    </div>
  );
};

export default PageLayout;
