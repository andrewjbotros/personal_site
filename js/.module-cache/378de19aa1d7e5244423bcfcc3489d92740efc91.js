/** @jsx React.DOM */
// jsx --watch src/js/ js/

(function () {
	"use strict";

	var Actuarial = {
		Views: {},
		run: function () {
			var el = document.getElementById("main");

			var view = React.renderComponent(
				Actuarial.Views.Main({}),
				el
			);

			var xhr = new XMLHttpRequest();
			xhr.onload = function () {
				var exams = JSON.parse(this.responseText);
				view.setProps({
					exams: exams
				});
			};
			xhr.open("get", "./exams.json", true);
			xhr.send();
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