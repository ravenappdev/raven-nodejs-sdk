/*
 * Raven API
 * This is OpenAPI defintion for the APIs of Raven.  You can find out more about Raven at [https://ravenapp.dev/](https://ravenapp.dev/).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@ravenapp.dev
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src//index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src//index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.raven);
  }
}(this, function(expect, raven) {
  'use strict';

  var instance;

  describe('', function() {
    describe('EmailRecipient', function() {
      beforeEach(function() {
        instance = new raven.EmailRecipient();
      });

      it('should create an instance of EmailRecipient', function() {
        // TODO: update the code to test EmailRecipient
        expect(instance).to.be.a(raven.EmailRecipient);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.getName()).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.getAddress()).to.be(expectedValueLiteral);
      });

    });
  });

}));
