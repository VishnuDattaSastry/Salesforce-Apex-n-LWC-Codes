public class daysOnNumbers {
    public static string getDay(integer dayNumber){
        String dayName='';
        switch on dayNumber {
            when 0 {dayName = 'Sunday';}
            when 1 {dayName = 'Monday';}
            when 2 {dayName = 'Tuesday';}
            when 3 {dayName = 'Wednesday';}
            when 4 {dayName = 'Thursday';}
            when 5 {dayName = 'Friday';}
            when 6 {dayName = 'Saturday';}
            when else {dayName = 'Number must be between 0 to 6';}
        } return dayName;
    } 
}