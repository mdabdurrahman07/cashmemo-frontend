import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Modal,
  ModalAction,
  ModalContent,
  ModalHeader,
} from "keep-react";
import { useForm } from "react-hook-form";

const Shop = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
  return (
    <div>
      <h1 className="text-3xl font-medium font-serif underline  my-5 text-center">
        Shop
      </h1>
      <div className="p-5">
        <div className="flex justify-start items-center">
          <img
            src="https://i.ibb.co.com/FmG6pP8/TECHCRUNCH.jpg"
            alt=""
            className="w-60 h-auto"
          />
        </div>
        <h1 className="text-2xl font-medium my-5">Shop Name</h1>
      </div>
      <div className="p-5 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Product List</h1>

          <Modal>
            <ModalAction asChild>
              <button className="bg-blue-500 text-white px-4 py-2.5 rounded-lg">
                Create Product
              </button>
            </ModalAction>
            <ModalContent className="max-w-[20rem] lg:max-w-[26rem]">
              <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
                <div>
                  <h1>Please Fill this form</h1>
                </div>
                <div className="space-y-1 text-center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("productName")}
                      name="productName"
                      placeholder="productName"
                      className="border mb-2 p-2 w-full"
                    />
                    <input
                      {...register("productPrice")}
                      name="productPrice"
                      placeholder="productPrice"
                      className="border mb-2 p-2 w-full"
                    />
                    <input
                      {...register("productStock")}
                      name="productStock"
                      placeholder="productStock"
                      className="border mb-2 p-2 w-full"
                    />
                    <input
                      {...register("productBuyFrom")}
                      name="productBuyFrom"
                      placeholder="productBuyFrom"
                      className="border mb-2 p-2 w-full"
                    />
                    <input
                      type="submit"
                      value="Update"
                      className="bg-blue-500 text-white p-2 rounded"
                    />
                  </form>
                </div>
              </ModalHeader>
            </ModalContent>
          </Modal>
        </div>
        <div className="my-5">
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
      </div>
    </div>
  );
};

export default Shop;