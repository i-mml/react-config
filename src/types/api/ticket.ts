export type TicketSendFields = {
  title: string;
  user_id: string;
  label: string;
  internal?: boolean;
  device_id?: any;
  companeyId?: any;
};

export type TicketEditFields = {
  title: string;
  user_id: string;
  ID: number;
  operator_id: string;
};
