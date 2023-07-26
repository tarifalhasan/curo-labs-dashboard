const OpenOrders = () => {
  return (
    <div
      id="open-orders"
      className="tab-content overflow-scroll md:overflow-auto"
    >
      <table className="curo-table w-full table-auto">
        <thead className="border-b">
          <tr className="text-sm">
            <th className="font-light px-4 py-4" align="left">
              Date
            </th>
            <th className="font-light py-4" align="left">
              Symbol
            </th>
            <th className="font-light py-4" align="left">
              Position
            </th>
            <th className="font-light py-4" align="left">
              Entry
            </th>
            <th className="font-light py-4" align="left">
              Size
            </th>
            <th className="font-light py-4" align="left">
              Exit
            </th>
            <th className="font-light py-4" align="left">
              Exit Date
            </th>
            <th className="font-light py-4" align="left">
              Fees
            </th>
            <th className="font-light py-4" align="left">
              P/L
            </th>
            <th className="font-light py-4" align="left">
              ROI
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td colSpan={10}>No open orders</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OpenOrders;
