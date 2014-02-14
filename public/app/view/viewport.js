/*
 * File: app/view/viewport.js
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

Ext.define('CoinEX.view.viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    requires: [
        'CoinEX.view.currenciesPanel',
        'CoinEX.view.tradesPanel',
        'CoinEX.view.ordersPanel',
        'CoinEX.view.balancesGrid',
        'CoinEX.view.workersGrid',
        'CoinEX.view.chatPanel',
        'Ext.grid.Panel'
    ],

    id: 'mainView',
    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    region: 'north',
                    split: false,
                    height: 50,
                    html: '<div class="logo"><img src="/images/coinex_logo.png" alt="CoinEX Logo"><span>CoinEX</span></div>'
                },
                {
                    xtype: 'container',
                    flex: 1,
                    region: 'center',
                    split: true,
                    layout: 'border',
                    items: [
                        {
                            xtype: 'currencies',
                            region: 'west',
                            split: true
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            region: 'center',
                            split: true,
                            layout: 'border',
                            items: [
                                {
                                    xtype: 'trades',
                                    region: 'north',
                                    split: true
                                },
                                {
                                    xtype: 'orders',
                                    flex: 1,
                                    region: 'center'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    id: 'balancesPanel',
                    itemId: 'balancesPanel',
                    maxWidth: 200,
                    minWidth: 200,
                    width: 200,
                    collapsed: true,
                    collapsible: true,
                    title: 'My Balances',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'balances',
                            flex: 3
                        },
                        {
                            xtype: 'workers',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'chat',
                    region: 'east',
                    split: true
                },
                {
                    xtype: 'container',
                    region: 'south',
                    split: false,
                    height: 25,
                    html: '<div class="copyright">© 2014 by EeeeeK</div>'
                }
            ]
        });

        me.callParent(arguments);
    }

});