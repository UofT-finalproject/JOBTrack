const TOKEN_KEY = 'jwt';

export const login = (user) => {
    localStorage.setItem(TOKEN_KEY, 's%3AUbDNXb7UnR65lcmLhqr4cO_qy4tmyBOX.SpeEDIMi969cahadYgTt4rKH44Aw8d2DIscoIsxOACs');
    localStorage.setItem('user', JSON.stringify(user));
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}