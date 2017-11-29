import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';

class RenderData extends React.Component {
  render() {
    const {
      state, removeData, index, clickHandler,
    } = this.props;
    let data;
    const value = this.props.data;
    if (value === 'teachers') {
      data = state.teachers[index];
    } else {
      data = state.rooms[index];
    }
    const removeButton = (
      <button onClick={() => removeData(index)}>
        {' '}
        <Typography type="button">&times;</Typography>
      </button>
    );
    return (
      <ListItem button>
        <ListItemText primary={data.name} onClick={() => clickHandler(index)} />
        <span>{removeButton}</span>
      </ListItem>
    );
  }
}

export default RenderData;
