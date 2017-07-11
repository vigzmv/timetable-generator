import React from 'react';

class RenderData extends React.Component {
  render() {
    const details = this.props;
    let data;
    const value = details.data;
    if (value === 'teachers') {
      data = details.state.teachers[details.index];
    } else {
      data = details.state.rooms[details.index];
    }
    const removeButton = <button onClick={() => details.removeData(details.index)}>&times;</button>;
    return (
      <li >{data.name}<span>{removeButton}</span></li>
    );
  }
}

export default RenderData;
