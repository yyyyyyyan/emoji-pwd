function generatePassword() {
	var url = "https://raw.githubusercontent.com/yanorestes/emoji-pwd/master/emoji.json"
	var request = new XMLHTTPRequest();
	request.open('GET', url, true);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			if (request.status == 200) {
				var emojis = JSON.parse(request.responseText);
				var password = "";
				for (i=1; i<=27; i++) {
					var randomEmoji = emojis[Math.floor(Math.random()*items.length)];
					password += randomEmoji;
				}
				console.log(password);
			}
		}
	}
}