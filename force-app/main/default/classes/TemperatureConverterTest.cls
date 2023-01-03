@istest
public class TemperatureConverterTest 
{
	@istest static void testwarmtemp()
    {
        decimal abc = TemperatureConverter.Fahrenheittocelsius(70);
        system.assertEquals(21.11, abc);
    }
    
    @istest static void 	TestFreezingPoint()
    {
        decimal abc = TemperatureConverter.Fahrenheittocelsius(32);
        system.assertEquals(00, abc);
        //above is : system.assertEquals(expected value, actual value)
    }
    @istest static void testboilingpoint()
    {
        decimal abc = TemperatureConverter.Fahrenheittocelsius(212);
        system.assertEquals(10, abc, 'Boiling Point temperature is not expected');  // Curstomised error message
    }
    
    @istest static void testnegetivetemp()
    {
        decimal abc = TemperatureConverter.Fahrenheittocelsius(-10);
        system.assertEquals(-23.33, abc);    
    }
}