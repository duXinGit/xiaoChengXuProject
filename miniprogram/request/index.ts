// 定义公共的 url
const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'

export const request = (params: WechatMiniprogram.RequestOption): Promise<any> => {
  // 使用Promise对象 tsconfig配置文件内 当target为es5时，ts会认为你的ts源码也只使用了es5的api，否则会报错 '"Promise" 仅指类型，但在此处用作值。'
  // https://blog.csdn.net/weixin_33827731/article/details/91385288
  
  // tsconfig.json lib字段数组内没有dom值，如果有dom 则导致微信开发者工具编译失败 并报错 https://github.com/wechat-miniprogram/api-typings/issues/66
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success:(result: WechatMiniprogram.IAnyObject)=>{
        resolve(result.data.message);
      },
      fail:(err)=>{
        reject(err);
      }
    });
  })
}
