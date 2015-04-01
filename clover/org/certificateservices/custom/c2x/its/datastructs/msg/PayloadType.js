var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":62,"id":3031,"methods":[{"el":44,"sc":2,"sl":42},{"el":48,"sc":2,"sl":46},{"el":60,"sc":2,"sl":53}],"name":"PayloadType","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":46}],"name":"Verify that encrypted has bytevalue 2","pass":true,"statements":[{"sl":47}]},"test_109":{"methods":[{"sl":46}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":47}]},"test_112":{"methods":[{"sl":46}],"name":"Verify that unsecured has bytevalue 0","pass":true,"statements":[{"sl":47}]},"test_113":{"methods":[{"sl":46}],"name":"Verify that signed has bytevalue 1","pass":true,"statements":[{"sl":47}]},"test_182":{"methods":[{"sl":46},{"sl":53}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_205":{"methods":[{"sl":46},{"sl":53}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_216":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_and_encrypted for 4","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_222":{"methods":[{"sl":46}],"name":"Verify that signed_and_encrypted has bytevalue 4","pass":true,"statements":[{"sl":47}]},"test_25":{"methods":[{"sl":46},{"sl":53}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_253":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_288":{"methods":[{"sl":46}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_303":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns encrypted for 2","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_32":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_331":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_external for 3","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_345":{"methods":[{"sl":46}],"name":"Verify serializeTotalPayload calculates signature payload fields correctly","pass":true,"statements":[{"sl":47}]},"test_368":{"methods":[{"sl":46}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":47}]},"test_371":{"methods":[{"sl":46}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_382":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_387":{"methods":[{"sl":46}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":47}]},"test_389":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed for 1","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_401":{"methods":[{"sl":53}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_41":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_59":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_70":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns unsecured for 0","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_87":{"methods":[{"sl":46}],"name":"Verify that signed_external has bytevalue 3","pass":true,"statements":[{"sl":47}]},"test_88":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_90":{"methods":[{"sl":46}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [345, 90, 387, 368, 88, 371, 106, 109, 382, 41, 113, 112, 222, 205, 59, 25, 288, 87, 182], [345, 90, 387, 368, 88, 371, 106, 109, 382, 41, 113, 112, 222, 205, 59, 25, 288, 87, 182], [], [], [], [], [], [401, 389, 303, 331, 88, 253, 70, 205, 59, 25, 216, 32, 182], [401, 389, 303, 331, 88, 253, 70, 205, 59, 25, 216, 32, 182], [401, 389, 303, 331, 88, 253, 70, 205, 59, 25, 216, 32, 182], [401, 389, 303, 331, 88, 253, 70, 205, 59, 25, 216, 32, 182], [], [], [], [], [], []]
