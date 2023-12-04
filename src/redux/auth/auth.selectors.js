export const selectUserData = state => state.auth.userData;
export const selectAuthenticated = state => state.auth.authenticated;
export const selectAuthIsLoading = state => state.auth.selectAuthIsLoading;
export const selectAuthError = state => state.auth.error;