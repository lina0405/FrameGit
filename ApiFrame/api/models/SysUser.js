/**
 * SysUser.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: { 
      type: 'string', 
      unique: true,
      columnType: 'char(11)'
    },
    password: {
      type: 'string'
    },
    showname: { 
      type: 'string',
      columnType: 'char(50)'
    },
    headimg: {
      type: 'string'
    },
    sex: {
      type: 'string',
      columnType: 'char(10)',
      isIn: ['男', '女', '未知']
    },
    email: {
      type: 'string'
    }
  },

  tableName: 'sys_user' 
};

