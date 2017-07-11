import React, { PureComponent } from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './react-table.css';

class AddTimeTable extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.renderEditable = this.renderEditable.bind(this);

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
    console.dir(this.state.data);
    console.dir(' Boom!! Render Bomb!!');
    return (
      <div className="table-wrap" style={{ margin: '20px' }}>
        <ReactTable
          data={this.state.data}
          columns={this.columns}
          defaultPageSize={6}
          showPageSizeOptions={false}
          showPagination={false}
        />
      </div>
    );
  }
}

export default AddTimeTable;
