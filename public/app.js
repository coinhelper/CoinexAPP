/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    models: [
        'balances',
        'currencies',
        'trade_pairs',
        'orders',
        'messages',
        'notifications',
        'worker_stats',
        'workers',
        'order_book',
        'markets'
    ],
    stores: [
        'balances',
        'currencies',
        'trade_pairs',
        'messages',
        'worker_stats',
        'workers',
        'notifications',
        'orders',
        'order_book',
        'markets'
    ],
    views: [
        'MainView'
    ],
    controllers: [
        'chatController',
        'balancesController',
        'currenciesController'
    ],
    name: 'CoinEX',

    launch: function() {
        var timeout = 0,
            private_stores = [
                'workers',
                'worker_stats',
                'balances',
                'notifications'
            ],
            me = this;

        Ext.getStore('messages').load();
        Ext.getStore('currencies').load();

        Ext.each(private_stores, function(value) {
            setTimeout(function () {
                Ext.getStore(value).load();
            }, timeout);
            timeout += 1000;
        });

        setTimeout(function () {
            Ext.create('widget.mainview');
        }, timeout);
    }

});
