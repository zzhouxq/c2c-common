var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":60,"id":844,"methods":[{"el":42,"sc":2,"sl":40},{"el":46,"sc":2,"sl":44},{"el":58,"sc":2,"sl":51}],"name":"EccPointType","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns compressed_lsb_y_1 for 3","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_109":{"methods":[{"sl":44}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":45}]},"test_120":{"methods":[{"sl":51}],"name":"Verify deserialization of EccPoint","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_124":{"methods":[{"sl":44}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":45}]},"test_125":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns x_coordinate_only for 0","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_131":{"methods":[{"sl":44}],"name":"Verify serialization of PublicKey","pass":true,"statements":[{"sl":45}]},"test_140":{"methods":[{"sl":44}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":45}]},"test_143":{"methods":[{"sl":44}],"name":"Verify serialization of EccPoint","pass":true,"statements":[{"sl":45}]},"test_147":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns uncompressed for 4","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_150":{"methods":[{"sl":51}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_153":{"methods":[{"sl":44}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":45}]},"test_155":{"methods":[{"sl":51}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_158":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that eCEISEncryptSymmetricKey and eCEISDecryptSymmetricKey encrypts and decrypts symmetric key correcly.","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_159":{"methods":[{"sl":44}],"name":"Verify serialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":45}]},"test_16":{"methods":[{"sl":44}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":45}]},"test_160":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_162":{"methods":[{"sl":51}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_168":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_171":{"methods":[{"sl":44}],"name":"Verify serialization of EcdsaSignature","pass":true,"statements":[{"sl":45}]},"test_182":{"methods":[{"sl":44},{"sl":51}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_183":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_188":{"methods":[{"sl":44}],"name":"Verify that compressed_lsb_y_1 has bytevalue 3","pass":true,"statements":[{"sl":45}]},"test_197":{"methods":[{"sl":51}],"name":"Verify deserialization of PublicKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_2":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_205":{"methods":[{"sl":44},{"sl":51}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_210":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":45}]},"test_249":{"methods":[{"sl":44}],"name":"Verify that uncompressed has bytevalue 4","pass":true,"statements":[{"sl":45}]},"test_25":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_253":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_26":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_268":{"methods":[{"sl":51}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_275":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":45}]},"test_288":{"methods":[{"sl":44}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45}]},"test_293":{"methods":[{"sl":51}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_311":{"methods":[{"sl":44},{"sl":51}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_313":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_322":{"methods":[{"sl":44},{"sl":51}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_325":{"methods":[{"sl":44}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":45}]},"test_353":{"methods":[{"sl":44}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":45}]},"test_36":{"methods":[{"sl":44}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":45}]},"test_363":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_365":{"methods":[{"sl":44}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":45}]},"test_368":{"methods":[{"sl":44}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":45}]},"test_371":{"methods":[{"sl":44}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45}]},"test_372":{"methods":[{"sl":44}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":45}]},"test_381":{"methods":[{"sl":44}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":45}]},"test_382":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_394":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":45}]},"test_401":{"methods":[{"sl":51}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_407":{"methods":[{"sl":44}],"name":"Verify that compressed_lsb_y_0 has bytevalue 2","pass":true,"statements":[{"sl":45}]},"test_50":{"methods":[{"sl":44}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":45}]},"test_55":{"methods":[{"sl":44}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":45}]},"test_56":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":45}]},"test_59":{"methods":[{"sl":44},{"sl":51}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_60":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns compressed_lsb_y_0 for 2","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_61":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_66":{"methods":[{"sl":44}],"name":"Verify that x_coordinate_only has bytevalue 0","pass":true,"statements":[{"sl":45}]},"test_68":{"methods":[{"sl":51}],"name":"Verify deserialization of EcdsaSignature","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_80":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_83":{"methods":[{"sl":51}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_88":{"methods":[{"sl":44},{"sl":51}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_90":{"methods":[{"sl":44}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45}]},"test_96":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [353, 36, 311, 313, 66, 158, 381, 394, 90, 50, 368, 171, 26, 168, 210, 131, 325, 143, 153, 188, 372, 124, 140, 275, 249, 16, 322, 159, 56, 160, 407, 363, 88, 371, 109, 365, 382, 2, 205, 59, 25, 288, 55, 182], [353, 36, 311, 313, 66, 158, 381, 394, 90, 50, 368, 171, 26, 168, 210, 131, 325, 143, 153, 188, 372, 124, 140, 275, 249, 16, 322, 159, 56, 160, 407, 363, 88, 371, 109, 365, 382, 2, 205, 59, 25, 288, 55, 182], [], [], [], [], [], [401, 162, 311, 158, 183, 293, 197, 125, 60, 155, 268, 150, 322, 120, 363, 80, 88, 2, 253, 68, 96, 83, 10, 205, 59, 25, 147, 61, 182], [401, 162, 311, 158, 183, 293, 197, 125, 60, 155, 268, 150, 322, 120, 363, 80, 88, 2, 253, 68, 96, 83, 10, 205, 59, 25, 147, 61, 182], [401, 162, 311, 158, 183, 293, 197, 125, 60, 155, 268, 150, 322, 120, 363, 80, 88, 2, 253, 68, 96, 83, 10, 205, 59, 25, 147, 61, 182], [401, 162, 311, 158, 183, 293, 197, 125, 60, 155, 268, 150, 322, 120, 363, 80, 88, 2, 253, 68, 96, 83, 10, 205, 59, 25, 147, 61, 182], [], [], [], [], [], []]
