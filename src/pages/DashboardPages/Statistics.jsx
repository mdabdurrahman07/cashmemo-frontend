import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Pie,
  PieChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
const DashBoard_Stats = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const tableData = [
    {
      id: 1,
      fileName: "Landscape-Beach.png",
      fileFormat: "Png",
      ratio: "16:9",
      resolution: "1920x1080",
      fileSize: "43 KB",
      status: "In Progress",
    },
    {
      id: 2,
      fileName: "Portrait-Sunset.jpg",
      fileFormat: "Jpg",
      ratio: "4:3",
      resolution: "1024x768",
      fileSize: "128 KB",
      status: "Complete",
    },
    {
      id: 3,
      fileName: "Cityscape-Night.png",
      fileFormat: "Png",
      ratio: "16:9",
      resolution: "3840x2160",
      fileSize: "210 KB",
      status: "Pending",
    },
    {
      id: 4,
      fileName: "Animation-Loading.gif",
      fileFormat: "Gif",
      ratio: "1:1",
      resolution: "800x800",
      fileSize: "76 KB",
      status: "In Progress",
    },
    {
      id: 5,
      fileName: "Mountain-Peak.jpg",
      fileFormat: "Jpg",
      ratio: "16:9",
      resolution: "2560x1440",
      fileSize: "312 KB",
      status: "Complete",
    },
  ];
  const chartData = [
    { browser: "User", visitors: 275, fill: "#0077b6" },
    { browser: "Supplier", visitors: 200, fill: "#0096c7" },
    { browser: "Wholesaler", visitors: 187, fill: "#5e60ce" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "User",
      color: "#0077b6",
    },
    safari: {
      label: "Supplier",
      color: "#0096c7",
    },
    firefox: {
      label: "Wholesaler",
      color: "#5e60ce",
    },
  };

  return (
    <div className="px-5">
      <h1 className="text-3xl font-medium font-serif underline  my-5 text-center">Statistics</h1>
      {/* mini cards */}
      <div className="flex justify-around items-center gap-5">
        <div className="bg-[#0077b6] p-5 rounded-xl">
          <h1 className="text-white font-medium text-xl font-serif">
            Total User: 10
          </h1>
        </div>
        <div className="bg-[#0096c7] p-5 rounded-xl">
          <h1 className="text-white font-medium text-xl font-serif">
            Total Supplier: 5
          </h1>
        </div>
        <div className="bg-[#5e60ce] p-5 rounded-xl">
          <h1 className="text-white font-medium text-xl font-serif">
            Total Wholesaler: 5
          </h1>
        </div>
        <div className="bg-[#83c5be] p-5 rounded-xl">
          <h1 className="text-white font-medium text-xl font-serif">
            Total Cashmemo: 4
          </h1>
        </div>
      </div>
      {/* graph & chart */}
      <div className="my-10">
        <h1
          className="text-xl font-medium text-black
      text-center mb-3"
        >
          Sells of the Month
        </h1>
        <AreaChart
        className="mx-auto"
          width={786}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
      {/* product & quantity */}
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="max-w-[250px]">File Name</div>
                </TableHead>
                <TableHead>
                  <div className="w-[80px]">File Format</div>
                </TableHead>
                <TableHead>
                  <div className="w-[85px]">Aspect Ratio</div>
                </TableHead>
                <TableHead>
                  <div className="w-[90px]">Resolution</div>
                </TableHead>
                <TableHead>
                  <div className="w-[90px]">File Size</div>
                </TableHead>
                <TableHead>
                  <div className="w-[80px]">Status</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="max-w-[250px] truncate">
                      {item.fileName}
                    </div>
                  </TableCell>
                  <TableCell>{item.fileFormat}</TableCell>
                  <TableCell>{item.ratio}</TableCell>
                  <TableCell>{item.resolution}</TableCell>
                  <TableCell>{item.fileSize}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/*pie chart  */}
        <div>
          <ChartContainer config={chartConfig} className="aspect-square">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie data={chartData} dataKey="visitors" nameKey="browser">
                <LabelList
                  dataKey="browser"
                  className="fill-black"
                  stroke="none"
                  fontSize={12}
                  formatter={(value) => chartConfig[value]?.label}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default DashBoard_Stats;