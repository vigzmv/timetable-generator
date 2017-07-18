import React , { Component } from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { createStyleSheet , withStyles } from "material-ui/styles";
import Dialog from "material-ui/Dialog";
import PropTypes from "prop-types";
import base from "./../base";
import TimeTablelList from "./TimeTableList";
import Slide from "material-ui/transitions/Slide";
import ReactTable from "react-table";
import "react-table/react-table.css";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";
import colors from "./../../colors";
import "./../AddTimeTable/react-table.css";

class SavedTimeTables extends Component{
  constructor(){
      super();

      this.fetchTimeTables= this.fetchTimeTables.bind(this);
      this.dialogOpen= this.dialogOpen.bind(this);
      this.dialogClose= this.dialogClose.bind(this);
      this.renderCells= this.renderCells.bind(this);

      this.state= {
        data: [{}],
        dialogOpen:false,
        index: 0
      }

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

  renderCells(cellInfo){
    const { data , index } = this.state;
    return (
      <div style= {{ backgroundColor: "#fafafa" }} >
        <div>{data[index].data[cellInfo.index][cellInfo.column.id][0]}</div>
        <br />
        <div>Not Set</div>
        <br />
        <div>Not Set</div>
        <br />
      </div>
    );
  }

  componentWillMount(){
    this.fetchTimeTables();
  }

  fetchTimeTables(){
    base.fetch('timeTables', {
      context: this,
      asArray: true
    }).then(data => {
      this.setState({ data })
    }).catch(error => {
      //handle error
    });
  }

  dialogOpen(index){
    this.setState({ dialogOpen: true , index });
  }

  dialogClose(){
    this.setState({ dialogOpen: false });
  }

  render(){
    const { classes }= this.props;
    const { data , dialogOpen , index }= this.state;
    return(
      <Grid container className= {classes.container} >
        <Grid item >
          <Typography type= "title" className= {classes.title} >Time Tables</Typography>
          <div>
            <TimeTablelList data= { data } clickHandler= { this.dialogOpen } />
            <Dialog
              fullScreen
              open= { dialogOpen }
              transition= { <Slide direction= "up" /> }
              onRequestClose= { this.dialogClose }
            >
              <AppBar className= { classes.appBar } >
                <Toolbar>
                  <IconButton color= "contrast" onClick= {this.dialogClose} aria-label= "Close" >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <div className="table-wrap" style={{ margin: '20px' }}>
                <ReactTable
                  data={data[index].data}
                  columns={this.columns}
                  defaultPageSize={4}
                  showPageSizeOptions={true}
                  showPagination={true}
                />
              </div>
            </Dialog>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const styleSheet = createStyleSheet("SavedTimeTables" , theme => ({
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  appBar: {
    position: "relative",
    backgroundColor: colors.pinkDark
  }
}));

SavedTimeTables.propTypes= {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(SavedTimeTables);
