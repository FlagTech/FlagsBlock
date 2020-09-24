//----------------------Main Page--------------------
static const char mainPage[] PROGMEM = u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Testing Page</title>
  </head>
  <body>
  <h1 align="center"><font size="3">The Self-Driving Car by Flag Tech</br></br></h1>
  <div align="center"><font size="20">
    <a href='/Race?output=L'>↶Left↶</a> </br></br>
    <a href='/Race?output=S'>●Stop●</a> </br></br>
    <a href='/Race?output=R'>↷Right↷</a> </br></br>
  </div>
  </body>
  </html>
)";

//----------------------Error Page--------------------
static const char errorPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>URL Error</title>
  </head>
  <body>
  <h1 align="center">URL error, <a href='/'>go back</a></h1>
  </body>
  </html>
)";
//----------------------Setting Page--------------------
static const char settingPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Settings</title>
  </head>
  <body>
  <h1 align="center">No settings required, <a href='/'>go back</a></h1>
  </body>
  </html>
)";
//---------Dont delete folling line------------
#define WEBPAGE_IN_PROGMEM
