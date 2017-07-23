import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';

class RenderData extends React.Component {
  render() {
    const { state, removeData, index, clickHandler } = this.props;
    let data;
    const value = this.props.data;
    if (value === 'teachers') {
      data = state.teachers[index];
    } else {
      data = state.rooms[index];
    }
    const removeButton = <button onClick={() => removeData(index)}> &times;</button>;
    return (
      <ListItem
        button
        onClick={() => clickHandler(index)}
      >
        <ListItemText primary={data.name} />
        <span>
          {removeButton}
        </span>
      </ListItem>
    );
  }
}

export default RenderData;
