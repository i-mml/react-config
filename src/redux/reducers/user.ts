import { SET_USER_INFORMATION } from "../constants/user.constants";

const userTokenReducer = (state = "", action: any) => {
  switch (action.type) {
    case SET_USER_INFORMATION:
      return action.payload;
    default:
      return state;
  }
};

export default userTokenReducer;
