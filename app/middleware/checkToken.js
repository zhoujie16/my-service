module.exports = (options, app) => {
  return async function checkToken(ctx, next) {
    const routerArr_unCheck = [
      '/login',
      '/api/getbjtime',
      '/api/user/addUser'
    ]
    const tmp = routerArr_unCheck.some((path) => {
      return ctx.request.url.indexOf(path) !== -1
    })
    if (tmp || ctx.request.url === '/') {
      await next()
      return
    }
    //验证用户token
    const token_user = ctx.query.token || ctx.request.body.token
    if (token_user) {
      //验证token
      const token_service = await ctx.service.token.queryUserTokenByToken({token: token_user})
      if (token_service) {
        await next()
      } else {
        ctx.body = {
          //不存在
          success: false,
          message: '请重新登录',
          token: String(token_user)
        }
      }

    } else {
      ctx.body = {
        //不存在
        success: false,
        message: '请重新登录',
        token: String(token_user)
      }
    }

    // await next()
  }
}
