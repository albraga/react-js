var CommentBox = React.createClass({
    render: function() {
	return (
		<div className="commentBox">
		Oi mundo! Isso aqui é um CommentBox.
		</div>
	);
    }
});

ReactDOM.render(
	<CommentBox/>,
    document.getElementById('content')
);
