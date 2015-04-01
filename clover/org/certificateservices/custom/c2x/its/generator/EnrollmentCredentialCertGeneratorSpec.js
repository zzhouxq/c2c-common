var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":237,"id":4123,"methods":[{"el":74,"sc":2,"sl":61},{"el":78,"sc":2,"sl":76},{"el":50,"sc":2,"sl":50},{"el":50,"sc":2,"sl":50},{"el":52,"sc":2,"sl":52},{"el":52,"sc":2,"sl":52},{"el":53,"sc":2,"sl":53},{"el":53,"sc":2,"sl":53},{"el":55,"sc":2,"sl":55},{"el":55,"sc":2,"sl":55},{"el":56,"sc":2,"sl":56},{"el":56,"sc":2,"sl":56},{"el":58,"sc":2,"sl":58},{"el":58,"sc":2,"sl":58},{"el":59,"sc":2,"sl":59},{"el":59,"sc":2,"sl":59},{"el":116,"sc":2,"sl":80},{"el":153,"sc":2,"sl":118},{"el":228,"sc":2,"sl":156},{"el":235,"sc":2,"sl":230}],"name":"EnrollmentCredentialCertGeneratorSpec","sl":47}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_210":{"methods":[{"sl":50},{"sl":53},{"sl":56},{"sl":58},{"sl":156}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":158},{"sl":160},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":185},{"sl":186},{"sl":187},{"sl":190},{"sl":191},{"sl":194},{"sl":196},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":208},{"sl":209},{"sl":211},{"sl":212},{"sl":213},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":220},{"sl":221},{"sl":222},{"sl":225},{"sl":226}]},"test_275":{"methods":[{"sl":50},{"sl":53},{"sl":58},{"sl":80}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":82},{"sl":84},{"sl":85},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":108},{"sl":109},{"sl":110},{"sl":113},{"sl":114}]},"test_282":{"methods":[{"sl":58},{"sl":230}],"name":"Verify that illegal argument exception is thrown for messages with unsupported subject type","pass":true,"statements":[{"sl":232},{"sl":234}]},"test_394":{"methods":[{"sl":50},{"sl":58},{"sl":118}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":120},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":136},{"sl":137},{"sl":138},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":146},{"sl":147},{"sl":150},{"sl":151}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [275, 210, 394], [], [], [275, 210], [], [], [210], [], [282, 275, 210, 394], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [275], [], [275], [], [275], [275], [], [275], [275], [275], [275], [275], [275], [275], [275], [275], [275], [275], [], [275], [275], [275], [], [275], [275], [275], [275], [], [275], [275], [275], [], [], [275], [275], [], [], [], [394], [], [394], [], [394], [], [394], [394], [394], [394], [394], [394], [394], [394], [394], [394], [394], [], [394], [394], [394], [], [394], [394], [394], [394], [], [394], [394], [394], [], [], [394], [394], [], [], [], [], [210], [], [210], [], [210], [], [210], [210], [210], [210], [210], [210], [210], [210], [210], [210], [210], [210], [210], [], [210], [210], [210], [], [210], [210], [210], [210], [], [210], [210], [210], [], [], [210], [210], [], [], [210], [], [210], [], [210], [210], [210], [210], [210], [210], [210], [210], [210], [210], [210], [210], [], [210], [210], [210], [], [210], [210], [210], [210], [], [210], [210], [210], [], [], [210], [210], [], [], [], [282], [], [282], [], [282], [], [], []]
