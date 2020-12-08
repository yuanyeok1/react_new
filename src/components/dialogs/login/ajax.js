import http from '@/api/http';

export const login = (params) => {
    return http.get('/sso/login', { params });
};
