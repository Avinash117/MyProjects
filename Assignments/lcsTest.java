import static org.junit.Assert.*;

import java.util.BitSet;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class lcsTest {

	
	@Test
	public void lcsTest1() {
		LCS sc = new LCS();
		assertEquals("GA", LCS.lcs("GGAC","GAGB"));
	}
	

	public static Stream<Arguments> stringTest() {
	    return Stream.of(
	        Arguments.of("", "GAGB"), 
	        Arguments.of("GGAC",""));
	    
	}
	
	@ParameterizedTest
	@MethodSource("stringTest")
	public void lcsTest2(String s1, String s2) {
		LCS sc= new LCS();
		LCS.lcs(s1, s2);
		 if(s1.length() < 0) {
			 fail("The length of the first parameter is less than 0");
		 }
		 if(s2.length() < 0) {
			 fail("The length of the  second parameter is less than 0");
		 } 
		 
		 
	}


}
