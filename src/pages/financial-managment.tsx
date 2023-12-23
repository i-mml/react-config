import React from "react";
import FinancialManagmentView from "../views/financialManagmentView";
import MobileNaviagtorLine from "../components/mobileNaviagatorLine";

const FinancialManagmentPage = () => {
  return (
    <>
      <MobileNaviagtorLine title="جزئیات سرویس" hasLink={false} />
      <FinancialManagmentView />
    </>
  );
};

export default FinancialManagmentPage;
