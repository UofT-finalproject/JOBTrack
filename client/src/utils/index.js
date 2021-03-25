const TOKEN_KEY = 'jwt';

export const login = (user) => {
    let saveUser = {};
    localStorage.setItem(TOKEN_KEY, 's%3AUbDNXb7UnR65lcmLhqr4cO_qy4tmyBOX.SpeEDIMi969cahadYgTt4rKH44Aw8d2DIscoIsxOACs');
    if (user) saveUser = user;
    localStorage.setItem('user', JSON.stringify(saveUser))
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('user');
    window.location.replace('/');
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}