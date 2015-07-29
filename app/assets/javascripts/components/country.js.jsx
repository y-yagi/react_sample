var CountryDropdown = React.createClass({
  getInitialState: function () {
    return {
      showOptions: false
    };
  },

  render: function () {
    var options;
    if (this.state.showOptions) {
      options = <countryoptions></countryoptions>;
    }

    return (
      <div className="dropdown" onClick={this.handleClick}>
        <label> 国を選択してください </label>
        {options}
      </div>
    );
  },

  handleClick: function () {
    this.setState({ showOptions: true });
  }
});
