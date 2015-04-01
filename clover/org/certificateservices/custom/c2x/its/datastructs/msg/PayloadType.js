var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":62,"id":3031,"methods":[{"el":44,"sc":2,"sl":42},{"el":48,"sc":2,"sl":46},{"el":60,"sc":2,"sl":53}],"name":"PayloadType","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":46}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":47}]},"test_105":{"methods":[{"sl":53}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_112":{"methods":[{"sl":46}],"name":"Verify that unsecured has bytevalue 0","pass":true,"statements":[{"sl":47}]},"test_13":{"methods":[{"sl":46}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_144":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns encrypted for 2","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_15":{"methods":[{"sl":46}],"name":"Verify serializeTotalPayload calculates signature payload fields correctly","pass":true,"statements":[{"sl":47}]},"test_152":{"methods":[{"sl":46},{"sl":53}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_184":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_206":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns unsecured for 0","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_208":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_216":{"methods":[{"sl":46},{"sl":53}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_219":{"methods":[{"sl":46}],"name":"Verify that signed_external has bytevalue 3","pass":true,"statements":[{"sl":47}]},"test_22":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_external for 3","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_261":{"methods":[{"sl":46}],"name":"Verify that encrypted has bytevalue 2","pass":true,"statements":[{"sl":47}]},"test_281":{"methods":[{"sl":46}],"name":"Verify that signed has bytevalue 1","pass":true,"statements":[{"sl":47}]},"test_283":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_and_encrypted for 4","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_284":{"methods":[{"sl":46}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":47}]},"test_29":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed for 1","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_301":{"methods":[{"sl":46}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_334":{"methods":[{"sl":46}],"name":"Verify that signed_and_encrypted has bytevalue 4","pass":true,"statements":[{"sl":47}]},"test_397":{"methods":[{"sl":46}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":47}]},"test_5":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_63":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_64":{"methods":[{"sl":46},{"sl":53}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_7":{"methods":[{"sl":46}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_81":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_85":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [85, 81, 5, 219, 152, 13, 397, 281, 112, 284, 103, 216, 334, 261, 15, 7, 184, 301, 64], [85, 81, 5, 219, 152, 13, 397, 281, 112, 284, 103, 216, 334, 261, 15, 7, 184, 301, 64], [], [], [], [], [], [85, 81, 206, 105, 144, 152, 29, 216, 283, 208, 63, 22, 64], [85, 81, 206, 105, 144, 152, 29, 216, 283, 208, 63, 22, 64], [85, 81, 206, 105, 144, 152, 29, 216, 283, 208, 63, 22, 64], [85, 81, 206, 105, 144, 152, 29, 216, 283, 208, 63, 22, 64], [], [], [], [], [], []]