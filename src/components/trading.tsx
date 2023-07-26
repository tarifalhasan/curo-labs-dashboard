import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import AccountTab from "./account-tab";
import DataTable from "./data-table";
import MainHeader from "./main-header";
import TrandingTab from "./tranding-tab";

const Trading = () => {
  return (
    <section>
      <MainHeader />
      <div className="grid grid-cols-1 xl:grid-cols-8 gap-6 pb-4">
        <div className="col-span-6 flex gap-8 flex-col">
          <div className="bg-white rounded-lg  overflow-hidden">
            <div className="tv_chart_container" style={{ height: "60vh" }}>
              <div className="tradingview_eadef" style={{ height: "60vh" }}>
                <AdvancedRealTimeChart
                  theme="light"
                  autosize
                  style="1"
                  symbol="NASDAQ:AAPL"
                  interval="D"
                  timezone="Etc/UTC"
                  locale="en"
                  toolbar_bg="#f1f3f6"
                  enable_publishing={false}
                  allow_symbol_change={true}
                ></AdvancedRealTimeChart>
              </div>
            </div>
          </div>
          <DataTable />
        </div>
        {/* tabs */}
        <div className="col-span-6 xl:col-span-2 bg-white rounded-lg px-10 py-10 mb-6 h-full">
          <Tabs defaultValue="tranding" className=" w-full lg:w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tranding">Trading</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <AccountTab />
            </TabsContent>
            <TabsContent value="tranding">
              <TrandingTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Trading;
