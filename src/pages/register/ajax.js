import http from '@/api/http';

export const getRegister = (data={}) => {
    return http.post(`/sobet/pclinks/registerUser/`, data);
};


export const getImageCode = (params) => {
    return http.get(`/sso/imageCode?date=${new Date()}`);
};