import Header from "@/components/front/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
    <Header />{children}</div>;
};

export default layout;
