var Avatar = React.createClass({
  propTypes: {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
  },
  render() {
    var src = `/img/avatar/${this.props.id}.png`;
    return (
      <div>
        <img src={src} width={this.props.width} height={this.props.height} alt={this.props.alt} />
        <span>{this.props.name}</span>
      </div>
    );
  }
});
