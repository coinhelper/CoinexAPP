/*
 * File: app/view/currenciesPanel.js
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

Ext.define('CoinEX.view.currenciesPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.currencies',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'CoinEX.model.currencies'
    ],

    id: 'currenciesgrid',
    itemId: 'currenciesgrid',
    maxWidth: 200,
    minWidth: 200,
    width: 200,
    title: 'Currencies',
    store: 'tradePairs',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    maxWidth: 65,
                    minWidth: 65,
                    width: 65,
                    defaultWidth: 65,
                    dataIndex: 'currency_name',
                    text: 'Currency'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'rate',
                    text: 'Rate',
                    flex: 1
                }
            ],
            viewConfig: {
                id: 'currenciesGrid',
                itemId: 'currenciesGrid',
                loadMask: false,
                preserveScrollOnRefresh: true
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            id: 'market-select',
                            itemId: 'market-select',
                            fieldLabel: 'Market',
                            labelStyle: 'padding-left:5px',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'markets',
                            valueField: 'id'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});