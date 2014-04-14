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
					exams: exams.map(function (exam) {
						exam.complete = false;
						return exam;
					})
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
				<ul className="">
					{this.props.exams.map(function (exam) {
						return (
							<li key={exam.id}>
								<Exam exam={exam} />
							</li>
						);
					}.bind(this))}
				</ul>
			);
		}
	});

	Actuarial.Views.Exam = React.createClass({
		displayName: "<Exam>",

		getInitialState: function () {
			return {
				exam: {}
			};
		},

		componentWillMount: function () {
			this.setState({ exam: this.props.exam });
		},

		componentWillReceiveProps: function (props) {
			this.setState({ exam: props.exam });
		},

		handleCompleteBtnClick: function (e) {
			e.preventDefault();
			var exam = JSON.parse(JSON.stringify(this.state.exam)); // clone exam to ensure imutability
			exam.complete = !exam.complete;
			this.setState({
				exam: exam
			});
		},

		render: function () {
			return (
				<div className="stuff">
				<div>{this.state.exam.name}</div>
				<div>{this.state.exam.sittings}</div>
				<div>{this.state.exam.dates.join(", ")}</div>
				<div>Complete: {this.state.exam.complete ? "Yes" : "No"}</div>
				<button onClick={this.handleCompleteBtnClick}>Complete</button>
				</div>
			);
		}
	});

	Actuarial.run();

	window.Actuarial = Actuarial;
})();