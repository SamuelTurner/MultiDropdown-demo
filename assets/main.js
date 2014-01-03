/* @import(Clingy-Footer/clingy-footer-1.2.0.js) */
/* @import(SamuelTurnerUI/js/samuelturnerui-1.0.0.js) */

// Invoke Clingy-Footer
$(document).ready(function(){
	$(document).clingyFooter({
		pageSelector : '#page',
		pageContentSelector : '#page-body',
		footerSelector: "#page-footer-wrapper"
	});
});

// Google tracking code
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-21961367-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();