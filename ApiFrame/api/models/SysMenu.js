/**
 * SysMenu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    menuNo: {
      type: 'string',
      columnType: 'char(10)'
    },
    menuParentNo: {
      type: 'string',
      columnType: 'char(10)'
    },
    menuOrder: {
      type: 'number',
      columnType: 'int(11)'
    },
    menuName: {
      type: 'string',
      columnType: 'varchar(50)'
    },
    menuUrl: {
      type: 'string',
      columnType: 'varchar(50)'
    },
    menuIcon: {
      type: 'string'
    },
    isVisible: {
      type: 'boolean'
    },
    isLeaf: {
      type: 'boolean'
    }
  },

  tableName: 'sys_menu'
};

