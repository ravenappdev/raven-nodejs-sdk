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
    describe('WhatsappOverride', function() {
      beforeEach(function() {
        instance = new raven.WhatsappOverride();
      });

      it('should create an instance of WhatsappOverride', function() {
        // TODO: update the code to test WhatsappOverride
        expect(instance).to.be.a(raven.WhatsappOverride);
      });

      it('should have the property scheduledAt (base name: "scheduled_at")', function() {
        // TODO: update the code to test the property scheduledAt
        expect(instance).to.have.property('scheduledAt');
        // expect(instance.getScheduledAt()).to.be(expectedValueLiteral);
      });

    });
  });

}));
