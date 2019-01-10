/**
 * SysAuth.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    authMaster: {
      type: 'string',
      columnType: 'char(10)',
      isIn: ['USER', 'ROLE']
    },
    authMasterValue: { //userId || roleId 
      type: 'number',
      columnType: 'int(11)'
    },
    authAccess: {
      type: 'string',
      columnType: 'char(10)',
      isIn: ['MENU', 'BUTTON']
    },
    authAccessNo: { //menuNo, btnNo, AppNo
      type: 'string',
      columnType: 'char(10)'
    },
    operation: { // 0表示禁用， 1表示启用
      type: 'number',
      columnType: 'int(1)'
    }

  },
  tableName: 'sys_auth'
};

