module.exports = function() {
	this.Given(/^I open the Modus Create home page$/, function(callback) {
		this
			.url(this.launch_url)
			.waitForElementVisible('body', 1000)

		callback(null, 'pending');
	})

	this.Then(/^the title is "([^"]*)"$/, function(title, callback) {
		this.assert.title(title);
		callback(null, 'pending');
	})

	this.Then(/^the About Page link exists$/, function(callback) {
		this.assert.elementPresent('a[href="/about"]')
		callback(null, 'pending');
	})
}