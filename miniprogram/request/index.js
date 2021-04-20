"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
exports.request = function (params) {
    return new Promise(function (resolve, reject) {
        wx.request(__assign({}, params, { url: baseUrl + params.url, success: function (result) {
                resolve(result.data.message);
            }, fail: function (err) {
                reject(err);
            } }));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTSxPQUFPLEdBQUcsaURBQWlELENBQUE7QUFFcEQsUUFBQSxPQUFPLEdBQUcsVUFBQyxNQUF1QztJQUs3RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sY0FDTCxNQUFNLElBQ1QsR0FBRyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxFQUN6QixPQUFPLEVBQUMsVUFBQyxNQUFvQztnQkFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUNELElBQUksRUFBQyxVQUFDLEdBQUc7Z0JBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxJQUNELENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWumuS5ieWFrOWFseeahCB1cmxcclxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS1obXVnby13ZWIuaXRoZWltYS5uZXQvYXBpL3B1YmxpYy92MSdcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKHBhcmFtczogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdE9wdGlvbik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgLy8g5L2/55SoUHJvbWlzZeWvueixoSB0c2NvbmZpZ+mFjee9ruaWh+S7tuWGhSDlvZN0YXJnZXTkuLplczXml7bvvIx0c+S8muiupOS4uuS9oOeahHRz5rqQ56CB5Lmf5Y+q5L2/55So5LqGZXM155qEYXBp77yM5ZCm5YiZ5Lya5oql6ZSZICdcIlByb21pc2VcIiDku4XmjIfnsbvlnovvvIzkvYblnKjmraTlpITnlKjkvZzlgLzjgIInXHJcbiAgLy8gaHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zMzgyNzczMS9hcnRpY2xlL2RldGFpbHMvOTEzODUyODhcclxuICBcclxuICAvLyB0c2NvbmZpZy5qc29uIGxpYuWtl+auteaVsOe7hOWGheayoeaciWRvbeWAvO+8jOWmguaenOaciWRvbSDliJnlr7zoh7Tlvq7kv6HlvIDlj5HogIXlt6XlhbfnvJbor5HlpLHotKUg5bm25oql6ZSZIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWNoYXQtbWluaXByb2dyYW0vYXBpLXR5cGluZ3MvaXNzdWVzLzY2XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAuLi5wYXJhbXMsXHJcbiAgICAgIHVybDogYmFzZVVybCArIHBhcmFtcy51cmwsXHJcbiAgICAgIHN1Y2Nlc3M6KHJlc3VsdDogV2VjaGF0TWluaXByb2dyYW0uSUFueU9iamVjdCk9PntcclxuICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOihlcnIpPT57XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuIl19