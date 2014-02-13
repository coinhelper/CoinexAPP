/*
 * File: app/controller/balancesController.js
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

Ext.define('CoinEX.controller.balancesController', {
    extend: 'Ext.app.Controller',

    onPanelBeforeExpand: function(p, animate, eOpts) {
        var me = this;

        if (!me.loadTask) {
            me.loadTask = Ext.TaskManager.newTask({
                run: this.reloadStore,
                scope: this,
                interval: 60000
            });
        }

        me.loadTask.start();
    },

    onPanelCollapse: function(p, eOpts) {
        var me = this;

        if (me.loadTask) {
            me.loadTask.stop();
        }
    },

    reloadStore: function() {
        Ext.getStore('balances').reload();
        setTimeout(function () {
            Ext.getStore('workers').reload();
        }, 1000);
    },

    init: function(application) {
        this.control({
            "#balancesPanel": {
                beforeexpand: this.onPanelBeforeExpand,
                collapse: this.onPanelCollapse
            }
        });
    }

});
