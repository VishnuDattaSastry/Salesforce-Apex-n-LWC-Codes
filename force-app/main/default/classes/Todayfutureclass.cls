public class Todayfutureclass 
{

    public todayfutureclass ()
    {
        showernready ();
        breakfast();
        CarServicing();
        Movie();
    }
    
    Public static void showernready () 
    {
        system.debug('I ll have shower and get ready');
    }
    Public Static void breakfast()
    {
        system.debug('having breakfast');
    }
    @Future
    Public Static void CarServicing()
    {
        system.debug('I ll give my car for repair at showroom');
    }
    Public Static void Movie()
    {
        system.debug('I ll go to movie');
    }

}