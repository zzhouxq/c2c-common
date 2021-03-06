/************************************************************************
 *                                                                       *
 *  Certificate Service -  Car2Car Core                                  *
 *                                                                       *
 *  This software is free software; you can redistribute it and/or       *
 *  modify it under the terms of the GNU Affero General Public License   *
 *  License as published by the Free Software Foundation; either         *
 *  version 3   of the License, or any later version.                    *
 *                                                                       *
 *  See terms of license at gnu.org.                                     *
 *                                                                       *
 *************************************************************************/
package org.certificateservices.custom.c2x.ieee1609dot2.datastructs.secureddata

import java.awt.Choice;

import org.bouncycastle.util.encoders.Hex;
import org.certificateservices.custom.c2x.asn1.coer.COEREncodeHelper;
import org.certificateservices.custom.c2x.asn1.coer.COERNull
import org.certificateservices.custom.c2x.asn1.coer.COEROctetStream;
import org.certificateservices.custom.c2x.common.BaseStructSpec;
import org.certificateservices.custom.c2x.common.crypto.DefaultCryptoManagerParams;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.EccP256CurvePoint
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.Hostname
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.IValue
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.LinkageValue
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.Psid;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.PsidSspRange;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.PublicVerificationKey
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.SequenceOfOctetString;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.SequenceOfPsidSspRange
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.SspRange;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.Duration.DurationChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.EccP256CurvePoint.EccP256CurvePointChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.PublicVerificationKey.PublicVerificationKeyChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.Signature.SignatureChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.SspRange.SspRangeChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.cert.CertificateId.CertificateIdChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.cert.SubjectPermissions.SubjectPermissionsChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.cert.VerificationKeyIndicator.VerificationKeyIndicatorChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.secureddata.HashedData;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.enc.SymmetricCiphertext.SymmetricCiphertextChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.secureddata.HashedData.HashedDataChoices;

import spock.lang.Shared;
import spock.lang.Specification;
import spock.lang.Unroll;

/**
 * Test for HashedData
 * 
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
class HashedDataSpec extends BaseStructSpec {
	
	@Shared byte[] data = Hex.decode("0102030405060708091011121314151617181920212223242526272829303132")
	
	
	@Unroll
	def "Verify that HashedData is correctly encoded for type #choice"(){
		when:
		def o = new HashedData(choice, value)
		
		then:
		serializeToHex(o) == encoding
		
		when:
		HashedData o2 = deserializeFromHex(new HashedData(), encoding)
		
		then:
		o2.getValue().getData() == value
		o2.choice == choice
		o2.type == choice
		!choice.extension
		
		where:
		choice                                              | value                 | encoding   
		HashedDataChoices.sha256HashedData                  | data                   | "800102030405060708091011121314151617181920212223242526272829303132"   
		
	}

	
	def "Verify HashedData"(){
		expect:
		new HashedData(HashedDataChoices.sha256HashedData,data).toString() == "HashedData [sha256HashedData=0102030405060708091011121314151617181920212223242526272829303132]"
		
		
	}
	

}
