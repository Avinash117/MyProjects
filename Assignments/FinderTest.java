import static org.junit.Assert.*;

import java.util.stream.Stream;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class FinderTest {

	
	public static Stream<Arguments> findertest() {
	    return Stream.of(
	        Arguments.of(new int[]{1, 3, 5, 9, 2, 8}, 2));
	}
	
	@ParameterizedTest
	@MethodSource("findertest")
	public void firstElementtest(int [] x, int ele) {
		 Finder sq = new Finder();
		 assertEquals(4, sq.firstElement(x, ele));
		
	}
	


}
