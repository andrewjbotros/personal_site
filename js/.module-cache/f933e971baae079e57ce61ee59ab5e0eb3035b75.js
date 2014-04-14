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

		getDefaultProps: function () {
			return {
				exams: []
			};
		},

		render: function () {
			return (
				React.DOM.ul( {className:""}, 
					this.props.exams.map(function (exam) {
						return (
							React.DOM.li( {key:exam.id}, 
								exam.name
							)
						);
					}.bind(this))
				)
			);
		}
	});

	Actuarial.run();

	window.Actuarial = Actuarial;
})();