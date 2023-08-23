import React from "react";

type DashboardPageProps = {
  params: {
    storeId: string;
  };
};

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        DashboardPage
    </div>
    </div>
  );
};

export default DashboardPage;
