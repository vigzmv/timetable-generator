import React from 'react';
import InputBox from './InputBox';
import base from '../../re-base';
import RenderData from './RenderData';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTeacher = this.addTeacher.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.renderLi = this.renderLi.bind(this);
    this.removeData = this.removeData.bind(this);
    this.removeRoom = this.removeRoom.bind(this);
    this.removeTeacher = this.removeTeacher.bind(this);

    this.state = {
      teachers: {},
      rooms: {},
      data: (this.props.match.path).slice(1),
    };
  }

  componentWillMount() {
    this.ref1 = base.syncState('teachers', {
      context: this,
      state: 'teachers',
    });

    this.ref2 = base.syncState('rooms', {
      context: this,
      state: 'rooms',
    });

    const localStorageRef = localStorage.getItem('data');

    if (localStorageRef) {
      this.setState({
        teachers: JSON.parse(localStorageRef).teachers,
        rooms: JSON.parse(localStorageRef).rooms,
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('data', JSON.stringify(nextState));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref1.endpoint);
    base.removeBinding(this.ref2.endpoint);
  }

  addTeacher(data) {
    const teachers = { ...this.state.teachers };
    teachers[`teacher-${Date.now()}`] = data;
    this.setState({ teachers });
  }

  addRoom(data) {
    const rooms = { ...this.state.rooms };
    rooms[`room-${Date.now()}`] = data;
    this.setState({ rooms });
  }

  removeData(key) {
    if (this.state.data === 'teachers') {
      this.removeTeacher(key);
    } else {
      this.removeRoom(key);
    }
  }

  removeTeacher(key) {
    const teachers = { ...this.state.teachers };
    teachers[key] = null;
    this.setState({ teachers });
  }

  removeRoom(key) {
    const rooms = { ...this.state.rooms };
    rooms[key] = null;
    this.setState({ rooms });
  }

  renderLi() {
    const { data } = this.state;
    if (data === 'teachers') {
      return Object.keys(this.state.teachers)
        .map(key => (<RenderData
          data={data}
          key={key}
          index={key}
          state={this.state}
          removeData={this.removeData}
        />),
      );
    }
    return Object.keys(this.state.rooms)
      .map(key =>
        (<RenderData
          data={data}
          key={key}
          index={key}
          state={this.state}
          removeData={this.removeData}
        />),
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Card style={{ width: '35%', margin: 20, marginLeft: 430 }}>
          <CardContent>
            <h1 style={{marginLeft: 150 }}>{data}</h1>
            <hr></hr>
            <InputBox addTeacher={this.addTeacher} addRoom={this.addRoom} data={data} />
            <List style={{margin: 20}}>{this.renderLi()}</List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;
