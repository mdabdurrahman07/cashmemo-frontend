import invoiceImg from "../../src/assets/invoice.png";
const Info = () => {
  return (
    <div className="flex items-center justify-center my-5  border-2 border-slate-200 gap-5">
      <div>
      <img src={invoiceImg} alt="" />
      </div>
      <div className="space-y-10">
        <h1 className="text-lg">
          <span className="font-medium">Customizable Templates:</span>{" "}
          Personalize invoices effortlessly to showcase your brand identity.
        </h1>
        <h1 className="text-lg">
          <span className="font-medium">Client Management:</span>{" "}
          Organize and maintain client details for lasting relationships.
        </h1>
        <h1 className="text-lg">
          <span className="font-medium">Product/Service Database:</span>{" "}
          Create and manage a comprehensive list for accurate invoicing.
        </h1>
        <h1 className="text-lg">
          <span className="font-medium">Recurring Invoices:</span>{" "}
          Automate billing for services on a recurring basis.
        </h1>
        <h1 className="text-lg">
          <span className="font-medium">Expense Tracking:</span>{" "}
          Record and categorize business expenditures seamlessly.
        </h1>
        <h1 className="text-lg">
          <span className="font-medium">Payment Status:</span>{" "}
          Monitor real-time payment statuses for improved cash flow
        </h1>
      </div>
    </div>
  );
};

export default Info;
