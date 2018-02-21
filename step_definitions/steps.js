const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

Given(/^I open the Modus Create labs page$/, () => {
  return client
    .url('http://labs.moduscreate.com/');
});

Then(/^the title is "([^"]*)"$/, (text) => {
  return client.assert.title(text);
});

Then(/^the GitHub button exists$/, () => {
  return client.assert.visible('a.button.github');
});
