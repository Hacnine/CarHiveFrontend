import carImg from "../assets/pricing-card-car.svg";
import {
  essentialPlanOptions,
  proPlanOptions,
  recommendedPlanOptions,
} from "../constants";
import PrimaryButton from "./PrimaryButton";

const PricingCard = ({ special, headText, plan }) => {
  const currentPlanOptions =
    plan === "recommended"
      ? recommendedPlanOptions
      : plan === "pro"
      ? proPlanOptions
      : essentialPlanOptions;

  return (
    <div
      className={`h-[557px] flex-initial sm:flex-1 w-full sm:w-fit max-w[312px] border border-secondary-gray py-8 px-5 rounded-[10px] ${
        special ? "bg-white-green" : "bg-white"
      } flex flex-col relative`}
    >
      {special ? (
        <h2 className="text-primary-black font-kalam font-bold text-4xl mb-2">
          {headText}
        </h2>
      ) : (
        <div className="mb-[30px]">
          <p
            className={`${
              plan === "recommened"
                ? "text-primary-green"
                : "text-primary-black"
            } font-bold uppercase text-center mb-[6px]`}
          >
            {plan}
          </p>
          <h2 className="text-primary-black  font-bold text-4xl">
            {headText}
          </h2>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
