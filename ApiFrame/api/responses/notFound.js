module.exports = function notFound(err, extraInfo){

  sails.log.error(new Date() + ': ' + err)

  return this.res.json(ApiResultService.error('4000', '找不到该地址'))

}