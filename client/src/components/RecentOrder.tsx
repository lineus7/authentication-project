const RecentOrder = () => {
  return (
    <div className="card w-full bg-white p-6 text-black">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <p className=" font-semibold my-4">Recent Order</p>
        <select className="select border border-neutral-content w-full max-w-xs">
          <option>Last hours</option>
          <option>Last weeks</option>
          <option>Last months</option>
        </select>
      </div>
      {/* Header End */}

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-neutral-content">
        <table className="table">
          {/* Head */}
          <thead>
            <tr className=" bg-green-200 font-semibold">
              <th>Order ID</th>
              <th>Product</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Qty</th>
              <th>Total Price</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>55125</td>
              <td>Kompor</td>
              <td>{new Date().toLocaleString()}</td>
              <td>
                <div className=" bg-orange-100 text-orange-400 flex justify-center items-center rounded-xl p-1 text-sm">
                  Waiting
                </div>
              </td>
              <td>x4</td>
              <td>$5.28</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>55124</td>
              <td>Kulkas</td>
              <td>{new Date().toLocaleString()}</td>
              <td>
                <div className=" bg-red-100 text-red-400 flex justify-center items-center rounded-xl p-1 text-sm">
                  Order Cancel
                </div>
              </td>
              <td>x1</td>
              <td>$4.97</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Table end */}
    </div>
  );
};

export default RecentOrder;
