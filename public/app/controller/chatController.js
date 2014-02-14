/*
 * File: app/controller/chatController.js
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

Ext.define('CoinEX.controller.chatController', {
    extend: 'Ext.app.Controller',

    stores: [
        'messages'
    ],

    onButtonClick: function(button, e, eOpts) {
        var date = new Date(),
            textfield = button.previousNode('textfield'),
            success = function(response, scope) {
                textfield.setValue('');
                Ext.getMessagesStore().reload();
            },
            error = function() {
                textfield.focus();
            };

        Ext.Ajax.request({
            url: '/api/messages',
            success: success,
            failure: error,
            jsonData: {
                body: textfield.getValue()
            }
        });
    },

    onPanelBeforeExpand: function(p, animate, eOpts) {
        var me = this;

        if (!me.loadTask) {
            me.loadTask = Ext.TaskManager.newTask({
                run: me.reloadStore,
                scope: me,
                interval: 5000
            });
        }

        me.loadTask.start();
    },

    onTextfieldSpecialkey: function(field, e, eOpts) {
        if (e.getKey() == e.ENTER) {
            var button = field.nextNode('button');
            button.fireEvent('click', button);
        }
    },

    onViewItemClick: function(dataview, record, item, index, e, eOpts) {
        var message	= Ext.ComponentQuery.query('[name=body]')[0],
            value	= message.getValue(),
            name	= record.get('name') + ', ';

        if (value.indexOf(name) === -1) {
            message.setValue(value + name);
        }
    },

    onPanelCollapse: function(p, eOpts) {
        var me = this;

        if (me.loadTask) {
            me.loadTask.stop();
        }
    },

    reloadStore: function() {
        this.getMessagesStore().reload({
            addRecords: true
        });
    },

    init: function(application) {
                this.getMessagesStore().load();

        this.control({
            "#chatSubmit": {
                click: this.onButtonClick
            },
            "#chatPanel": {
                beforeexpand: this.onPanelBeforeExpand,
                collapse: this.onPanelCollapse
            },
            "#message": {
                specialkey: this.onTextfieldSpecialkey
            },
            "#chatgrid": {
                itemclick: this.onViewItemClick
            }
        });
    }

});
