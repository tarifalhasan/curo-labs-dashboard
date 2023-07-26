const OpenPosition = () => {
  return (
    <div>
      {" "}
      <div
        id="open-positions"
        className="tab-content overflow-scroll lg:overflow-auto"
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
                TP
              </th>
              <th className="font-light py-4" align="left">
                SL
              </th>
              <th className="font-light py-4" align="left">
                Liquidation
              </th>
              <th className="font-light py-4" align="left">
                Fees
              </th>
              <th className="font-light py-4" align="left">
                P/L
              </th>
              <th className="font-light py-4" align="left">
                Action
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
              <td>0.66200</td>
              <td>N/A</td>
              <td>-$18.72</td>
              <td>+$84.91</td>
              <td>
                <button
                  data-modal="edit-position"
                  className="cursor-pointer flex items-center justify-center border rounded-md w-6 h-6"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5858 3.85766L10.1423 1.41367C10.0408 1.31206 9.92019 1.23146 9.78746 1.17646C9.65473 1.12147 9.51247 1.09316 9.36879 1.09316C9.22512 1.09316 9.08286 1.12147 8.95013 1.17646C8.8174 1.23146 8.69681 1.31206 8.59524 1.41367L1.85172 8.15773C1.74979 8.259 1.66897 8.3795 1.61396 8.51224C1.55895 8.64499 1.53084 8.78733 1.53125 8.93102V11.375C1.53125 11.6651 1.64649 11.9433 1.85161 12.1484C2.05672 12.3535 2.33492 12.4688 2.625 12.4688H5.06899C5.21267 12.4691 5.35501 12.441 5.48774 12.386C5.62048 12.331 5.74098 12.2502 5.84227 12.1483L12.5858 5.40422C12.7908 5.19911 12.906 4.92096 12.906 4.63094C12.906 4.34091 12.7908 4.06276 12.5858 3.85766ZM4.97657 11.1562H2.84375V9.02344L7.4375 4.42969L9.57032 6.5625L4.97657 11.1562ZM10.5 5.63281L8.36719 3.5L9.37016 2.49703L11.503 4.62984L10.5 5.63281Z"
                      fill="#161A1E"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4">29/04/23</td>
              <td>AUDUSD</td>
              <td>Long</td>
              <td>0.66220</td>
              <td>0.25</td>
              <td>0.66350</td>
              <td>0.66200</td>
              <td>N/A</td>
              <td>-$18.72</td>
              <td>+$84.91</td>
              <td>
                <button
                  data-modal="edit-position"
                  className="cursor-pointer flex items-center justify-center border rounded-md w-6 h-6"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5858 3.85766L10.1423 1.41367C10.0408 1.31206 9.92019 1.23146 9.78746 1.17646C9.65473 1.12147 9.51247 1.09316 9.36879 1.09316C9.22512 1.09316 9.08286 1.12147 8.95013 1.17646C8.8174 1.23146 8.69681 1.31206 8.59524 1.41367L1.85172 8.15773C1.74979 8.259 1.66897 8.3795 1.61396 8.51224C1.55895 8.64499 1.53084 8.78733 1.53125 8.93102V11.375C1.53125 11.6651 1.64649 11.9433 1.85161 12.1484C2.05672 12.3535 2.33492 12.4688 2.625 12.4688H5.06899C5.21267 12.4691 5.35501 12.441 5.48774 12.386C5.62048 12.331 5.74098 12.2502 5.84227 12.1483L12.5858 5.40422C12.7908 5.19911 12.906 4.92096 12.906 4.63094C12.906 4.34091 12.7908 4.06276 12.5858 3.85766ZM4.97657 11.1562H2.84375V9.02344L7.4375 4.42969L9.57032 6.5625L4.97657 11.1562ZM10.5 5.63281L8.36719 3.5L9.37016 2.49703L11.503 4.62984L10.5 5.63281Z"
                      fill="#161A1E"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpenPosition;
