#ifndef FLAG_HTTPCLIENT
#define FLAG_HTTPCLIENT

#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>

class FlagHTTPClient {
  private:
    BearSSL::WiFiClientSecure client;

    HTTPClient httpClient, httpsClient;
    bool secured;
    String response;
  public:
    FlagHTTPClient();
    bool begin(String url);
    int GET();
    String getString();
    void end(void);
    void setTimeout(uint16_t timeout);
};
#endif

