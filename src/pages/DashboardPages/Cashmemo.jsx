import { Divider } from "keep-react"

const Cashmemo = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl text-center font-medium my-5">Build A Cashmemo</h1>
      <div className="space-y-2">
        <h1 className="text-xl font-medium">Shop Name:</h1>
        <h1 className="text-xl font-medium">Shop Trade License Number:</h1>
        <h1 className="text-xl font-medium">Shop Address:</h1>
        <h1 className="text-xl font-medium">Shop Id:</h1>
      </div>
      <Divider/>
      <div className="border-2 border-b-blue-500">

      </div>
      <Divider/>
      <div className="flex items-center justify-between p-5">
      <h1 className="text-xl">Cashmemo</h1>
      <h1 className="text-xl">Signature</h1>
      </div>
    </div>
  )
}

export default Cashmemo