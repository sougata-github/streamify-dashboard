//resubale table/data-grid component

export type Column<T> = {
  header: string;
  key: keyof T;
  render?: (value: T[keyof T]) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <div className="mt-5 md:mt-10 overflow-x-auto p-4 bg-transparent text-sm text-white/60 border-none">
      <table className="w-full border-collapse">
        <TableHeader columns={columns} />

        {data.map((row, index) => (
          <TableRow key={index} row={row} columns={columns} />
        ))}
      </table>
    </div>
  );
}

function TableHeader<T>({ columns }: { columns: Column<T>[] }) {
  return (
    <thead className="">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key as string}
            className="p-3 text-left cursor-pointer hover:bg-white/20 transition-all"
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableRow<T>({ row, columns }: { row: T; columns: Column<T>[] }) {
  return (
    <tbody>
      <tr className="border-b border-white/10 hover:bg-white/10 transition-all">
        {columns.map((column) => (
          <td key={column.key as string} className="p-3">
            {column.render
              ? column.render(row[column.key])
              : (row[column.key] as React.ReactNode)}
          </td>
        ))}
      </tr>
    </tbody>
  );
}
