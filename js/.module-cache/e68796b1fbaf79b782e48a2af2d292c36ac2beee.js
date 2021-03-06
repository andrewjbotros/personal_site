/** @jsx React.DOM */
// jsx --watch src/js/ js/

(function () {
	"use strict";

	var Actuarial = {
		Views: {},
		run: function () {
			var el = document.getElementById("main");

			React.renderComponent(
				Actuarial.Views.Main({}),
				el
			);

			var xhr = new XMLHTTPRequest();
		}
	};

	Actuarial.Views.Main = React.createClass({
		displayName: "<Main>",

		render: function () {
			return React.DOM.h1(null, "Hello");
		}
	});

	Actuarial.run();

	window.Actuarial = Actuarial;
})();