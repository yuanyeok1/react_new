import http from '@/api/http';

export const getMessage = (params) => {
    return http.get('/sobet/message/getPreAdminMessage_ajaxList', { params });
};