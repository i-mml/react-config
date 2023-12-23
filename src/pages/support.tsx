import React from "react";
import SupportView from "../views/supportView";
import { useQuery } from "react-query";
import { getTicketAll } from "../api/services/ticket";
import MobileNaviagtorLine from "../components/mobileNaviagatorLine";
import PrimaryButton from "../components/buttons/primaryButton";

const Support = () => {
  const { data: tickets, isLoading } = useQuery("tickets-list", getTicketAll);


  const propsToPass = {
    data: tickets,
    loading: isLoading
  }

  return (
    <>
      <MobileNaviagtorLine title="پشتیبانی" hasLink={false} hasCustom customLink={
        <PrimaryButton onClick={() => { }} type="button">ارسال تیکت</PrimaryButton>
      } />
      <SupportView {...propsToPass} />
    </>
  );
};

export default Support;
