import { createSelector } from "reselect";

import { UserState } from "./user.reducer";
import { RootState } from "../store";

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

export const getUserInitials = createSelector(
  (state: RootState) =>
    state.user.currentUser?.displayName.split(" ")[0].slice(0, 1),
  (state: RootState) =>
    state.user.currentUser?.displayName.split(" ")[1].slice(0, 1),

  (firstLetter, secondLetter) => `${firstLetter}${secondLetter}`
);
