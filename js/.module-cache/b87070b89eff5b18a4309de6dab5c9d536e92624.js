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
			var Exam = Actuarial.Views.Exam;

			return (
				React.DOM.ul( {className:""}, 
					this.props.exams.map(function (exam) {
						return (
							React.DOM.li( {key:exam.id}, 
								Exam( {exam:exam} )
							)
						);
					}.bind(this))
				)
			);
		}
	});

	Actuarial.Views.Exam = React.createClass({
		displayName: "<Exam>",

		render: function () {
			return (
				React.DOM.div(null, 
				React.DOM.span(null, this.props.exam.name)
				)
			);
		}
	});

	Actuarial.run();

	window.Actuarial = Actuarial;
})();