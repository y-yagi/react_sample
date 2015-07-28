var Logger = {
  logging(str) {
    console.log(str);
  },
  componentDidMount() {
    this.logging("component did mount");
  }
};

var Hello = React.createClass({
  mixins: [Logger],
  render: function() {
      return <div>Hello {this.props.name}</div>;
  }
});

