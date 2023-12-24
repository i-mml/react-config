import React from "react";
import SupportView from "../views/supportView";
import { useQuery } from "react-query";
import { getTicketAll } from "../api/services/ticket";
import MobileNaviagtorLine from "../components/mobileNaviagatorLine";
import PrimaryButton from "../components/buttons/primaryButton";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate()

  const { data: tickets, isLoading } = useQuery("tickets-list", getTicketAll);

  const propsToPass = {
    data: tickets?.data,
    loading: isLoading
  }

  return (
    <>
      <MobileNaviagtorLine title="پشتیبانی" hasLink={false} hasCustom customLink={
        <PrimaryButton onClick={() => navigate("/support/create")} type="button">ارسال تیکت</PrimaryButton>
      } />
      <SupportView {...propsToPass} />
    </>
  );
};

export default Support;
