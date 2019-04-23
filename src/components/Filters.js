import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <select
            name={this.props.name}
            id="type"
            onChange={this.props.onChangeType}
          >
            <option value="none" />
            {this.props.items.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
