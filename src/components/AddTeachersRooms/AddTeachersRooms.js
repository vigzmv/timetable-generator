import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import Card, { CardContent } from 'material-ui/Card';
import List from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import RenderData from './RenderData';
import InputBox from './InputBox';
import base from '../../re-base';
import colors from './../../colors';
import './../AddTimeTable/react-table.css';
import { emptyStarterTimeTable } from '../../constants';

class AddTeacherRooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: {},
      rooms: {},
      data: this.props.match.path.slice(1),
      dialogOpen: false,
      index: -1,
      timeTableData: emptyStarterTimeTable,
    };

    this.columns = [
      {
        Header: '1st',
        accessor: 'sl1',
        Cell: this.renderCells,
      },
      {
        Header: '2nd',
        accessor: 'sl2',
        Cell: this.renderCells,
      },
      {
        Header: '3rd',
        accessor: 'sl3',
        Cell: this.renderCells,
      },
      {
        Header: '4th',
        accessor: 'sl4',
        Cell: this.renderCells,
      },
      {
        Header: '5th',
        accessor: 'sl5',
        Cell: this.renderCells,
      },
      {
        Header: '6th',
        accessor: 'sl6',
        Cell: this.renderCells,
      },
      {
        Header: '7th',
        accessor: 'sl7',
        Cell: this.renderCells,
      },
    ];
  }

  componentWillMount = () => {
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
  };

  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem('data', JSON.stringify(nextState));
  };

  componentWillUnmount = () => {
    base.removeBinding(this.ref1.endpoint);
    base.removeBinding(this.ref2.endpoint);
  };

  addTeacher = (data) => {
    const teachers = { ...this.state.teachers };
    teachers[`teacher-${Date.now()}`] = data;
    this.setState({ teachers });
  };

  addRoom = (data) => {
    const rooms = { ...this.state.rooms };
    rooms[`room-${Date.now()}`] = data;
    this.setState({ rooms });
  };

  removeData = (key) => {
    if (this.state.data === 'teachers') {
      this.removeTeacher(key);
    } else {
      this.removeRoom(key);
    }
  };

  removeTeacher = (key) => {
    const teachers = { ...this.state.teachers };
    teachers[key] = null;
    this.setState({ teachers });
  };

  removeRoom = (key) => {
    const rooms = { ...this.state.rooms };
    rooms[key] = null;
    this.setState({ rooms });
  };

  generateTT = (item, name) => {
    const selector = item === 'teachers' ? 1 : 2;
    const selector2 = item === 'teachers' ? 2 : 1;

    base
      .fetch('timeTables', {
        context: this,
        asArray: true,
      })
      .then((data) => {
        const generatedTT = [
          {
            sl1: ['', '', ''],
            sl2: ['', '', ''],
            sl3: ['', '', ''],
            sl4: ['', '', ''],
            sl5: ['', '', ''],
            sl6: ['', '', ''],
            sl7: ['', '', ''],
          },
          {
            sl1: ['', '', ''],
            sl2: ['', '', ''],
            sl3: ['', '', ''],
            sl4: ['', '', ''],
            sl5: ['', '', ''],
            sl6: ['', '', ''],
            sl7: ['', '', ''],
          },
          {
            sl1: ['', '', ''],
            sl2: ['', '', ''],
            sl3: ['', '', ''],
            sl4: ['', '', ''],
            sl5: ['', '', ''],
            sl6: ['', '', ''],
            sl7: ['', '', ''],
          },
          {
            sl1: ['', '', ''],
            sl2: ['', '', ''],
            sl3: ['', '', ''],
            sl4: ['', '', ''],
            sl5: ['', '', ''],
            sl6: ['', '', ''],
            sl7: ['', '', ''],
          },
          {
            sl1: ['', '', ''],
            sl2: ['', '', ''],
            sl3: ['', '', ''],
            sl4: ['', '', ''],
            sl5: ['', '', ''],
            sl6: ['', '', ''],
            sl7: ['', '', ''],
          },
          {
            sl1: ['', '', ''],
            sl2: ['', '', ''],
            sl3: ['', '', ''],
            sl4: ['', '', ''],
            sl5: ['', '', ''],
            sl6: ['', '', ''],
            sl7: ['', '', ''],
          },
          {
            sl1: ['', '', ''],
            sl2: ['', '', ''],
            sl3: ['', '', ''],
            sl4: ['', '', ''],
            sl5: ['', '', ''],
            sl6: ['', '', ''],
            sl7: ['', '', ''],
          },
        ];

        data.forEach((timeTable) => {
          timeTable.data.forEach((row, index) => {
            Object.keys(row).forEach((keys) => {
              if (row[keys][selector] === name) {
                generatedTT[index][keys] = [
                  timeTable.classInfo,
                  row[keys][0],
                  row[keys][selector2],
                ];
              }
            });
          });
        });

        this.setState({
          dialogOpen: true,
          index: name,
          timeTableData: generatedTT,
        });
      });
  };

  dialogOpen = (index) => {
    this.generateTT(this.state.data, this.state[this.state.data][index].name);
  };

  dialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  paperTitle = () =>
    (this.state.data === 'teachers'
      ? `Teacher's Name: ${this.state.index}`
      : `Room Number: ${this.state.index}`);

  name = () => {
    let data;
    const { teachers, rooms, index } = this.state;
    const value = this.state.data;
    if (value === 'teachers') {
      data = teachers[index];
    } else {
      data = rooms[index];
    }
    data = data || {
      name: '',
    };
    return data.name;
  };

  renderCells = (cellInfo) => {
    const { timeTableData } = this.state;
    return (
      <div style={{ backgroundColor: '#fafafa' }}>
        <div>{timeTableData[cellInfo.index][cellInfo.column.id][0] || 'Not Set'}</div>
        <br />
        <div>{timeTableData[cellInfo.index][cellInfo.column.id][1] || 'Not Set'}</div>
        <br />
        <div>{timeTableData[cellInfo.index][cellInfo.column.id][2] || 'Not Set'}</div>
        <br />
      </div>
    );
  };

  renderLi = () => {
    const { data, teachers, rooms } = this.state;
    const render = key => (
      <RenderData
        data={data}
        key={key}
        index={key}
        state={this.state}
        removeData={this.removeData}
        clickHandler={this.dialogOpen}
      />
    );

    if (data === 'teachers') {
      return Object.keys(teachers).map(render);
    }
    return Object.keys(rooms).map(render);
  };

  render() {
    const { data, dialogOpen, timeTableData } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Card style={{ width: '35%', margin: 20, marginLeft: '32.5%' }}>
          <CardContent>
            <Typography type="display2" style={{ marginLeft: '30%' }}>
              {data}
            </Typography>
            <hr />
            <InputBox addTeacher={this.addTeacher} addRoom={this.addRoom} data={data} />
            <List style={{ margin: 20 }}>{this.renderLi()}</List>
          </CardContent>
        </Card>

        <Dialog
          fullScreen
          open={dialogOpen}
          transition={<Slide direction="up" />}
          onRequestClose={this.dialogClose}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="contrast" onClick={this.dialogClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Paper style={{ margin: '20px', padding: '20px' }} elevation={2} square>
            <Typography type="title">
              {this.paperTitle()}
              <span className={classes.ttinfo}> {this.name()}</span>
            </Typography>
          </Paper>

          <div className="table-wrap" style={{ margin: '20px' }}>
            <ReactTable
              data={timeTableData}
              columns={this.columns}
              defaultPageSize={6}
              showPageSizeOptions={false}
              showPagination={false}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

const styleSheet = createStyleSheet('AddTeachersRooms', {
  appBar: {
    position: 'relative',
    backgroundColor: colors.pinkDark,
  },
  ttinfo: {
    color: 'grey',
    paddingRight: '250px',
  },
});

AddTeacherRooms.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AddTeacherRooms);
