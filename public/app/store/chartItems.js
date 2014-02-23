/*
 * File: app/store/chartItems.js
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

Ext.define('CoinEX.store.chartItems', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array',
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'chartItems',
            proxy: {
                type: 'ajax',
                directionParam: '',
                filterParam: '',
                groupDirectionParam: '',
                groupParam: '',
                idParam: '',
                limitParam: '',
                pageParam: '',
                sortParam: '',
                startParam: '',
                url: '/api/trade_pairs/52/chart_items',
                reader: {
                    type: 'array'
                }
            },
            fields: [
                {
                    mapping: 0,
                    name: 'time',
                    type: 'date'
                },
                {
                    mapping: 1,
                    name: 'open',
                    type: 'int'
                },
                {
                    mapping: 2,
                    name: 'high',
                    type: 'int'
                },
                {
                    mapping: 3,
                    name: 'low',
                    type: 'int'
                },
                {
                    mapping: 4,
                    name: 'close',
                    type: 'int'
                },
                {
                    mapping: 5,
                    name: 'volume',
                    type: 'int'
                }
            ]
        }, cfg)]);
    }
});