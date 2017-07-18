import React, { PureComponent } from 'react';
import { FormGroup , FormLabel , FormControl } from "material-ui/Form";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { createStyleSheet , withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './react-table.css';
import base from "./../base";

class AddTimeTable extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.renderEditable = this.renderEditable.bind(this);
    this.pushTimeTableInfo = this.pushTimeTableInfo.bind(this);

    this.state = {
      data: [
        { sl1: ['', '', ''], sl2: ['', '', ''], sl3: ['', '', ''], sl4: ['', '', ''], sl5: ['', '', ''], sl6: ['', '', ''], sl7: ['', '', ''] },
        { sl1: ['', '', ''], sl2: ['', '', ''], sl3: ['', '', ''], sl4: ['', '', ''], sl5: ['', '', ''], sl6: ['', '', ''], sl7: ['', '', ''] },
        { sl1: ['', '', ''], sl2: ['', '', ''], sl3: ['', '', ''], sl4: ['', '', ''], sl5: ['', '', ''], sl6: ['', '', ''], sl7: ['', '', ''] },
        { sl1: ['', '', ''], sl2: ['', '', ''], sl3: ['', '', ''], sl4: ['', '', ''], sl5: ['', '', ''], sl6: ['', '', ''], sl7: ['', '', ''] },
        { sl1: ['', '', ''], sl2: ['', '', ''], sl3: ['', '', ''], sl4: ['', '', ''], sl5: ['', '', ''], sl6: ['', '', ''], sl7: ['', '', ''] },
        { sl1: ['', '', ''], sl2: ['', '', ''], sl3: ['', '', ''], sl4: ['', '', ''], sl5: ['', '', ''], sl6: ['', '', ''], sl7: ['', '', ''] },
        { sl1: ['', '', ''], sl2: ['', '', ''], sl3: ['', '', ''], sl4: ['', '', ''], sl5: ['', '', ''], sl6: ['', '', ''], sl7: ['', '', ''] },
      ],
      classInfo: "",
      semester: "",
      shift: ""
    };

    this.columns = [
      {
        Header: '1st',
        accessor: 'sl1',
        Cell: this.renderEditable,
      },
      {
        Header: '2nd',
        accessor: 'sl2',
        Cell: this.renderEditable,
      },
      {
        Header: '3rd',
        accessor: 'sl3',
        Cell: this.renderEditable,
      },
      {
        Header: '4th',
        accessor: 'sl4',
        Cell: this.renderEditable,
      },
      {
        Header: '5th',
        accessor: 'sl5',
        Cell: this.renderEditable,
      },
      {
        Header: '6th',
        accessor: 'sl6',
        Cell: this.renderEditable,
      },
      {
        Header: '7th',
        accessor: 'sl7',
        Cell: this.renderEditable,
      },
    ];
  }

  pushTimeTableInfo(event){
    event.preventDefault();
    const { classInfo , semester , shift , data } = this.state;
    console.log(classInfo,semester,shift);
    const self= this;
    base.post(`timeTables/${Date.now()}` , {
      data: { data,
        classInfo,
        shift,
        semester },
      then(err){
        if(!err){
          self.timeTableForm.reset();
        }
      }
    });
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
      >
        <input
          style={{ backgroundColor: '#fafafa' }}
          onChange={(e) => {
            const data = [...this.state.data];
            data[cellInfo.index][cellInfo.column.id][0] = e.target.value;
            this.setState({ data });
          }}
          value={this.state.data[cellInfo.index][cellInfo.column.id][0]}
        />
        <br />

        <select
          defaultValue={this.state.data[cellInfo.index][cellInfo.column.id][1]}
          onChange={(e) => {
            const data = [...this.state.data];
            data[cellInfo.index][cellInfo.column.id][1] = e.target.value;
            this.setState({ data });
          }}
        >
          <option>Not Set</option>
        </select>
        <br />

        <select
          defaultValue={this.state.data[cellInfo.index][cellInfo.column.id][2]}
          onChange={(e) => {
            const data = [...this.state.data];
            data[cellInfo.index][cellInfo.column.id][2] = e.target.value;
            this.setState({ data });
          }}
        >
          <option>Not Set</option>
        </select>
      </div >
    );
  }

  render() {
    const { classes }= this.props;
    console.dir(this.state.data);
    console.dir(' Boom!! Render Bomb!!');
    return (
      <form onSubmit= { this.pushTimeTableInfo } ref= { input => this.timeTableForm = input } >
        <div className= { classes.form } >
          <FormLabel htmlFor= "time-table-info">
            <Typography type="display2" >&nbsp;Time Table Info</Typography>
          </FormLabel>
          <FormGroup id= "time-table-info" >
            <FormControl>
              <TextField
              required
              id= "classInfo"
              label= "ClassInfo"
              onChange= {(e) => this.setState({ classInfo: e.target.value })}
              className= { classes.input }
              marginForm
              />
              <TextField
              required
              id= "semester"
              label= "Semester"
              onChange= {(e) => this.setState({ semester: e.target.value })}
              className= { classes.input }
              marginForm
              />
              <TextField
              required
              id= "shift"
              label= "Shift"
              onChange= {(e) => this.setState({ shift: e.target.value })}
              className= { classes.input }
              marginForm
              />
            </FormControl>
          </FormGroup>
        </div>
        <div className="table-wrap" style={{ margin: '20px' }}>
          <ReactTable
            data={this.state.data}
            columns={this.columns}
            defaultPageSize={6}
            showPageSizeOptions={false}
            showPagination={false}
          />
        </div>
        <Button raised color= "primary" type= "submit" className= { classes.button } >
          <Typography type= "button"  >&nbsp;Save</Typography>
        </Button>
      </form>
    );
  }
}

const styleSheet= createStyleSheet("AddTimeTable" , theme => ({
  input: {
    margin: theme.spacing.unit
  },
  form: {
    margin: 50
  },
  button: {
    margin: 25
  }
}));

AddTimeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AddTimeTable);
