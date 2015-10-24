'use strict';

var webdriver = require('selenium-webdriver'), // includes the web driver module
  By = webdriver.by,
  until= webdriver.until;

var driver = new webdriver.Builder().withCapabilities( // creates an instance of web driver
  webdriver.Capabilities.firefox() // opens firefox
).build();

driver.get("http://iconosquare.com");
driver.findElement(By.class("getSearch")).sendKeys("dbgameday");
driver.findElement(By.id("startSearch")).click()
