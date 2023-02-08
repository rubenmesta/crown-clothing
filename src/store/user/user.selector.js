import { createSelector } from "reselect";

export const selectCurrentUser = (state) => state.user.currentUser;

export const getUserInitials = createSelector(
  (state) => state.user.currentUser?.displayName.split(" ")[0].slice(0, 1),
  (state) => state.user.currentUser?.displayName.split(" ")[1].slice(0, 1),

  (firstLetter, secondLetter) => `${firstLetter}${secondLetter}`
);
