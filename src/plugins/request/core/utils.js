// 获取合并的数据
export const mergeConfig = function (_this, options) {
	//判断url是不是链接
	let urlType = /^(http|https):\/\//.test(options.url);
	let config = Object.assign({
		timeout: _this.timeout
	}, _this.config, options);
	if (options.method == "FILE") {
		config.url = urlType ? options.url : _this.fileUrl + options.url;
	} else {
		config.url = urlType ? options.url : _this.baseUrl + options.url;
	}
	//请求头
	if (options.header) {
		config.header = Object.assign({}, _this.header, options.header);
	} else {
		config.header = Object.assign({}, _this.header);
	}
	return config;
}
// 请求
export const dispatchRequest = function (requestInfo) {
	return new Promise((resolve, reject) => {
		let httpUrl = requestInfo.url;
		let requestData = void 0;
		if (requestInfo.data && typeof (requestInfo.data) == 'object') {
			if (requestInfo.method == "POST") {
				requestData = JSON.stringify(requestInfo.data);
			} else if (requestInfo.method == "GET") {
				let dataStr = '';
				Object.keys(requestInfo.data).forEach(key => {
					dataStr += key + '=' + requestInfo.data[key] + '&';
				});
				//匹配最后一个&并去除
				if (dataStr !== '') {
					dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
					httpUrl += '?' + dataStr;
				}
			}
		}
		let requestObj;
		if (window.XMLHttpRequest) {
			requestObj = new XMLHttpRequest();
		}
		if (requestInfo.timeout) {
			requestObj.timeout = requestInfo.timeout;
		}
		requestObj.open(requestInfo.method, httpUrl, true);
		//加入请求头
		Object.keys(requestInfo.header).forEach(key => {
			if (requestInfo.header[key]) {
				requestObj.setRequestHeader(key, requestInfo.header[key]);
			}
		});
		if (requestData) {
			requestObj.send(requestData);
		} else {
			requestObj.send();
		}
		requestObj.onreadystatechange = () => {
			if (requestObj.readyState == 4) {
				if (requestObj.status === 200) {
					resolve(requestObj);
				} else {
					resolve(requestObj);
				}
			}
		}
	})
}
// jsonp请求
export const jsonpRequest = function (requestInfo) {
	return new Promise((resolve) => {
		let dataStr = '';
		Object.keys(requestInfo.data).forEach(key => {
			dataStr += key + '=' + requestInfo.data[key] + '&';
		});
		//匹配最后一个&并去除
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
		}
		requestInfo.url = requestInfo.url + '?' + dataStr;
		let callbackName = "callback" + Math.ceil(Math.random() * 1000000);
		// #ifdef H5
		window[callbackName] = function (data) {
			resolve(data);
		}
		let script = document.createElement("script");
		script.src = requestInfo.url + "&callback=" + callbackName;
		document.head.appendChild(script);
		// 及时删除，防止加载过多的JS
		document.head.removeChild(script);
		// #endif
	});
}