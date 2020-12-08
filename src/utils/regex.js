import { floatDiv } from '@/utils/calculation.js';
export const rules = {
    loginName: /^[a-zA-Z0-9]{8,10}$/, // 8-10位字母跟数字
    password: /^[a-zA-Z0-9]{8,12}$/, // 8-12位字母跟数字
    withdrawalPassword: /^\d{4,6}$/, // 4-6位字母跟数字取款密码
    ptPassword: /^(?=.*\d.*)(?=.*[a-zA-Z].*).{6,16}$/,
    //phoneNumber: /^((?!169)(?!170)(?!171)1[0-9]{10})|(92[0-9]{9})|(98[0-9]{9})$/,
    phoneNumber: /^1[3|5|6|7|8|9]{1}[0-9]{9}$/,
    smsCode: /^[0-9]{4}$/,
    reservedInfo: /^[A-Za-z0-9\u4e00-\u9fa5]{1,16}$/,
    realName: /^(([a-zA-Z+\s?.?a-zA-Z+]{2,20}$)|([\u4e00-\u9fa5+.?\u4e00-\u9fa5+]{2,11}$))/,
    emailAddress: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    bankCardNumber: /^[0-9]{16,19}$/,
    depositor: /^(([a-zA-Z+\s?.?a-zA-Z+]{2,20}$)|([\u4e00-\u9fa5+.?\u4e00-\u9fa5+]{2,11}$))/,
    captcha: /^(?=.*\w.*).{5}$/,
    bankBranch: /^([\u4e00-\u9fa5])+$/,
    verifyCode: /^\d{4}$/, // 4位数字验证码
    weChat :/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/
	//date: /(([0-9{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3}-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29/,
};

export const errMsgs={
	realNameEmpty:"请填写真实姓名!",
	realName:"真实姓名格式不正确!",
	birthdayEmpty:'请选择生日!',
	birthday:'生日格式不正确!',
	loginNameEmpty:'请输入用户名!',
	loginName:'用户名格式不正确',
	passwordEmpty:'请输入密码!',
	password:'密码格式不正确!',
	phoneNumberEmpty:'请输入手机号!',
	phoneNumber:'手机号码格式不正确!',
	smsCodeEmpty:'验证码不能为空',
	smsCode:'验证码格式不正确',
	emailAddressEmpty:'请输入邮箱!',
	emailAddress:'邮箱格式不正确!',
	bankCardNumberEmpty:'请输入银行卡号!',
	bankCardNumber:'银行卡格式不正确!',
	captchaEmpty:'验证码不能为空!',
	captcha:'验证码格式不正确!',
	bankBranchEmpty:"请输入支行名称",
	bankBranch:'支行格式不正确',
	weChatEmpty:'微信号不能为空!',
	weChat:'微信号格式不正确!',
};

export const getRequiredRule = (message, trigger = 'blur') => ({
    required: true,
    message,
    trigger
});

export const getErrorMsg = (name, value) => {
    if (!value) {
        return errMsgs[name + 'Empty'];
    }
    return errMsgs[name];
};


export const Reg = {
	regRemoveFS: function(p){ //去掉首字符空隔
		p = p.toString();
		p = p.replace(/^\s*/,"");
		return p;
	},
	regRemoveFES: function(p){ //去掉首尾字符空隔
		p = p.toString();
		p = p.replace(/^\s*|\s*$/g,"");
		return p;
	},
	regRemoveAllS: function(p){ //去掉字符中所有空隔
		p = p.toString();
		p = p.replace(/\s*/,"");
		return p;
	},
	regChinese:  function( p , s , e ) {
		let n = s || 2,
		w = e || 5;
	    //   /^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/
	    let reg = new RegExp("(^[\u4E00-\u9FA5]{"+n+","+w+"})(?:·[\u4E00-\u9FA5]{"+n+","+w+"})*$","g")
	    return  reg.test(p)?1:0;
	},
	regBaseNum:  function( p ) {
	    p = p.toString(); 
	    p = p.replace(/[^\d.]/g,'');                    //去除非数字，只留下数字和'.' 
	    p = p.replace(/^\./,'');                        //不能以点开头
	    p = p.replace(/(^0)(\d*)(\.*\d*)/,'$1$3');      //0开头后面不能再是0
	    p = p.replace(/\.{2,}/g,'.');                   //1..连续输入，点只能输入一个
	    p = p.replace(/(\d+)(\.)(\d+)(\.)/g,'$1$2$3');  //1.2.3 去除隔断输入‘.’
	    return p;
	},
	regFloat:  function( p , w ){
		let n = w || '';
	    p = this.regBaseNum(p);
	    if(n){//限制小数点后的位数 
	        let reg = new RegExp("(\\d+)(.\\d{0,"+n+"})(\\d*)$");
	        p = p.replace(reg,"$1$2");    
	    }
	    return p;
	},
	//整数/浮点数，非0开头小数（p > 1），第二参数控制小数点后位数
	regFloatGtZero: function( p , w ){
		let n = w || '';
	    p = this.regFloat(p,n);
	    p = p.replace(/^0*/,'');   //非0开头
	    return p;
	},
	//可以是零开头整数，第二参数控制输入整数的位数
	regZeroInt: function(p , w ){
		let n = w || '';
	    p = this.regBaseNum(p);
	    p = p.replace(/(\d+)(\.\d*)/g,'$1'); //去除小数点及以后的数字
	    if(n){
	        let reg = new RegExp("(\\d{0,"+n+"})$");
	        p = p.replace(reg,"$1");  
	    }
	    return p;
	},
	
	//非零开头整数，第二参数控制输入整数的位数
	regInt: function (p , w ){
		let n = w || '';
	    p = this.regZeroInt(p,n);
	    p = p.replace(/^0*/,'');  //非0开头
	    return p;
	},

	//银行卡每4位数空隔处理
	regBank: function(p,w){
		w = w || 26;
		if(w%4){
			w += floatDiv(w,4) -1;
		}else{
			w += Math.floor(floatDiv(w,4));
		}
		let reg = new RegExp("([\\d+\\s*]{1,"+w+"})([\\d|\\s]*)");
		p = p.toString();
		p = p.replace(/[^\d]/g,'').replace(/(\d{4})/g,'$1 ').replace(reg,'$1').replace(/\s*$/,'');	
			
		return p;
	}
}