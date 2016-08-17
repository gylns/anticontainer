var reChapterLink = /href="chapter\.jsf[^"]*cid=([^"]+)&[^"]*"/img;
var reCoverLink = /src="(http:\/\/ebooks\.cambridge\.org\/content\/[^"]+\.jpg)"/img;
var urls = [];
function processText(text) {
	var m;
	if((m = reCoverLink.exec(text))) {
		urls.push(m[1]);
	}
	while((m = reChapterLink.exec(text))) {
		urls.push("http://ebooks.cambridge.org/open_pdf/"+m[1]);
	}
	for (var url of urls) {
		queueDownload(url);
	}
	setURL(null);
	finish();
}
processText(responseText);
