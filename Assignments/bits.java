import java.util.BitSet;

public class bits {
	  public static void main(String args[]) {
	BitSet bits1 = new BitSet(10);
    
    for(int i = 0; i <= 10; i++) 
    {
    	bits1.set(i);
       
    }
    
    System.out.println("Bits in array are: "+ bits1);
	  
    System.out.println("Check if bit is in bits1 array:");
	System.out.println(bits1.get(3));
	
	System.out.println("Flip true value of the bit 3 to false");
	bits1.flip(3);
	System.out.println("Removing 3:" + bits1);
	
	
	  }
}
