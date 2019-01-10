module.exports = function success(data){

  return this.res.json(ApiResultService.success(data))
  
}