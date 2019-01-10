/**
 * SysButton.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    btnName: {
      type: 'string',
      columnType: 'varchar(50)'
    },
    btnNo: {
      type: 'string',
      columnType: 'char(10)',
      unique: true
    },
    btnClass: {
      type: 'string'
    },
    btnStyle: {
      type: 'string'
    },
    btnIcon: {
      type: 'string'
    },
    btnScript: {
      type: 'string'
    },
    menuNo: {
      type: 'string',
      columnType: 'char(10)'
    }
  },
  tableName: 'sys_button'
};

