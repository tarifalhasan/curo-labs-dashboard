import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import OpenOrders from "./open-orders";
import OpenPosition from "./open-position";
import OrderHistory from "./order-history";

const DataTable: React.FC = () => {
  return (
    <Tabs defaultValue="open_position" className="bg-white rounded-lg ">
      <div className="">
        <div className="text-sm font-medium text-center text-gray-500 border-b">
          <TabsList className="  flex items-start  !justify-start">
            <TabsTrigger value="open_position" className=" ">
              Open Positions
              <span className="flex items-center justify-center text-xs  ml-2 w-[20px] h-[20px] bg-[#161A1E] p-2 text-white rounded-full">
                2
              </span>
            </TabsTrigger>
            <TabsTrigger value="order-history" className=" mr-2">
              Order History
              <span className="flex items-center justify-center text-xs  ml-2 w-[20px] h-[20px] bg-[#161A1E] p-2 text-white rounded-full">
                2
              </span>
            </TabsTrigger>
            <TabsTrigger value="open_orders" className=" mr-2">
              Open order
              <span className="flex items-center justify-center text-xs  ml-2 w-[20px] h-[20px] bg-[#161A1E] p-2 text-white rounded-full">
                2
              </span>
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="">
          <TabsContent value="open_position">
            <OpenPosition />
          </TabsContent>
          <TabsContent value="open_orders">
            <OpenOrders />
          </TabsContent>

          <TabsContent value="order-history">
            <OrderHistory />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export default DataTable;
