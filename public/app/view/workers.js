/*
 * File: app/view/workers.js
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

Ext.define('CoinEX.view.workers', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.workers',

    requires: [
        'Ext.grid.column.Number',
        'Ext.grid.View'
    ],

    height: 150,
    title: 'My Workers',
    store: 'workerStats',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            header: {
                tools: [
                    {
                        type: 'refresh',
                        tooltip: 'Refresh Workers',
                        handler: function(event, toolEl, panel){
                                Ext.getStore('worker_stats').reload();
                                setTimeout(function () {
                                    Ext.getStore('workers').reload();
                                }, 1000)
                            }
                    }
                ]
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nickname',
                    text: 'Worker',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    maxWidth: 80,
                    minWidth: 80,
                    width: 80,
                    defaultWidth: 80,
                    align: 'right',
                    dataIndex: 'hashrate',
                    text: 'Khash/sec'
                }
            ]
        });

        me.callParent(arguments);
    }

});