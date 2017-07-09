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
        { class1: 'Lucy', class2: 'Marks', class3: 'Marks', class4: 'Marks', class5: 'Marks', class6: 'Marks', class7: 'Marks' },
        { T1: 'Lucy', T2: 'Marks', T3: 'Marks', T4: 'Marks', T5: 'Marks', T6: 'Marks', T7: 'Marks' },
        { R1: 'Lucy', R2: 'Marks', R3: 'Marks', R4: 'Marks', R5: 'Marks', R6: 'Marks', R7: 'Marks' },
      ],
    };

    this.columns = [
      {
        Header: '1st',
        accessor: 'class1',
        Cell: this.renderEditable,
      },
      {
        Header: '2nd',
        accessor: 'class2',
        Cell: this.renderEditable,
      },
      {
        Header: '3rd',
        accessor: 'class3',
        Cell: this.renderEditable,
      },
      {
        Header: '4th',
        accessor: 'class4',
        Cell: this.renderEditable,
      },
      {
        Header: '5th',
        accessor: 'class5',
        Cell: this.renderEditable,
      },
      {
        Header: '6th',
        accessor: 'class6',
        Cell: this.renderEditable,
      },
      {
        Header: '7th',
        accessor: 'class7',
        Cell: this.renderEditable,
      },
    ];
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
      >
        <select
          defaultValue={this.state.data[cellInfo.index][cellInfo.column.id]}
          onChange={(e) => {
            const data = [...this.state.data];
            data[cellInfo.index][cellInfo.column.id] = e.target.value;
            this.setState({ data });
          }}
        >
          <option>Not Set</option>
          <option>Marks</option>
          <option>Lucy</option>
          <option>vv</option>
        </select>
      </div >
    );
  }

  render() {
    console.dir(this.state.data);
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
