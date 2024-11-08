import { Divider } from "keep-react"

const Cashmemo = () => {
  const date = new Date()
  console.log(date)
  return (
    <div className="p-5">
      <h1 className="text-2xl text-center font-medium my-5">Build A Cashmemo</h1>
      <div className="space-y-2">
        <h1 className="text-xl font-medium">Shop Name:</h1>
        <h1 className="text-xl font-medium">User Role:</h1>
        <h1 className="text-xl font-medium">UserName:</h1>
        <h1 className="text-xl font-medium">Phone:</h1>
      </div>
      <Divider className="my-3" size="xl"/>
      <div className="border-2 border-b-blue-500 max-w-screen-lg bg-slate-100 p-2 mx-auto">
        
        <section className="my-5 flex items-center justify-around">
          <div className="space-y-3">
            <div className="text-2xl font-semibold">Bill to</div>
            <h1>Name:</h1>
            <h1>Address:</h1>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">Ship to</div>
            <h1>Name:</h1>
            <h1>Address:</h1>
          </div>
          <div className="space-y-3">
            <div className="flex justify-center gap-5 items-center">
              <div className="text-xl font-medium">Invoice:</div>
              <div className="text-xl font-medium">#12648</div>
            </div>
            <div className="flex justify-center gap-5 items-center">
              <div className="text-xl font-medium">Date & Time</div>
              <div className="text-xl font-medium">8/11/24</div>
            </div>
          </div>

        </section>
      </div>
      <Divider className="my-3" size="xl"/>
      <div className="flex items-center justify-between p-5">
      <h1 className="text-xl">Cashmemo</h1>
      <h1 className="text-xl">Signature</h1>
      </div>
    </div>
  )
}

export default Cashmemo