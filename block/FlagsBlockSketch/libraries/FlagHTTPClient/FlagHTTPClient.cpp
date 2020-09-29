#include "FlagHTTPClient.h"

FlagHTTPClient::FlagHTTPClient() {

  // client.setFingerprint(fingerprint);
  client.setInsecure();
}

bool FlagHTTPClient::begin(String url) {
  url.trim();
  if(url.startsWith("https")) {
    secured = true;
    return httpsClient.begin(client, url);
  }
  else {
    secured = false;
    return httpClient.begin(url);
  }
}

int FlagHTTPClient::GET(void) {
  int statusCode = (secured) ? httpsClient.GET() : httpClient.GET();
  if(statusCode > 0)
    response =  (secured) ? httpsClient.getString() : httpClient.getString();
  if(secured)
    httpsClient.end();
  else
    httpClient.end();
  return statusCode;
}

String FlagHTTPClient::getString(void) {
  return response;
}

void FlagHTTPClient::end(void) {
}

void FlagHTTPClient::setTimeout(uint16_t timeout) {
  if(secured)
    httpsClient.setTimeout(timeout);
  else
    httpClient.setTimeout(timeout);
}

