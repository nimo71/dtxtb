define(function() {
	var OAuth = function() {
	};
	
	OAuth.prototype.requestToken = function() {
		return {
			getStatus: function() { 
				return 200;
			}, 
			getContent: function() {
				return "";
			}
		};
	}
	
	return OAuth;
});