/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */
// @ts-nocheck
sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "chisco/invoices/model/models",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"        
    ],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.Device} Device 
     * @param {typeof chisco.invoices.model.models} models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     * @returns 
     */
    function (UIComponent, Device, models, JSONModel, ResourceModel) {
        "use strict";

        return UIComponent.extend("chisco.invoices.Component", {
            metadata: {
                // "rootView" : {
                //     "viewName" : "chisco.invoices.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // },
                manifest: "json"

            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                var oData = {
                    recipient : {
                        nombre : "CHISCOTE Componet",
                        boton : "App Click Componet"
                    }
                }
                var oModel1 = new JSONModel(oData);
                //var oModel1 = new JSONModel(models.createRecipient());
                this.setModel(oModel1);

                //i18n
                var i18nModel = new ResourceModel({ bundleName : "chisco.invoices.i18n.i18n"});
                this.setModel(i18nModel, "i18n");                
            }
        });
    }
);