sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent) {
        "use strict";

        return Controller.extend("appviewcaatalog.controller.VwMain", {
            onInit: function () {

            },
            onPress: function(oEvent){
                let viewRoute = oEvent.getSource().getBindingContext("mTile").getObject().view;
                let oRouter = UIComponent.getRouterFor(this);
                //oRouter.navTo("ViewList");
                oRouter.navTo(viewRoute);
            }
        });
    });
