// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",    
    "sap/ui/model/json/JSONModel",
    "chisco/invoices/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, JSONModel, models,ResourceModel) {
        "use strict";

        return Controller.extend("chisco.invoices.controller.AppView", {
            onInit: function () {
                //var oData = {
                //    recipient : {
                //        nombre : "CHISCOTE",
                //        boton : "App Click"
                //    }
                //}
                //var oModel1 = new JSONModel(oData);
                ////var oModel1 = new JSONModel(models.createRecipient());
                //this.getView().setModel(oModel1);

                //i18n
                //var i18nModel = new ResourceModel({ bundleName : "chisco.invoices.i18n.i18n"});
                //this.getView().setModel(i18nModel, "i18n");
            },
            onShowHello: function (){
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipients = this.getView().getModel().getProperty("/recipient/nombre");
                var sMsg = oBundle.getText("msgToat", [sRecipients]);
                MessageToast.show(sMsg);
            }

        });
    });
