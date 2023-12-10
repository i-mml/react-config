import React from "react";
import SupportView from "../views/supportView";
import { useQuery } from "react-query";
import { getTicketAll } from "../api/services/ticket";

const Support = () => {
  const { data: tickets, isLoading } = useQuery("tickets-list", getTicketAll);


  const propsToPass = {
    data: tickets,
    loading: isLoading
  }

  return (
    <div>
      <SupportView {...propsToPass} />
    </div>
  );
};

export default Support;
