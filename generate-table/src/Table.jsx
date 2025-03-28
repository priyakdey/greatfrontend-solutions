function Table({ table }) {

  return (
    <>
      {
        table.length !== 0 && (
          <table className="App-table">
            <tbody>
              {
                table.map((row, rowIndex) => {
                  return (
                    <tr key={rowIndex} className="App-table-row">
                      {row.map((cell, colIndex) => {
                        return (
                          <td key={colIndex} className="App-table-col">
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        )
      }
    </>
  );

}

export default Table;