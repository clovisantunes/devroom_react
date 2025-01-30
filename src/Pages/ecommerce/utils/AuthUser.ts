export const isUserLoggedIn = (): boolean => {
    const token = localStorage.getItem("userToken");
    return token !== null;
};
