var reURL = /^.*\/books\/([^/]*)\/([^/]*)/i;
var m = reURL.exec(baseURL);
var p1 = m[1];
var p2 = m[2];
var url = "http://digital-library.theiet.org/deliver/fulltext/books/" +
    p1 + "/" + p2 + "/" + p2.toUpperCase() + ".pdf?itemId=/content/books/" +
    p1 + "/" + p2 + "&mimeType=pdf&isFastTrackArticle=";
setURL(url);
finish();