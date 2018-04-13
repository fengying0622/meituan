const baseUrl = 'http://rap2api.taobao.org/app/mock/4877/';

export const Http = {
    get: (url, params, headers) => {
        if (params) {
            let paramsArray = [];
            //返回参数的字符串数组
            let paramsKeyArray = Object.keys(params);
            // 通过 forEach 方法拿到数组中每个元素,将元素与参数的值进行拼接处理,并且放入 paramsArray 中
            console.log('a'+paramsKeyArray);
            paramsKeyArray.forEach(key => {
                return paramsArray.push((key + '=' + params[key]));
            });
            console.log('b'+paramsKeyArray);

            //网络拼接
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += paramsArray.join('&');
            }
        }

        return new Promise(function (resolve, reject) {

            // console.log('请求地址：--------------------------');
            fetch(baseUrl+url, {
                method: 'GET',
                headers: headers
            })
                .then((response) => response.json())
                .then((response) => resolve(response))
                .catch((error) => {
                    console.log(error);
                    alert('数据连接失败');
                    reject({status: -1})
                })
        })
    },

    post: (url, params, headers) => {
        //将json对象解析成json字符串
        let formData = JSON.stringify(params);
        return new Promise(function (resolve, reject) {

            fetch(baseUrl+url, {
                method: 'POST',
                headers: headers ? headers : {'Content-Type': 'application/json'},
                body: formData,
            })
                .then((response) => response.json())
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    console.log(error);
                    alert('数据连接失败');
                    reject({status: -1})
                })
        })

    }
};