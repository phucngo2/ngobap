import React from "react";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="py-4 px-[1.2rem] md:px-12 lg:px-16 w-full flex flex-col items-center">
            {children}
        </div>
    );
};

export default PageLayout;
