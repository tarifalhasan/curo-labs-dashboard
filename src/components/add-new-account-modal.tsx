const AddNewAccount = () => {
  return (
    <div className="modal-container w-full max-w-sm md:max-w-md">
      <div className="border-b flex justify-between items-center px-6 py-4">
        <h4 className="text-xl font-bold">Add Account</h4>
      </div>
      <form id="add_account_form" action="{{ url_for('add_account')}}">
        <div className="p-6 space-y-4">
          <div className="space-y-2 mb-4">
            <label htmlFor="username">Account Name</label>
            <input
              className="border w-full border-gray-300 bg-white rounded-md p-2"
              type="text"
              name="account_name"
              placeholder="Account Name"
            />
          </div>
          <div className="space-y-2 mb-4">
            <label htmlFor="username">API Key</label>
            <input
              className="border w-full border-gray-300 bg-white rounded-md p-2"
              type="text"
              name="api_key"
              placeholder="API Key"
            />
          </div>
          <div className="space-y-2 mb-4 relative">
            <span className="cursor-pointer absolute bottom-4 right-4">
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 2.8125C4.375 2.8125 1.70625 4.75625 0.625 7.5C1.70625 10.2438 4.375 12.1875 7.5 12.1875C10.625 12.1875 13.2937 10.2438 14.375 7.5C13.2937 4.75625 10.625 2.8125 7.5 2.8125ZM7.5 10.625C5.775 10.625 4.375 9.225 4.375 7.5C4.375 5.775 5.775 4.375 7.5 4.375C9.225 4.375 10.625 5.775 10.625 7.5C10.625 9.225 9.225 10.625 7.5 10.625ZM7.5 5.625C6.4625 5.625 5.625 6.4625 5.625 7.5C5.625 8.5375 6.4625 9.375 7.5 9.375C8.5375 9.375 9.375 8.5375 9.375 7.5C9.375 6.4625 8.5375 5.625 7.5 5.625Z"
                  fill="#161A1E"
                />
              </svg>
            </span>
            <label htmlFor="username">Secret Key</label>
            <input
              id="secret_key"
              className="border w-full border-gray-300 bg-white rounded-md p-2"
              type="password"
              name="secret_key"
              placeholder="Secret Key"
            />
          </div>
          <div className="space-y-2 mb-4">
            <label htmlFor="exchange">Exchange</label>
            <select
              className="border w-full border-gray-300 bg-white rounded-md p-2"
              name="exchange"
            >
              <option>1</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="server">Server</label>
            <select
              className="border w-full border-gray-300 bg-white rounded-md p-2"
              name="server"
            >
              <option>1</option>
            </select>
          </div>
        </div>
      </form>
      <div className="space-x-2 border-t mt-6 px-6 py-4 text-right">
        <button className="modal-exit btn bg-white border rounded-md text-black px-3 py-2 text-sm font-semibold">
          Cancel
        </button>
        <button
          type="submit"
          form="add_account_form"
          className="modal-exit btn bg-black rounded-md text-white px-3 py-2 text-sm font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewAccount;
