import Toast from '@/components/toast';
import { go } from '@/utils';

const mobiledomain = "ld177788.com";
const systemidvar = "424";

export const loginPT = (username, password) => {
    function loginCallback(response) {
        debugger
        if (response.errorCode) {
            Toast.fail("Login failed. " + response.playerMessage + " Error code: " + response.errorCode);
        } else {
            go(`/app/slots?username=${username}`);
        }
    }

    window.iapiSetCallout('Login', loginCallback);
    window.iapiSetClientPlatform("mobile&deliveryPlatform=HTML5");
    var realMode = 1;
    window.iapiLogin(username, password, realMode, "en"); //需要换成cn吗？
};

export const playGamePT = (data) => {
    const realMode = 1;
    const location = window.location;
    const currentgame = data.gameCode;

    function launchMobileClient(temptoken) {
        var clientUrl = 'http://hub.' + mobiledomain + 
                        '/igaming/' + 
                        '?gameId=' + currentgame + 
                        '&real=1' + 
                        '&username=' + data.username + 
                        '&lang=en' +
                        '&tempToken=' + temptoken + 
                        '&lobby=' + location.href.substring(0,location.href.lastIndexOf('/')+1) + 'app/slots' + 
                        '&support=' + location.href.substring(0,location.href.lastIndexOf('/')+1) + 'app' + 
                        '&logout=' + location.href.substring(0,location.href.lastIndexOf('/')+1) + 'login' + 
                        '&deposit=' + location.href.substring(0,location.href.lastIndexOf('/')+1) + 'app/ucenter/deposit';

        document.location = clientUrl;
    }

    function getTokenCallback(response) {
        if (response.errorCode) {
            Toast.fail("Token failed. " + response.playerMessage + " Error code: " + response.errorCode);
        }

        else {
            launchMobileClient(response.sessionToken.sessionToken);
        }
    }

    window.iapiSetCallout('GetTemporaryAuthenticationToken', getTokenCallback);
    window.iapiRequestTemporaryToken(realMode, systemidvar, 'GamePlay');
};