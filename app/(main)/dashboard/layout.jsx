import { Suspense } from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default DashboardLayout;
