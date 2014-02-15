/*
 * File: app/model/balances.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CoinEX.model.balances', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'currency_id',
            type: 'int'
        },
        {
            name: 'user_id',
            type: 'int'
        },
        {
            name: 'amount',
            type: 'int'
        },
        {
            name: 'held',
            type: 'int'
        },
        {
            name: 'updated_at',
            type: 'date'
        },
        {
            name: 'deposit_address',
            type: 'string'
        },
        {
            name: 'currency_name',
            type: 'string'
        },
        {
            convert: function(v, rec) {
                return CoinEX.Utilities.toSatoshi(v);
            },
            mapping: 'amount',
            name: 'balance',
            type: 'float'
        }
    ],

    proxy: {
        type: 'ajax',
        url: '/api/balances',
        reader: {
            type: 'json',
            root: 'balances'
        }
    }
});