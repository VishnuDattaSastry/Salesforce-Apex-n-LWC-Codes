public class printPyramid {
    public static void pyramidPattern() {
        for(integer i=0; i<=4; i++) {
            string s = ' ';
            for (integer j=0; j<=8; j++) {
                if (j>=4-i && j<=4+i) {
                    s = s + '*';
                } else {
                    s = s+' ';
                }
            } system.debug(s);
        }
    }
}