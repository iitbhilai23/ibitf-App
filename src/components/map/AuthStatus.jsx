export const isAuthenticated = () => {
    return sessionStorage.getItem("token")? true : false;
};
export const authorization =()=> {
    return sessionStorage.getItem('token');
}