export type CreatePlanFields = {
  compnay_id: number;
  position: number;
  title: string;
  image: string;
};

export type PlanEditFields = {
  compnay_id: number;
  position: number;
  title: string;
  image: string;
  id: number;
  active: boolean;
};
