import http from './http';

export const login = (params) => {
    return http.get('/sso/login', { params });
};

export const logout = (params) => {
    return http.get('/sso/logout', { params });
};
