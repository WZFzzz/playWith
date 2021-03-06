let baseUrl = "";
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	baseUrl = "http://dev.kemean.net/ao_di/";
} else if (process.env.NODE_ENV === 'production') {
	// 测试环境
	baseUrl = "http://dev.kemean.net/ao_di/";

	// 正式环境
	//baseUrl = "http://aodi.kemean.net/ao_di/";
}
const courtConfig = {
	//微信公众号APPID
	publicAppId: "",
	//请求接口
	baseUrl: baseUrl,
	//平台名称
	platformName: "uniApp-案例",
	// projectToken: "aodi",
	//项目logo
	logoUrl: "https://qn.kemean.cn/upload/201906/19/3f3b4751f3ed4a97be804450c3ec4c79",
};
//手机号验证正则表达式
const phoneRegular = /^1\d{10}$/;
//邮箱验证正则表达式
const mailRegular = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
//密码验证正则表达式
const passwordRegular = /^[a-zA-Z0-9]{4,10}$/;
export default Object.assign({
	phoneRegular,
	mailRegular,
	passwordRegular
}, courtConfig);
