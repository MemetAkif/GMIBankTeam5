$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US03_CreatPassword.feature");
formatter.feature({
  "name": "NewPassword",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US03CreateNewPassword"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User Enter 1 lowercase letter of at least 4 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03CreateNewPassword"
    },
    {
      "name": "@Enterlowercse1"
    }
  ]
});
formatter.step({
  "name": "User is on GMIBank Login pageGiven",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US03CreatPassword.user_is_on_GMIBank_Login_pageGiven()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills in the New Password textbox with valid \"123k\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US03CreatPassword.user_fills_in_the_New_Password_textbox_with_valid(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills in the New password confirmation textbox with valid \"123k\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US03CreatPassword.user_fills_in_the_New_password_confirmation_textbox_with_valid(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify red messages under the box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US03CreatPassword.verify_red_messages_under_the_box()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027invalid-feedback\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HROSTU9\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\moi\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:56763}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: eeccc2c19a68871b85a431706b7615a2\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027invalid-feedback\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.US03CreatPassword.verify_red_messages_under_the_box(US03CreatPassword.java:42)\r\n\tat ✽.verify red messages under the box(file:///C:/Users/moi/IdeaProjects/GMIBankTeam5/src/test/resources/features/US03_CreatPassword.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify Password strength",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US03CreatPassword.verify_Password_strength()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
});