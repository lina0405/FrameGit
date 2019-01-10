/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  '/Api/PostLogin': 'api/PostLogin',
  '/Api/GetShopList': 'api/GetShopList',
  '/Api/GetShopInfo': 'api/GetShopInfo',
  '/Api/PostShopInfo': 'api/PostShopInfo',
  '/Api/DelShop': 'api/DelShop',
  '/Api/GetSetting': 'api/GetSetting',
  '/Api/PostSetting': 'api/PostSetting',
  '/Api/GetCodeList': 'api/GetCodeList',
  '/Api/PostCodeInfo': 'api/PostCodeInfo',
  '/Api/PostGenerateCode': 'api/PostGenerateCode',
  '/Api/PostGenerateCodeStore': 'api/PostGenerateCodeStore',
  '/Api/DelCode': 'api/DelCode',
  '/Api/PostImage': 'api/PostImage',
  '/Api/GetShopClassList': 'api/GetShopClassList',
  '/Api/PostShopClassInfo': 'api/PostShopClassInfo',
  '/Api/DelShopClass': 'api/DelShopClass',
  '/Api/GetActionList': 'api/GetActionList',
  '/Api/GetActionInfo': 'api/GetActionInfo',
  '/Api/PostActionInfo': 'api/PostActionInfo',
  '/Api/GetActionMemberList': 'api/GetActionMemberList',
  '/Api/DownloadActionMemberList': 'api/DownloadActionMemberList',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
