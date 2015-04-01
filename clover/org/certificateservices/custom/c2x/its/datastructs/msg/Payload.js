var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":114,"id":2993,"methods":[{"el":50,"sc":2,"sl":44},{"el":58,"sc":2,"sl":56},{"el":65,"sc":2,"sl":63},{"el":72,"sc":2,"sl":70},{"el":79,"sc":2,"sl":77},{"el":89,"sc":2,"sl":81},{"el":101,"sc":2,"sl":91},{"el":110,"sc":2,"sl":103}],"name":"Payload","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":44},{"sl":63},{"sl":81}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":64},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_182":{"methods":[{"sl":44},{"sl":56},{"sl":63},{"sl":70},{"sl":77},{"sl":81},{"sl":91}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":57},{"sl":64},{"sl":71},{"sl":78},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_205":{"methods":[{"sl":56},{"sl":63},{"sl":81},{"sl":91}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":57},{"sl":64},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_21":{"methods":[{"sl":103}],"name":"Verify toString","pass":true,"statements":[{"sl":105},{"sl":106},{"sl":108}]},"test_25":{"methods":[{"sl":44},{"sl":56},{"sl":63},{"sl":70},{"sl":77},{"sl":81},{"sl":91}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":57},{"sl":64},{"sl":71},{"sl":78},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_253":{"methods":[{"sl":56},{"sl":91}],"name":"Verify deserialization","pass":true,"statements":[{"sl":57},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_288":{"methods":[{"sl":44},{"sl":63},{"sl":70},{"sl":81}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":64},{"sl":71},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_32":{"methods":[{"sl":56},{"sl":63},{"sl":70},{"sl":91}],"name":"Verify deserialization","pass":true,"statements":[{"sl":57},{"sl":64},{"sl":71},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_345":{"methods":[{"sl":81}],"name":"Verify serializeTotalPayload calculates signature payload fields correctly","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_368":{"methods":[{"sl":81}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_37":{"methods":[{"sl":103}],"name":"Verify toString","pass":true,"statements":[{"sl":105},{"sl":106},{"sl":108}]},"test_371":{"methods":[{"sl":44},{"sl":63},{"sl":70},{"sl":81}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":64},{"sl":71},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_382":{"methods":[{"sl":81}],"name":"Verify serialization","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_387":{"methods":[{"sl":44},{"sl":63},{"sl":70},{"sl":81}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":64},{"sl":71},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_396":{"methods":[{"sl":44},{"sl":63},{"sl":70}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":64},{"sl":71}]},"test_401":{"methods":[{"sl":56},{"sl":91}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":57},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_41":{"methods":[{"sl":81}],"name":"Verify serialization","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_59":{"methods":[{"sl":44},{"sl":56},{"sl":63},{"sl":81},{"sl":91}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":57},{"sl":64},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_88":{"methods":[{"sl":44},{"sl":56},{"sl":63},{"sl":81},{"sl":91}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":57},{"sl":64},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98}]},"test_90":{"methods":[{"sl":44},{"sl":63},{"sl":70},{"sl":81}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45},{"sl":48},{"sl":49},{"sl":64},{"sl":71},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [90, 396, 387, 88, 371, 109, 59, 25, 288, 182], [90, 396, 387, 88, 371, 109, 59, 25, 288, 182], [396], [], [90, 396, 387, 88, 371, 109, 59, 25, 288, 182], [90, 396, 387, 88, 371, 109, 59, 25, 288, 182], [], [], [], [], [], [], [401, 88, 253, 205, 59, 25, 32, 182], [401, 88, 253, 205, 59, 25, 32, 182], [], [], [], [], [], [90, 396, 387, 88, 371, 109, 205, 59, 25, 288, 32, 182], [90, 396, 387, 88, 371, 109, 205, 59, 25, 288, 32, 182], [], [], [], [], [], [90, 396, 387, 371, 25, 288, 32, 182], [90, 396, 387, 371, 25, 288, 32, 182], [], [], [], [], [], [25, 182], [25, 182], [], [], [345, 90, 387, 368, 88, 371, 109, 382, 41, 205, 59, 25, 288, 182], [], [345, 90, 387, 368, 88, 371, 109, 382, 41, 205, 59, 25, 288, 182], [345, 90, 387, 368, 88, 371, 109, 382, 41, 205, 59, 25, 288, 182], [345, 90, 387, 368, 88, 371, 109, 382, 41, 205, 59, 25, 288, 182], [345, 90, 387, 368, 88, 371, 109, 382, 41, 205, 59, 25, 288, 182], [345, 90, 387, 368, 88, 371, 109, 382, 41, 205, 59, 25, 288, 182], [], [], [], [401, 88, 253, 205, 59, 25, 32, 182], [], [401, 88, 253, 205, 59, 25, 32, 182], [401, 88, 253, 205, 59, 25, 32, 182], [401, 88, 253, 205, 59, 25, 32, 182], [401, 88, 253, 205, 59, 25, 32, 182], [401, 88, 253, 205, 59, 25, 32, 182], [401, 88, 253, 205, 59, 25, 32, 182], [], [], [], [], [37, 21], [], [37, 21], [37, 21], [], [37, 21], [], [], [], [], [], []]
