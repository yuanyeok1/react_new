import http from '@/api/http';

export const getLiveUrl = (params) => {
    let str = null;
    let type = params.type;
    if(type === 'ag') {
        str = 'getAGUrl';
    }else if(type === 'sexy') {
        str = 'getSEXYUrl'
    }else if(type === 'ebet') {
        str = 'getEBETUrl'
    }else {
        str = 'getCQ9Url'
    }
    return http.get(`/sobet/ag/${str}`, { params });
};