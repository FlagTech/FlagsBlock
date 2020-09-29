#include "FlagJSON.h"

FlagJSON::FlagJSON() {}

String FlagJSON::getJSONDataAsString(JsonVariant &root, String path) {
  int slashPos = 0, prevSlashPos = -1;
  JsonVariant node = root;
  String nodeName;
  const char *currChar;
  int index;
  bool isNumber;

  while(true) {
    slashPos = path.indexOf("/", prevSlashPos + 1);
    if(slashPos != -1) {
      nodeName = path.substring(prevSlashPos + 1, slashPos);
    }
    else {
      nodeName = path.substring(prevSlashPos + 1);
    }
    currChar = nodeName.c_str();
    isNumber = true;
    while(*currChar != '\0') {
      if(!isDigit(*currChar)) {
        isNumber = false;
        break;
      }
      currChar++;
    }
    if(isNumber) {
      index = nodeName.toInt();
      if(slashPos == -1) {
        return node[index].as<String>();
      }
      node = node[index];
    }
    else {
      if(slashPos == -1) {
        return node[nodeName].as<String>();
      }
      node = node[nodeName];
    }
    prevSlashPos = slashPos;
  }
}

FlagJSON flagJSON = FlagJSON();