module.exports = function notFound(err, extraInfo){

  sails.log.error(new Date() + ': ' + err)

  return this.res.json(ApiResultService.error('5000', err))
  
}