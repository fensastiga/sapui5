/*global QUnit*/

sap.ui.define([
	"appviewcaatalog/controller/VwMain.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VwMain Controller");

	QUnit.test("I should test the VwMain controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
