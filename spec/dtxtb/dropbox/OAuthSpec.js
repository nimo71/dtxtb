define(
[
	'dtxtb/dropbox/OAuth'
], 
function(OAuth, OAuthToken) {

	describe("Dropbox OAuth", function() {
		
		it("Should retrieve a request token for authorization", function() {
			var response = new OAuth().requestToken();
			
			expect(response.getStatus()).toBe(200);
			expect(response.getContent()).toContain("oauth_token_secret");
			expect(response.getContent()).toContain("oauth_token");
//			"oauth_token_secret=b9q1n5il4lcc&oauth_token=mh7an9dkrg59"
		});

	});
});