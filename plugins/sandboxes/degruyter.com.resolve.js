var reChapterLink = /href="(\/downloadpdf\/books\/[^"]+)"/img;
var reCoverLink = /src="([^"]+cover[^"]+\.jpg)"/img;
var urls = [];
function processText(text) {
	var m;
	if((m = reCoverLink.exec(text))) {
		urls.push(m[1]);
	}
	while((m = reChapterLink.exec(text))) {
		urls.push(m[1]);
	}
	for (var url of urls) {
		queueDownload(url);
	}
	setURL(null);
	finish();
}
processText(responseText);
