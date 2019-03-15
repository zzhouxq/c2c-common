var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":89,"id":2885,"methods":[{"el":67,"sc":2,"sl":62},{"el":75,"sc":2,"sl":73},{"el":82,"sc":2,"sl":80},{"el":87,"sc":2,"sl":84}],"name":"PublicVerificationKey","sl":33},{"el":57,"id":2885,"methods":[{"el":45,"sc":3,"sl":42},{"el":56,"sc":3,"sl":47}],"name":"PublicVerificationKey.PublicVerificationKeyChoices","sl":38}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_1":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that getSignedDataStore returns an empty map if SignerIdentifier is digest","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_113":{"methods":[{"sl":47}],"name":"Verify that getPublicVerificationAlgorithm returns correct PublicVerificationKeyChoice ecdsaBrainpoolP256r1 for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54}]},"test_120":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_123":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that getSignedDataStore returns a populate map of all certificate if SignerIdentifier is certificate","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_128":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaNistP256Signature","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_144":{"methods":[{"sl":42},{"sl":73}],"name":"Verify that Ieee1609dot2Peer2PeerPDUContent is correctly encoded for type caCerts","pass":true,"statements":[{"sl":44},{"sl":74}]},"test_146":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that getSignerIdentifier returns correct hash value for type HASH_ONLY","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_16":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that return first certificates public key of enroll cert and enroll ca consists of implicit certificates","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_167":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_168":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_175":{"methods":[{"sl":42},{"sl":62},{"sl":73},{"sl":80}],"name":"Verify that PublicVerificationKey is correctly encoded for type ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":44},{"sl":63},{"sl":64},{"sl":74},{"sl":81}]},"test_194":{"methods":[{"sl":47}],"name":"Verify that decodeEccPoint decodes the ieee EccPoints correctly for public key scheme: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54}]},"test_250":{"methods":[{"sl":42},{"sl":73}],"name":"Verify that constructor and getters are correct and it is correctly encoded for explicit certificates","pass":true,"statements":[{"sl":44},{"sl":74}]},"test_257":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that getSignerId returns the included HashedId8 if type is digest","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_290":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_307":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type SIGNER_CERTIFICATE","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_309":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_321":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_325":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54},{"sl":63},{"sl":64},{"sl":81}]},"test_332":{"methods":[{"sl":84}],"name":"Verify toString","pass":true,"statements":[{"sl":86}]},"test_364":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaBrainpoolP256r1Signature","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54},{"sl":63},{"sl":64},{"sl":81}]},"test_366":{"methods":[{"sl":62},{"sl":84}],"name":"Verify toString","pass":true,"statements":[{"sl":63},{"sl":64},{"sl":86}]},"test_367":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_40":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_411":{"methods":[{"sl":47}],"name":"verify that generateKeyPair generates new keypairs for algorithm: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54}]},"test_412":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_421":{"methods":[{"sl":42},{"sl":73}],"name":"Verify that SignerIdentifier is correctly encoded for type certificate","pass":true,"statements":[{"sl":44},{"sl":74}]},"test_433":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that findFromStores finds certificate from stores","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_44":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_447":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54},{"sl":63},{"sl":64},{"sl":81}]},"test_454":{"methods":[{"sl":47}],"name":"Verify that ieee encodeEccPoint encodes ec public keys properly for algorithm: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54}]},"test_470":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_471":{"methods":[{"sl":84}],"name":"Verify toString","pass":true,"statements":[{"sl":86}]},"test_473":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that getSignedDataStore returns the HashedId8 of the first certificate if type is certificate","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_479":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_527":{"methods":[{"sl":42},{"sl":62},{"sl":73},{"sl":80}],"name":"Verify that PublicVerificationKey is correctly encoded for type ecdsaNistP256","pass":true,"statements":[{"sl":44},{"sl":63},{"sl":64},{"sl":74},{"sl":81}]},"test_541":{"methods":[{"sl":47}],"name":"Verify that getPublicVerificationAlgorithm returns correct PublicVerificationKeyChoice ecdsaNistP256 for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51}]},"test_549":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64},{"sl":81}]},"test_57":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64},{"sl":81}]},"test_577":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_58":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_580":{"methods":[{"sl":47}],"name":"Verify correct algorithms indicator is returned for ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51}]},"test_585":{"methods":[{"sl":62}],"name":"Verify that getPublicKey throws IllegalArgumentException if invalid parameters was given","pass":true,"statements":[{"sl":63},{"sl":64}]},"test_61":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type CERT_CHAIN","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_614":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_66":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that buildRecieverStore generates a correct HashedId8 to Receiver Map","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_660":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_674":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_687":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_698":{"methods":[{"sl":42},{"sl":73}],"name":"Verify that SequenceOfCertificate is initialized properly","pass":true,"statements":[{"sl":44},{"sl":74}]},"test_711":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that return first certificates public key of complete chain consists of explicit certificates","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_719":{"methods":[{"sl":42},{"sl":73}],"name":"Verify that CaCertP2pPDU is initialized properly","pass":true,"statements":[{"sl":44},{"sl":74}]},"test_778":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that return first certificates public key of enroll cert only consists of implicit certificates","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_806":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_815":{"methods":[{"sl":47},{"sl":62},{"sl":80}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64},{"sl":81}]},"test_825":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_836":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_850":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_856":{"methods":[{"sl":84}],"name":"Verify toString()","pass":true,"statements":[{"sl":86}]},"test_869":{"methods":[{"sl":84}],"name":"Verify toString","pass":true,"statements":[{"sl":86}]},"test_870":{"methods":[{"sl":84}],"name":"Verify toString","pass":true,"statements":[{"sl":86}]},"test_871":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_876":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_879":{"methods":[{"sl":84}],"name":"Verify toString","pass":true,"statements":[{"sl":86}]},"test_881":{"methods":[{"sl":47}],"name":"verify that generateKeyPair generates new keypairs for algorithm: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51}]},"test_894":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_900":{"methods":[{"sl":47}],"name":"Verify that ieee encodeEccPoint encodes ec public keys properly for algorithm: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51}]},"test_905":{"methods":[{"sl":47}],"name":"Verify that decodeEccPoint decodes the ieee EccPoints correctly for public key scheme: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51}]},"test_915":{"methods":[{"sl":62}],"name":"Verify that xonly ecc curve points throws IllegalArgumentException","pass":true,"statements":[{"sl":63},{"sl":64},{"sl":65}]},"test_945":{"methods":[{"sl":47},{"sl":62}],"name":"Verify getCertID generates a correct HashedId8","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_953":{"methods":[{"sl":84}],"name":"Verify toString","pass":true,"statements":[{"sl":86}]},"test_96":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that buildCertStore() generates certificate store maps correctly and buildChain generates correct certificate chain","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_960":{"methods":[{"sl":42},{"sl":73}],"name":"Verify that VerificationKeyIndicator is correctly encoded for type verificationKey","pass":true,"statements":[{"sl":44},{"sl":74}]},"test_979":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":54},{"sl":63},{"sl":64}]},"test_991":{"methods":[{"sl":47},{"sl":62}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":63},{"sl":64}]},"test_997":{"methods":[{"sl":47}],"name":"Verify correct algorithms indicator is returned for ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":52},{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [527, 421, 175, 250, 960, 144, 698, 719], [], [527, 421, 175, 250, 960, 144, 698, 719], [], [], [815, 997, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 411, 945, 167, 660, 580, 473, 1, 146, 113, 577, 778, 881, 905, 290, 876, 470, 325, 711, 541, 128, 825, 321, 257, 61, 57, 0, 433, 40, 871, 367, 364, 96, 836, 194, 900, 66, 614, 894, 44, 454], [], [815, 997, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 411, 945, 167, 660, 580, 473, 1, 146, 113, 577, 778, 881, 905, 290, 876, 470, 325, 711, 541, 128, 825, 321, 257, 61, 57, 0, 433, 40, 871, 367, 364, 96, 836, 194, 900, 66, 614, 894, 44, 454], [815, 687, 549, 309, 979, 123, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 945, 167, 660, 580, 473, 1, 146, 577, 778, 881, 905, 290, 876, 470, 711, 541, 128, 825, 321, 257, 61, 57, 0, 433, 40, 871, 367, 96, 836, 900, 66, 614, 894, 44], [815, 687, 549, 309, 979, 123, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 945, 167, 660, 580, 473, 1, 146, 577, 778, 881, 905, 290, 876, 470, 711, 541, 128, 825, 321, 257, 61, 57, 0, 433, 40, 871, 367, 96, 836, 900, 66, 614, 894, 44], [997, 687, 549, 309, 979, 447, 168, 674, 806, 411, 660, 113, 325, 57, 871, 364, 836, 194, 894, 454], [], [997, 687, 549, 309, 979, 447, 168, 674, 806, 411, 660, 113, 325, 57, 871, 364, 836, 194, 894, 454], [], [], [], [], [], [], [], [815, 915, 687, 549, 309, 979, 123, 447, 120, 16, 527, 850, 412, 307, 991, 479, 175, 58, 168, 674, 806, 945, 167, 660, 473, 1, 146, 577, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 366, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 894, 44], [815, 915, 687, 549, 309, 979, 123, 447, 120, 16, 527, 850, 412, 307, 991, 479, 175, 58, 168, 674, 806, 945, 167, 660, 473, 1, 146, 577, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 366, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 894, 44], [815, 915, 687, 549, 309, 979, 123, 447, 120, 16, 527, 850, 412, 307, 991, 479, 175, 58, 168, 674, 806, 945, 167, 660, 473, 1, 146, 577, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 366, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 894, 44], [915], [], [], [], [], [], [], [], [527, 421, 175, 250, 960, 144, 698, 719], [527, 421, 175, 250, 960, 144, 698, 719], [], [], [], [], [], [815, 549, 447, 16, 527, 412, 175, 58, 778, 325, 711, 128, 57, 40, 367, 364, 66], [815, 549, 447, 16, 527, 412, 175, 58, 778, 325, 711, 128, 57, 40, 367, 364, 66], [], [], [879, 870, 869, 366, 332, 856, 953, 471], [], [879, 870, 869, 366, 332, 856, 953, 471], [], [], []]