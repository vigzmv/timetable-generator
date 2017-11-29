import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class TimeTablelList extends Component {
  render() {
    const { data, clickHandler } = this.props;
    console.log(data[0]);
    if (Object.keys(data[0]).length === 0) {
      return (
        <List>
          <ListItem button>No Timetables Saved</ListItem>
        </List>
      );
    }

    return (
      <List>
        {data.map(
          (item, index) => (
            <div key={index} onClick={clickHandler.bind(this, index)}>
              <ListItem button>
                <ListItemText
                  primary={`${item.classInfo} ${item.semester}`}
                  secondary={`${item.shift} shift`}
                />
              </ListItem>

              <Divider light />
            </div>
          ),
          this,
        )}
      </List>
    );
  }
}

TimeTablelList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TimeTablelList;
