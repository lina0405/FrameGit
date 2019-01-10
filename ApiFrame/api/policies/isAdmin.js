module.exports = async function(req, res, proceed) {
  let userId = req.session.userId

  if(userId === undefined) {
    return res.forbidden()
  }

  let user = await SysUser.findOne({
    id: userId
  })

  //管理员就只有admin一个，暂时先这样吧 TODO
  if(user.username === 'admin') {
    return proceed();
  }

  return res.json(ApiResultService.noPermission())
}