// @ts-nocheck
sap.ui.define([
    'sap/ui/core/ComponentContainer'
], 
/**
 * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
function(ComponentContainer) {
    
    new ComponentContainer({
        name: "chisco",
        settings: {
            id : ""
        },
        async: true
    }).placeAt("content");
    
});