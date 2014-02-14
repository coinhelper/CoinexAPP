/*
 * File: app/model/workerStats.js
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

Ext.define('CoinEX.model.workerStats', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'created_at',
            type: 'date'
        },
        {
            name: 'updated_at',
            type: 'date'
        },
        {
            name: 'worker_id',
            type: 'int'
        },
        {
            convert: function(v, rec) {
                var currency = Ext.getStore('workers').findRecord('id', v);
                return currency.get('name');
            },
            mapping: 'worker_id',
            name: 'worker_name',
            type: 'string'
        },
        {
            name: 'currency_id',
            type: 'int'
        },
        {
            name: 'hashrate',
            type: 'int'
        },
        {
            name: 'accepted',
            type: 'int'
        },
        {
            name: 'rejected',
            type: 'int'
        },
        {
            name: 'blocks',
            type: 'int'
        },
        {
            name: 'diff',
            type: 'int'
        },
        {
            name: 'nickname',
            type: 'string'
        },
        {
            name: 'switchpool',
            type: 'boolean'
        }
    ],

    proxy: {
        type: 'ajax',
        url: '/api/worker_stats',
        reader: {
            type: 'json',
            root: 'worker_stats'
        }
    }
});