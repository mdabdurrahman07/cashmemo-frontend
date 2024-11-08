import AboutImg from "../assets/about-jas.jpg";
const About = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto">
        <img src={AboutImg} alt="" />
      </div>
      <div className="mt-10">
        <h1 className="text-2xl my-5 text-center">
          CashMemo addresses this issue by registering wholesalers and ensuring
          that every sale is accompanied by an invoice. Gradually, we plan to
          bring everyone onto our platform, from farmers to retailers.
          Additionally, we are implementing features where wholesalers and
          suppliers can manage their stock efficiently and monitor their profit
          and losses, enabling them to make better business decisions.
        </h1>
        <h1 className="text-2xl my-5 text-center">
          An integrated AI system, trained with local business laws and
          fine-tuned for our specific use case, will assist business owners in
          quickly accessing necessary information. This AI will enhance
          decision-making and operational efficiency.
        </h1>
      </div>
    </div>
  );
};

export default About;
