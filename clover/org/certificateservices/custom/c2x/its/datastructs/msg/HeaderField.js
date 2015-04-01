var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":402,"id":2823,"methods":[{"el":83,"sc":2,"sl":80},{"el":95,"sc":2,"sl":92},{"el":105,"sc":2,"sl":102},{"el":116,"sc":2,"sl":113},{"el":133,"sc":2,"sl":126},{"el":144,"sc":2,"sl":141},{"el":156,"sc":2,"sl":153},{"el":167,"sc":2,"sl":164},{"el":174,"sc":2,"sl":173},{"el":181,"sc":2,"sl":179},{"el":190,"sc":2,"sl":188},{"el":200,"sc":2,"sl":198},{"el":209,"sc":2,"sl":207},{"el":218,"sc":2,"sl":216},{"el":232,"sc":2,"sl":227},{"el":245,"sc":2,"sl":240},{"el":254,"sc":2,"sl":252},{"el":264,"sc":2,"sl":262},{"el":275,"sc":2,"sl":273},{"el":310,"sc":2,"sl":278},{"el":354,"sc":2,"sl":312},{"el":399,"sc":2,"sl":356}],"name":"HeaderField","sl":62}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":80},{"sl":126},{"sl":141},{"sl":153},{"sl":179},{"sl":278}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":127},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":154},{"sl":155},{"sl":180},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":294},{"sl":296},{"sl":297},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303}]},"test_160":{"methods":[{"sl":278}],"name":"Verify serialization","pass":true,"statements":[{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":293},{"sl":294},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":304},{"sl":305},{"sl":306}]},"test_182":{"methods":[{"sl":80},{"sl":126},{"sl":164},{"sl":173},{"sl":179},{"sl":240},{"sl":262},{"sl":278},{"sl":312}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":127},{"sl":131},{"sl":132},{"sl":165},{"sl":166},{"sl":180},{"sl":241},{"sl":244},{"sl":263},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":295},{"sl":296},{"sl":297},{"sl":304},{"sl":305},{"sl":306},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":336},{"sl":337},{"sl":338},{"sl":348},{"sl":349},{"sl":350},{"sl":351}]},"test_183":{"methods":[{"sl":173},{"sl":179},{"sl":188},{"sl":198},{"sl":207},{"sl":216},{"sl":227},{"sl":240},{"sl":252},{"sl":262},{"sl":273},{"sl":312}],"name":"Verify deserialization","pass":true,"statements":[{"sl":180},{"sl":189},{"sl":199},{"sl":208},{"sl":217},{"sl":228},{"sl":229},{"sl":231},{"sl":241},{"sl":242},{"sl":244},{"sl":253},{"sl":263},{"sl":274},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":321},{"sl":322},{"sl":323},{"sl":324},{"sl":325},{"sl":326},{"sl":327},{"sl":328},{"sl":329},{"sl":330},{"sl":331},{"sl":332},{"sl":333},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347},{"sl":348},{"sl":349},{"sl":350},{"sl":351}]},"test_205":{"methods":[{"sl":173},{"sl":179},{"sl":273},{"sl":278},{"sl":312}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":180},{"sl":274},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347}]},"test_21":{"methods":[{"sl":356}],"name":"Verify toString","pass":true,"statements":[{"sl":358},{"sl":359},{"sl":360},{"sl":378},{"sl":379},{"sl":381},{"sl":382}]},"test_221":{"methods":[{"sl":227},{"sl":240},{"sl":356}],"name":"Verify toString","pass":true,"statements":[{"sl":228},{"sl":231},{"sl":241},{"sl":244},{"sl":358},{"sl":359},{"sl":360},{"sl":362},{"sl":363},{"sl":366},{"sl":367},{"sl":369},{"sl":370},{"sl":372},{"sl":373},{"sl":375},{"sl":376},{"sl":378},{"sl":379},{"sl":381},{"sl":382},{"sl":384},{"sl":385}]},"test_25":{"methods":[{"sl":80},{"sl":126},{"sl":141},{"sl":153},{"sl":164},{"sl":173},{"sl":179},{"sl":240},{"sl":262},{"sl":273},{"sl":278},{"sl":312}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":127},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":154},{"sl":155},{"sl":165},{"sl":166},{"sl":180},{"sl":241},{"sl":244},{"sl":263},{"sl":274},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":304},{"sl":305},{"sl":306},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":336},{"sl":337},{"sl":338},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347},{"sl":348},{"sl":349},{"sl":350},{"sl":351}]},"test_253":{"methods":[{"sl":173},{"sl":312}],"name":"Verify deserialization","pass":true,"statements":[{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347}]},"test_264":{"methods":[{"sl":80},{"sl":92},{"sl":102},{"sl":141},{"sl":179}],"name":"Verify that addHeader adds the header value in correct order","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":93},{"sl":94},{"sl":103},{"sl":104},{"sl":142},{"sl":143},{"sl":180}]},"test_288":{"methods":[{"sl":80},{"sl":141},{"sl":153},{"sl":179},{"sl":188},{"sl":252},{"sl":273},{"sl":278}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":142},{"sl":143},{"sl":154},{"sl":155},{"sl":180},{"sl":189},{"sl":253},{"sl":274},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303}]},"test_344":{"methods":[{"sl":80},{"sl":92},{"sl":102},{"sl":179}],"name":"Verify that findHeader finds the correct header in a SecureMessage","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":93},{"sl":94},{"sl":103},{"sl":104},{"sl":180}]},"test_368":{"methods":[{"sl":278}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303}]},"test_371":{"methods":[{"sl":80},{"sl":113},{"sl":141},{"sl":153},{"sl":179},{"sl":188},{"sl":216},{"sl":252},{"sl":273},{"sl":278}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":114},{"sl":115},{"sl":142},{"sl":143},{"sl":154},{"sl":155},{"sl":180},{"sl":189},{"sl":217},{"sl":253},{"sl":274},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":291},{"sl":292},{"sl":293},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303}]},"test_382":{"methods":[{"sl":278}],"name":"Verify serialization","pass":true,"statements":[{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303}]},"test_387":{"methods":[{"sl":102},{"sl":141},{"sl":278}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":142},{"sl":143},{"sl":280},{"sl":281},{"sl":288},{"sl":289},{"sl":290},{"sl":298},{"sl":299},{"sl":300}]},"test_401":{"methods":[{"sl":173},{"sl":312}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347}]},"test_402":{"methods":[{"sl":126},{"sl":179},{"sl":188},{"sl":198},{"sl":207},{"sl":216},{"sl":227},{"sl":240},{"sl":252},{"sl":262},{"sl":273}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":127},{"sl":129},{"sl":180},{"sl":189},{"sl":199},{"sl":208},{"sl":217},{"sl":228},{"sl":229},{"sl":231},{"sl":241},{"sl":242},{"sl":244},{"sl":253},{"sl":263},{"sl":274}]},"test_59":{"methods":[{"sl":80},{"sl":141},{"sl":153},{"sl":173},{"sl":179},{"sl":278},{"sl":312}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":142},{"sl":143},{"sl":154},{"sl":155},{"sl":180},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347}]},"test_88":{"methods":[{"sl":80},{"sl":141},{"sl":153},{"sl":173},{"sl":179},{"sl":273},{"sl":278},{"sl":312}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":142},{"sl":143},{"sl":154},{"sl":155},{"sl":180},{"sl":274},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347}]},"test_90":{"methods":[{"sl":80},{"sl":126},{"sl":141},{"sl":153},{"sl":179},{"sl":188},{"sl":227},{"sl":252},{"sl":273},{"sl":278}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":127},{"sl":131},{"sl":132},{"sl":142},{"sl":143},{"sl":154},{"sl":155},{"sl":180},{"sl":189},{"sl":228},{"sl":231},{"sl":253},{"sl":274},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":294},{"sl":296},{"sl":297},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [344, 90, 88, 371, 109, 264, 59, 25, 288, 182], [344, 90, 88, 371, 109, 264, 59, 25, 288, 182], [344, 90, 88, 371, 109, 264, 59, 25, 288, 182], [], [], [], [], [], [], [], [], [], [344, 264], [344, 264], [344, 264], [], [], [], [], [], [], [], [344, 387, 264], [344, 387, 264], [344, 387, 264], [], [], [], [], [], [], [], [], [371], [371], [371], [], [], [], [], [], [], [], [], [], [], [90, 109, 25, 402, 182], [90, 109, 25, 402, 182], [], [402], [], [90, 109, 25, 182], [90, 109, 25, 182], [], [], [], [], [], [], [], [], [90, 387, 88, 371, 109, 264, 59, 25, 288], [90, 387, 88, 371, 109, 264, 59, 25, 288], [90, 387, 88, 371, 109, 264, 59, 25, 288], [], [], [], [], [], [], [], [], [], [90, 88, 371, 109, 59, 25, 288], [90, 88, 371, 109, 59, 25, 288], [90, 88, 371, 109, 59, 25, 288], [], [], [], [], [], [], [], [], [25, 182], [25, 182], [25, 182], [], [], [], [], [], [], [401, 183, 88, 253, 205, 59, 25, 182], [], [], [], [], [], [344, 90, 183, 88, 371, 109, 264, 205, 59, 25, 288, 402, 182], [344, 90, 183, 88, 371, 109, 264, 205, 59, 25, 288, 402, 182], [], [], [], [], [], [], [], [90, 183, 371, 288, 402], [90, 183, 371, 288, 402], [], [], [], [], [], [], [], [], [183, 402], [183, 402], [], [], [], [], [], [], [], [183, 402], [183, 402], [], [], [], [], [], [], [], [183, 371, 402], [183, 371, 402], [], [], [], [], [], [], [], [], [], [90, 183, 221, 402], [90, 183, 221, 402], [183, 402], [], [90, 183, 221, 402], [], [], [], [], [], [], [], [], [183, 221, 25, 402, 182], [183, 221, 25, 402, 182], [183, 402], [], [183, 221, 25, 402, 182], [], [], [], [], [], [], [], [90, 183, 371, 288, 402], [90, 183, 371, 288, 402], [], [], [], [], [], [], [], [], [183, 25, 402, 182], [183, 25, 402, 182], [], [], [], [], [], [], [], [], [], [90, 183, 88, 371, 205, 25, 288, 402], [90, 183, 88, 371, 205, 25, 288, 402], [], [], [], [160, 90, 387, 368, 88, 371, 109, 382, 205, 59, 25, 288, 182], [], [160, 90, 387, 368, 88, 371, 109, 382, 205, 59, 25, 288, 182], [160, 90, 387, 368, 88, 371, 109, 382, 205, 59, 25, 288, 182], [160, 90, 368, 88, 371, 109, 382, 205, 59, 25, 288, 182], [160, 90, 368, 88, 371, 109, 382, 205, 59, 25, 288, 182], [160, 90, 368, 88, 371, 109, 382, 205, 59, 25, 288, 182], [160], [160], [160], [160, 387], [160, 387], [160, 387], [160, 371], [160, 371], [160, 371], [160, 90, 109], [160, 25, 182], [160, 90, 109, 25, 182], [160, 90, 109, 25, 182], [160, 90, 387, 368, 88, 371, 109, 382, 205, 59, 25, 288], [160, 90, 387, 368, 88, 371, 109, 382, 205, 59, 25, 288], [160, 90, 387, 368, 88, 371, 109, 382, 205, 59, 25, 288], [160, 90, 368, 88, 371, 109, 382, 205, 59, 25, 288], [160, 90, 368, 88, 371, 109, 382, 205, 59, 25, 288], [160, 90, 368, 88, 371, 109, 382, 205, 59, 25, 288], [160, 25, 182], [160, 25, 182], [160, 25, 182], [], [], [], [], [], [401, 183, 88, 253, 205, 59, 25, 182], [], [], [401, 183, 88, 253, 205, 59, 25, 182], [401, 183, 88, 253, 205, 59, 25, 182], [401, 183, 88, 253, 205, 59, 25, 182], [401, 183, 88, 253, 205, 59, 25, 182], [401, 183, 88, 253, 205, 59, 25, 182], [401, 183, 88, 253, 205, 59, 25, 182], [183], [183], [183], [183], [183], [183], [183], [183], [183], [183], [183], [183], [183], [183], [183], [183, 25, 182], [183, 25, 182], [183, 25, 182], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [401, 183, 88, 253, 205, 59, 25], [183, 25, 182], [183, 25, 182], [183, 25, 182], [183, 25, 182], [], [], [], [], [221, 21], [], [221, 21], [221, 21], [221, 21], [], [221], [221], [], [], [221], [221], [], [221], [221], [], [221], [221], [], [221], [221], [], [221, 21], [221, 21], [], [221, 21], [221, 21], [], [221], [221], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
