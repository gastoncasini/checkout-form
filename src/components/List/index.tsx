import React from "react";

function List({ render }: { render: boolean }): JSX.Element | null {
  if (!render) {
    return null;
  }

  return (
    <div className="w-full max-w-md">
      <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
        cuotas
      </div>
      <div className="py-3 text-sm">
        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">1 cuota</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            C.F.T.:
          </div>
        </div>
        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
          <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">3 cuotas</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            C.F.T.:
          </div>
        </div>
        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">6 cuotas</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            C.F.T.:
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
