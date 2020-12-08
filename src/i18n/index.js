import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
.use(Backend)               // 默认从/public/locales中加载
.use(initReactI18next)
.init({
    fallbackLng: 'zh',
    debug: false,           // 如果开启，就会在控制台打印调试信息
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
        useSuspense: false
    }
});

export default i18n;