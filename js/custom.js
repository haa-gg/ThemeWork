//Add read more button to video section
console.log('hello world!');
jQuery('.vid-feed').append(
"<div class=\"read-more\"> <a href=\"/videos\">read more</a></div>"
	);

//Initialize popover.js
jQuery(function () {
  jQuery('[data-toggle="popover"]').popover()
})