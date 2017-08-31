import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

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
    const removeButton = <IconButton aria-label="Delete" onClick={ () => removeData(index)} ><DeleteIcon /></IconButton>;
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
