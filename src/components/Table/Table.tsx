import React from 'react';

interface IColumn {
  key: string;
  dataIndex: string;
  title: string;
}

interface ITableProps {
  data: any[];
  columns: IColumn[];
  keyIndex?: string;
  onRowCLick?: (entity: any) => void;
}

const Table: React.FC<ITableProps> = (props) => {
  const { data, columns, keyIndex = 'id', onRowCLick } = props;

  const renderHead = () => (
    <thead className="bg-gray-50">
      <tr key="head">
        {columns.map((column) => (
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            key={column.key}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderData = () => (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((item) => (
        <tr
          key={item[keyIndex]}
          className="cursor-pointer"
          onClick={() => onRowCLick && onRowCLick(item)}
        >
          {columns.map((column) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" key={column.key}>
              {item[column.dataIndex]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              {renderHead()}
              {renderData()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
