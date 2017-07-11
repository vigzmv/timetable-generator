import React from "react";
import InputBox from "./InputBox";
import base from "../base";
import RenderData from "./RenderData";

class App extends React.Component{
  constructor(props){
    super(props);
    this.addTeacher=this.addTeacher.bind(this);
    this.addRoom=this.addRoom.bind(this);
    this.renderLi=this.renderLi.bind(this);
    this.removeData=this.removeData.bind(this);
    this.removeRoom=this.removeRoom.bind(this);
    this.removeTeacher=this.removeTeacher.bind(this);
    this.state={
      teachers:{},
      rooms:{},
      data:(this.props.match.path).slice(1)
    }
  }

  addTeacher(data){
    const teachers={...this.state.teachers};
    teachers[`teacher-${Date.now()}`]=data;
    this.setState({teachers});
  }

  addRoom(data){
    const rooms={...this.state.rooms};
    rooms[`room-${Date.now()}`]=data;
    this.setState({rooms});
  }

  removeData(key){
    if(this.state.data==="teachers")
      this.removeTeacher(key);
    else
      this.removeRoom(key);
  }

  removeTeacher(key){
    const teachers={...this.state.teachers};
    teachers[key]=null;
    this.setState({teachers});
  }

  removeRoom(key){
    const rooms={...this.state.rooms};
    rooms[key]=null;
    this.setState({rooms});
  }

  componentWillUpdate(nextProps,nextState){
    localStorage.setItem("data",JSON.stringify(nextState));
  }

  componentWillMount(){
    this.ref1=base.syncState("teachers",{
      context:this,
      state:"teachers"
    });

    this.ref2=base.syncState("rooms",{
      context:this,
      state:"rooms"
    });

    const localStorageRef=localStorage.getItem("data");
    if(localStorageRef){
      this.setState({
        teachers:JSON.parse(localStorageRef).teachers,
        rooms:JSON.parse(localStorageRef).rooms
      });
    }
  }

  componentWillUnmount(){
    base.removeBinding(this.ref1.endpoint);
    base.removeBinding(this.ref2.endpoint);
  }

  renderLi(){
    const { data } = this.state;
    if(data==="teachers")
       return Object.keys(this.state.teachers).map(key=><RenderData data={data} key={key} index={key} state={this.state} removeData={this.removeData} />);
    else
      return Object.keys(this.state.rooms).map(key=><RenderData data={data} key={key} index={key} state={this.state} removeData={this.removeData} />);
  }

  render(){
      const { data } = this.state;
    return(
        <div>
          <h1>{data}</h1>
          <InputBox addTeacher={this.addTeacher} addRoom={this.addRoom} data={data} />
          <ul>{this.renderLi()}</ul>
        </div>
    );
  }
}

export default App;