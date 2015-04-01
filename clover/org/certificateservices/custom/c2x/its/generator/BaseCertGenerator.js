var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":170,"id":3262,"methods":[{"el":60,"sc":2,"sl":58},{"el":71,"sc":2,"sl":65},{"el":155,"sc":2,"sl":95},{"el":168,"sc":2,"sl":162}],"name":"BaseCertGenerator","sl":52}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":58},{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":59},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_124":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_140":{"methods":[{"sl":58},{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":59},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_210":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_250":{"methods":[{"sl":95}],"name":"Verify illegal subjec type no root ca and CA certificate null throws illegal argument exception","pass":true,"statements":[{"sl":113},{"sl":114}]},"test_275":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_325":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_353":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_365":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_372":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_394":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_50":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_55":{"methods":[{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]},"test_56":{"methods":[{"sl":58},{"sl":65},{"sl":95},{"sl":162}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":59},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":113},{"sl":117},{"sl":118},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":135},{"sl":136},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":152},{"sl":154},{"sl":163},{"sl":164},{"sl":165},{"sl":167}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [140, 56, 109], [140, 56, 109], [], [], [], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 250, 50, 109, 210, 365], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 250, 50, 109, 210, 365], [250], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [56, 365], [], [56, 365], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [], [], [], [], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [365], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [], [], [], [], [], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [353, 325, 394, 372, 124, 140, 56, 275, 55, 50, 109, 210, 365], [], [], []]
