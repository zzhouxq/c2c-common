var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":105,"id":855,"methods":[{"el":52,"sc":2,"sl":45},{"el":63,"sc":2,"sl":61},{"el":70,"sc":2,"sl":68},{"el":77,"sc":2,"sl":75},{"el":84,"sc":2,"sl":80},{"el":92,"sc":2,"sl":86},{"el":102,"sc":2,"sl":97}],"name":"EcdsaSignature","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_12":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_1 ecc point","pass":true,"statements":[{"sl":69}]},"test_124":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_140":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_150":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_153":{"methods":[{"sl":45},{"sl":80}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":82},{"sl":83}]},"test_16":{"methods":[{"sl":80}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_162":{"methods":[{"sl":61},{"sl":86}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_168":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_171":{"methods":[{"sl":45},{"sl":80}],"name":"Verify serialization of EcdsaSignature","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":82},{"sl":83}]},"test_173":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_182":{"methods":[{"sl":80}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_2":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_205":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_206":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_0 ecc point","pass":true,"statements":[{"sl":69}]},"test_21":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_210":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_230":{"methods":[{"sl":45},{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":99}]},"test_241":{"methods":[{"sl":45},{"sl":68},{"sl":75}],"name":"Test to generate ECDSA Signature and then verify the signature for algorithm: ecdsa_nistp256_with_sha256","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76}]},"test_25":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_251":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType uncompressed","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_253":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_266":{"methods":[{"sl":45},{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":99}]},"test_268":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_271":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_1","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_275":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_288":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_293":{"methods":[{"sl":61},{"sl":86}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_304":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_0","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_311":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_313":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_319":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":62},{"sl":69},{"sl":76}]},"test_322":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_324":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_325":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_326":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with uncompressed ecc point","pass":true,"statements":[{"sl":69}]},"test_327":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with x_coordinate_only ecc point","pass":true,"statements":[{"sl":69}]},"test_353":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_363":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_365":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_368":{"methods":[{"sl":80}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_371":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_372":{"methods":[{"sl":45},{"sl":68},{"sl":75}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76}]},"test_381":{"methods":[{"sl":80}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_382":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_387":{"methods":[{"sl":61},{"sl":68}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_394":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_401":{"methods":[{"sl":61},{"sl":86}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_47":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType x_coordinate_only","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_50":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_55":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_56":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_59":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_61":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_63":{"methods":[{"sl":61}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":62}]},"test_68":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Verify deserialization of EcdsaSignature","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_80":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_85":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly no signature trailer field","pass":true,"statements":[{"sl":69}]},"test_88":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_90":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [353, 230, 394, 266, 90, 319, 50, 171, 210, 325, 241, 153, 372, 124, 140, 275, 56, 88, 371, 109, 365, 59, 25, 288, 55], [353, 230, 394, 266, 90, 319, 50, 171, 210, 325, 241, 153, 372, 124, 140, 275, 56, 88, 371, 109, 365, 59, 25, 288, 55], [353, 230, 394, 266, 90, 319, 50, 171, 210, 325, 241, 153, 372, 124, 140, 275, 56, 88, 371, 109, 365, 59, 25, 288, 55], [353, 230, 394, 266, 90, 319, 50, 171, 210, 325, 241, 153, 372, 124, 140, 275, 56, 88, 371, 109, 365, 59, 25, 288, 55], [319], [], [353, 230, 394, 266, 90, 319, 50, 171, 210, 325, 241, 153, 372, 124, 140, 275, 56, 88, 371, 109, 365, 59, 25, 288, 55], [], [], [], [], [], [], [], [], [], [401, 162, 311, 319, 387, 293, 304, 251, 268, 63, 150, 47, 322, 363, 271, 80, 88, 2, 253, 68, 205, 59, 25, 61], [401, 162, 311, 319, 387, 293, 304, 251, 268, 63, 150, 47, 322, 363, 271, 80, 88, 2, 253, 68, 205, 59, 25, 61], [], [], [], [], [], [353, 311, 394, 90, 319, 387, 50, 206, 304, 210, 85, 325, 12, 241, 327, 251, 372, 124, 140, 268, 275, 47, 56, 326, 271, 88, 371, 109, 365, 68, 205, 59, 25, 288, 55], [353, 311, 394, 90, 319, 387, 50, 206, 304, 210, 85, 325, 12, 241, 327, 251, 372, 124, 140, 268, 275, 47, 56, 326, 271, 88, 371, 109, 365, 68, 205, 59, 25, 288, 55], [], [], [], [], [], [353, 311, 394, 90, 319, 50, 210, 325, 241, 372, 124, 140, 268, 275, 56, 88, 371, 109, 365, 68, 205, 59, 25, 288, 55], [353, 311, 394, 90, 319, 50, 210, 325, 241, 372, 124, 140, 268, 275, 56, 88, 371, 109, 365, 68, 205, 59, 25, 288, 55], [], [], [], [353, 313, 381, 394, 90, 50, 368, 171, 168, 210, 325, 153, 124, 140, 275, 16, 322, 56, 363, 88, 371, 109, 365, 382, 2, 205, 59, 25, 288, 55, 182], [], [353, 313, 381, 394, 90, 50, 368, 171, 168, 210, 325, 153, 124, 140, 275, 16, 322, 56, 363, 88, 371, 109, 365, 382, 2, 205, 59, 25, 288, 55, 182], [353, 313, 381, 394, 90, 50, 368, 171, 168, 210, 325, 153, 124, 140, 275, 16, 322, 56, 363, 88, 371, 109, 365, 382, 2, 205, 59, 25, 288, 55, 182], [], [], [401, 162, 311, 293, 268, 150, 322, 363, 80, 88, 2, 253, 68, 205, 59, 25, 61], [], [401, 162, 311, 293, 268, 150, 322, 363, 80, 88, 2, 253, 68, 205, 59, 25, 61], [401, 162, 311, 293, 268, 150, 322, 363, 80, 88, 2, 253, 68, 205, 59, 25, 61], [401, 162, 311, 293, 268, 150, 322, 363, 80, 88, 2, 253, 68, 205, 59, 25, 61], [401, 162, 311, 293, 268, 150, 322, 363, 80, 88, 2, 253, 68, 205, 59, 25, 61], [], [], [], [], [], [230, 266, 173, 324, 21], [], [230, 266, 173, 324, 21], [], [], [], [], [], []]
