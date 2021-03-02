const React = require("react");
const HeadComponents = [
	<script
		data-ad-client="ca-pub-7655503975038311"
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
	></script>
];

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) =>
	setHeadComponents(HeadComponents);
