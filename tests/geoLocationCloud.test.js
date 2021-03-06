/* *********************************************************************
 * This Original Work is copyright of 51 Degrees Mobile Experts Limited.
 * Copyright 2019 51 Degrees Mobile Experts Limited, 5 Charlotte Close,
 * Caversham, Reading, Berkshire, United Kingdom RG4 7BY.
 *
 * This Original Work is licensed under the European Union Public Licence (EUPL)
 * v.1.2 and is subject to its terms as set out below.
 *
 * If a copy of the EUPL was not distributed with this file, You can obtain
 * one at https://opensource.org/licenses/EUPL-1.2.
 *
 * The 'Compatible Licences' set out in the Appendix to the EUPL (as may be
 * amended by the European Commission) shall be deemed incompatible for
 * the purposes of the Work and the provisions of the compatibility
 * clause in Article 5 of the EUPL shall not apply.
 *
 * If using the Work as, or as part of, a network application, by
 * including the attribution notice(s) required under Article 5 of the EUPL
 * in the end user terms of the application under an appropriate heading,
 * such notice(s) shall fulfill the requirements of that article.
 * ********************************************************************* */

const GeoLocation = require(__dirname +
    '/..');
const myResourceKey = process.env.RESOURCE_KEY || '!!YOUR_RESOURCE_KEY!!';

// Skip the rest of the examples when async is not available
let isAsync = true;

try {
  eval('async () => {}');
} catch (e) {
  isAsync = false;
}

if (isAsync) {
  // Check that if no evidence is yet available for location
  // engine, accessing a valid property will return HasValue=false
  // and a correct error message.
  test('No evidence error message', done => {
    if (myResourceKey === '!!YOUR_RESOURCE_KEY!!') {
      throw new Error('No resource key is present!');
    }

    const pipeline = new GeoLocation.GeoLocationPipelineBuilder({
      resourceKey: myResourceKey
    }).build();
    const flowData = pipeline.createFlowData();

    flowData.process().then(function () {
      const country = flowData.location.country;
      expect(country.hasValue).toBe(false);
      expect(country.noValueMessage.indexOf('This property requires ' +
        'evidence values from JavaScript running on the client. It ' +
        'cannot be populated until a future request is made that ' +
        'contains this additional data.') !== -1).toBe(true);

      done();
    });
  });
} else {
  // Skip if async is not available (e.g node 6)
  test.skip('Workaround', () => 1);
}
