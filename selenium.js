var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://reddit.com');
driver.findElements(By.className("thing")).then(function(e){
  debugger
});

driver.quit();
