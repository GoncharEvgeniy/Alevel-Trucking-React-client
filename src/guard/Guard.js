export const isAuth = () => {
    let token = localStorage.getItem('LoginToken');
    return !!token;
};