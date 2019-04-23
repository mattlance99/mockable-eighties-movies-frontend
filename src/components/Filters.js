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

// <option value="1980">1980</option>
// <option value="1981">1981</option>
// <option value="1982">1982</option>
// <option value="1983">1983</option>
// <option value="1984">1984</option>
// <option value="1985">1985</option>
// <option value="1986">1986</option>
// <option value="1987">1987</option>
// <option value="1988">1988</option>
// <option value="1989">1989</option>
