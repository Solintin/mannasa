import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import avatar from "../Assets/Svg/avatar.svg";

const Faqs = () => {
  const [faqs, setFaqs] = React.useState([
    {
      id: 1,
      isOpen: false,
      question: "How does MAANSA work?",
      answer:
        "MAANSA is your go-to personal investment fund manager that lives on the palm of your laptop or smartphone. Helping you beat inflation by investing in dollar dominating assets, selected by our accredited fund managers team that have the best fund management track record. ",
    },
    {
      id: 2,
      isOpen: false,
      question: " What type of investment do I get with MAANSA?",
      answer:
        "MAANSA is a platform that helps allocate capital across a diversified portfolio of US shares and bonds.",
    },
    {
      id: 3,
      isOpen: false,
      question: "What is the minimum I need to fund a MAANSA plan?",
      answer: "The minimum amount to fund a MAANSA plan is $500.",
    },
    {
      id: 4,
      isOpen: false,
      question: "How do I get my returns on investment after 12months?",
      answer:
        "At the maturity of your investment, your funds at the time of your due date will be paid in naira at the dollar rate into your local bank. ",
    },
    {
      id: 5,
      isOpen: false,
      question: " How do I fund my account?",
      answer:
        "Once you register and sign up for a plan on our platform, you can fund your account through your naira card/Nigerian account, then, our system will automatically convert your naira to dollar. ",
    },
  ]);

  const toggle = (id) => {
    setFaqs(
      faqs.map((item) => {
        if (item.id === id) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
        return item;
      })
    );
  };
  return (
    <div className="py-20 md:px-28 px-4 text">
      <p className="mb-4  fomt-medium md:text-4xl text-2xl text-center">
        Frequently asked questions
      </p>
      <p className="mb-14  fomt-medium text-gray-500 text-center">
        Everything you need to know about the product and billing.
      </p>

      <div className="md:w-1/2 md:mx-auto w-full px-5">
        {faqs.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              toggle(item.id);
            }}
            className="cursor-pointer border-b mb-2"
          >
            <div className="flex justify-between items-center py-2 ">
              <div className="font-black"> {item.question} </div>
              <div>
                <AiOutlineMinusCircle
                  className={`${item.isOpen ? "text-green-500" : ""}`}
                />
              </div>
            </div>
            {
              <div
                className={`${item.isOpen ? "flex" : "hidden"} text-base py-5`}
              >
                {item.answer}
              </div>
            }
          </div>
        ))}
      </div>
      <div className="md:mb-40 mb-20 md:mt-16 mt-10 bg-[#F9FAFB] items-center rounded-2xl mx-auto flex justify-center flex-col py-8 space-y-6">
        <div>
          {" "}
          <img src={avatar} alt="" />{" "}
        </div>
        <h1 className="text-gray-900 text-xl font-black">Still have questions?</h1>
        <h1 className="text-gray-500 text-xl">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </h1>
        <button className="rounded-[10px] max-w-max px-6 font-bold text-sm text-[#fff] p-3  bg-[#009948]">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Faqs;
