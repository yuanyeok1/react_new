import http from '@/api/http';

export const getUserInfo = (params) => {
    return http.get('/sobet/v2/userinfo/userInfoAjax', { params });
};