/**
 * SysDictionaryType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    typeId: {
      type: 'string',
      columnType: 'char(20)',
      unique: true
    },
    typename: {
      type: 'string',
      columnType: 'varchar(50)'
    }
  },

  tableName: 'sys_dictionary_type'
  
};

