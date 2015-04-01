var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":158,"id":3307,"methods":[{"el":57,"sc":2,"sl":53},{"el":113,"sc":2,"sl":82},{"el":154,"sc":2,"sl":138}],"name":"EnrollmentCredentialCertGenerator","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_210":{"methods":[{"sl":138}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":152},{"sl":153}]},"test_275":{"methods":[{"sl":82}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":98},{"sl":101},{"sl":102},{"sl":103},{"sl":109}]},"test_282":{"methods":[{"sl":82}],"name":"Verify that illegal argument exception is thrown for messages with unsupported subject type","pass":true,"statements":[{"sl":96},{"sl":111}]},"test_394":{"methods":[{"sl":82}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":109}]},"test_56":{"methods":[{"sl":53},{"sl":82}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":96},{"sl":97},{"sl":98},{"sl":101},{"sl":102},{"sl":103},{"sl":109}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [56], [56], [56], [56], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [282, 56, 275, 394], [], [], [], [], [], [], [], [], [], [], [], [], [], [282, 56, 275, 394], [56, 275, 394], [56, 275, 394], [394], [], [56, 275], [56, 275], [56, 275], [], [], [], [], [], [56, 275, 394], [], [282], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [210], [], [], [], [], [], [], [], [], [], [], [], [], [], [210], [210], [], [], [], [], []]
