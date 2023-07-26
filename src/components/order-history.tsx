const OrderHistory = () => {
  return (
    <div
      id="order-history"
      className="tab-content overflow-scroll lg:overflow-auto "
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
          <tr>
            <td className="px-4">29/04/23</td>
            <td>AUDUSD</td>
            <td>Long</td>
            <td>0.66220</td>
            <td>0.25</td>
            <td>0.66350</td>
            <td>29/04/23</td>
            <td>-$18.72</td>
            <td>$247.21</td>
            <td>$532.05</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
