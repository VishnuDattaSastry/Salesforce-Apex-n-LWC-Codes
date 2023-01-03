public with sharing class newsController {
    @AuraEnabled
    public static map<String, Object> retrieveNews() {
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f8738ab1bd94e77ad196a9d88528ec9');
        httpRequest.setMethod('GET');
        
        map<String, Object> newsJsonData = new map<String, Object>();
        String strResponse = null;

        try {
            Http http = new Http();
            HttpResponse httpResponse = http.send(httpRequest); 
            // Send is a method of HTTP that sends HTTP request and return the response. 
            if (httpResponse.getStatusCode() == 200) { // 200 is for success
                strResponse = httpResponse.getBody();
            } else {
                throw new CalloutException(httpResponse.getBody());
            }
        } catch (Exception ex) {
            throw ex;
        }
        if(!String.isBlank(strResponse)){
            newsJsonData = (Map<String, Object>)JSON.deserializeUntyped(strResponse);
        }
        if(!newsJsonData.isEmpty()) {
            return newsJsonData;
        } else{
            return null;
        }
    }
}