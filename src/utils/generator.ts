import rp from 'request-promise';

class Generator {
    HttpApis: any;
    constructor(HttpApis: any) {
        this.HttpApis = HttpApis;
        //recursion dynamic construction
        return this.Stack(HttpApis);
    }

    setMethodWithUri(option: any) {

        return async (_client:any) => {

            var params = _client.params || {},
                method = _client.method || 'POST',
                t = '?';


            for (var key in params) {
                var p = params[key];
                if (Object.prototype.toString.call(p) === "[object Object]" || Object.prototype.toString.call(p) === "[object Array]") {
                    continue;
                }
                t += (key + '=' + p + '&');
            }

            console.log(option.url + ' begin:');
            console.log(params);

            var __option = {
                url: option.url + t,
                method: method,
                json: true,
                headers: {
                    "content-type": "application/json",
                    "TxzToken":'C0B09DE5480C8706B0AE40D66A42DF0B'
                },
                body: params
            }

            const reqPromiseOpt = Object.assign({}, __option, {
                transform: function (body: any, res: any, resolveWithFullResponse: any) {
                    console.log(option.url + ' end:');
                    console.log(body);
                    return body;
                }
            });

            try {

                return rp(reqPromiseOpt)
                    .catch(this.ErrorInterceptors)


            } catch (e) {
                console.error(e);

            }

        }
    }


    onForm(option: any) {

        return async (_client:any) => {

            var params = _client.params || {},
                method = _client.method || 'POST';

            var __option = {
                url: option.url,
                method: method,
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                form: params
            }

            const reqPromiseOpt = Object.assign({}, __option, {
                transform: function (body: any, res: any, resolveWithFullResponse: any) {

                    return eval("(" + body + ")");

                }
            });

            try {

                return rp(reqPromiseOpt)
                    .catch(this.ErrorInterceptors)


            } catch (e) {

                console.error(e);

            }


        }
    }



    ErrorInterceptors = async (err: any) => {

        console.error(err);
        console.log('ErrorInterceptors：' + err.statusCode);

        // if (err.statusCode === 401) {

        //     window.location.reload();

        // } else {
        return err.response;
        //}
    }



    Stack(HttpApis: any) {

        for (var api in HttpApis) {

            if (Object.prototype.toString.call(HttpApis[api]) === "[object String]") {

                var __option = {
                    url: HttpApis[api],
                    method: 'POST'
                }

                HttpApis[api] = this.setMethodWithUri(__option);
                HttpApis[api].onForm = this.onForm(__option);

            } else if (Object.prototype.toString.call(HttpApis[api]) === "[object Object]") {

                this.Stack(HttpApis[api]);

            }

        }

        return HttpApis;

    }
}

export default Generator;
