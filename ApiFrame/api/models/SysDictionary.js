/**
 * SysDictionary.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    did: {
      type: 'string',
      columnType: 'char(20)'
    },
    dname: {
      type: 'string',
      columnType: 'varchar(50)'
    },
    typeId: {
      type: 'string',
      columnType: 'char(20)'
    },
    helpcode: {
      type: 'string'
    }
  },

  tableName: 'sys_dictionary'

};

