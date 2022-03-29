import static org.junit.Assert.*;

import java.util.BitSet;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;

public class bitsTest {

	private BitSet bits1;
	
	
	@BeforeEach
	public void setupFixture() {
		bits1 = new BitSet(5);
		bits1.set(1);
		bits1.set(2);
		bits1.set(3);
		bits1.set(4);
		bits1.set(5);
}
	// T, T, T
	@Test
	public void testBaseCase() {
		setupFixture();
		assertTrue(bits1.get(4));
		
		bits1.set(6);
		assertEquals("{1, 2, 3, 4, 5, 6}", bits1.toString());
	
		
		bits1.flip(6);
		assertEquals("{1, 2, 3, 4, 5}", bits1.toString());

	}
	
	// F, T, T
	@Test
	public void testC_1() {
		setupFixture();
		assertFalse(bits1.get(40));
		
		bits1.set(6);
		assertEquals("{1, 2, 3, 4, 5, 6}", bits1.toString());
		
		bits1.flip(6);
		assertEquals("{1, 2, 3, 4, 5}", bits1.toString());
		
	}
	
	// T, F, T
	@Test
	public void testC_2() {
		setupFixture();
		assertTrue(bits1.get(4));
		
		bits1.set(6);
		bits1.set(6, false);
		assertFalse(bits1.get(6));
		
		bits1.flip(6);
		assertEquals("{1, 2, 3, 4, 5, 6}", bits1.toString());
	}
	
	//T, T, F
	@Test
	public void testC_3() {
		setupFixture();
		assertTrue(bits1.get(4));
		
		bits1.set(6);
		assertEquals("{1, 2, 3, 4, 5, 6}", bits1.toString());
	
		bits1.set(7);
		bits1.flip(7);
		assertFalse(bits1.get(7));

	}	
	
	
	


}
