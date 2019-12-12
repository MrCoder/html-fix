chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});
document.body.innerHTML = document.body.innerHTML.replace(/&amp;lt;/g, '&lt;');
document.body.innerHTML = document.body.innerHTML.replace(/&amp;gt;/g, '&gt;');
document.body.innerHTML = document.body.innerHTML.replace(/<span class="hljs-variable">&amp;lt<\/span>;/g, '&lt;');
document.body.innerHTML = document.body.innerHTML.replace(/<span class="hljs-variable">&amp;gt<\/span>;/g, '&gt;');
document.body.innerHTML = document.body.innerHTML.replace(/&amp;<span class="hljs-keyword">lt<\/span>;/g, '&lt;');
document.body.innerHTML = document.body.innerHTML.replace(/&amp;<span class="hljs-keyword">gt<\/span>;/g, '&gt;');