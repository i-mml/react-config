import { SET_USER_INFORMATION } from "../constants/user.constants";

export const setUserInformation = (data: any) => {
  return {
    type: SET_USER_INFORMATION,
    payload: data,
  };
};
