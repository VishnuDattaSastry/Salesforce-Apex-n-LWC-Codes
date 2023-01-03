public class Fitness {
    public static Decimal calculateBmi(Decimal WeightInKgs, Decimal HeightInMeter) {
        decimal result = WeightInKgs / (HeightInMeter * HeightInMeter); 
        return result;
    } 
    
    public static Decimal calculatePace(Decimal distanceKms, Decimal timeInMinutes) {
        decimal hour1 = timeInMinutes /60;
        decimal pace = distanceKms / hour1; 
        return pace;   
    }
}