/*
 * File: app/view/buyOrdersGrid.js
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

Ext.define('CoinEX.view.buyOrdersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.buyorders',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.View'
    ],

    id: 'buyordersgrid',
    itemId: 'buyordersgrid',
    title: 'Buy Orders',
    store: 'buyOrderBook',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'price',
                    text: 'Price',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'coins',
                    text: 'Amount',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'total',
                    text: 'Total',
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    }

});