import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import NavBar from "../layouts/navBar";
import Footer from "../layouts/footer";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqsList = [
    {
      q: "What is VolunteerHub?",
      a: "VolunteerHub is a platform where you can find volunteer opportunities, create volunteer opportunities, and connect with other volunteers.",
    },
    {
      q: "How can I create a volunteer opportunity?",
      a: "To create a volunteer opportunity, you need to sign up for an account. Once you have signed up, you can create a volunteer opportunity by clicking on the 'Create Volunteer Opportunity' button on the homepage.",
    },
    {
      q: "How can I find volunteer opportunities?",
      a: "To find volunteer opportunities, you can browse the volunteer opportunities listed on the homepage. You can filter the volunteer opportunities by category, location, and date to find opportunities that match your interests and availability.",
    },
    {
      q: "How can I join a volunteer opportunity?",
      a: "To join a volunteer opportunity, you need to sign up for an account. Once you have signed up, you can click on the 'Join' button on the volunteer opportunity listing page. The organizer of the volunteer opportunity will be notified of your interest, and they will contact you with further details.",
    },
    {
      q: "How can I contact VolunteerHub?",
      a: "You can contact VolunteerHub by sending an email to the organizer.",
    },
    {
      q: "How can I save a volunteer opportunity?",
      a: "To save a volunteer opportunity, you need to sign up for an account. Once you have signed up, you can click on the 'Save' button on the volunteer opportunity listing page. The volunteer opportunity will be saved to your account, and you can access it later from your saved opportunities list.",
    },
    {
      q: "How can I share a volunteer opportunity?",
      a: "To share a volunteer opportunity, you can click on the 'Share' button on the volunteer opportunity listing page. You can share the volunteer opportunity on social media platforms or send it to your friends and family via email.",
    },
    {
      q: "How can I bookmark a volunteer opportunity?",
      a: "To bookmark a volunteer opportunity, you can click on the 'Bookmark' button on the volunteer opportunity listing page. The volunteer opportunity will be bookmarked, and you can access it later from your bookmarked opportunities list.",
    },
    {
      q: "How can I filter volunteer opportunities?",
      a: "To filter volunteer opportunities, you can use the filter options on the homepage. You can filter volunteer opportunities by category, location, and date to find opportunities that match your interests and availability.",
    },
    {
      q: "How can I apply for a volunteer opportunity?",
      a: "To apply for a volunteer opportunity, you need to sign up for an account. Once you have signed up, you can click on the 'Apply' button on the volunteer opportunity listing page. The organizer of the volunteer opportunity will be notified of your application, and they will contact you with further details.",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-gray-50">
      <div>
        <NavBar />
      </div>
      <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-lg">
            Answered all frequently asked questions, Still confused? feel free
            to contact us.
          </p>
        </div>
        <div className="mt-14 max-w-2xl mx-auto">
          {faqsList.slice(0, showAll ? faqsList.length : 5).map((item, idx) => (
            <FaqsCard idx={idx} faqsList={item} />
          ))}
        </div>
        {faqsList.length > 5 && (
          <div className="text-center mt-4 mb-40 flex justify-center relative z-10">
            <button
              className={`text-black px-4 py-2 rounded-md w-full md:w-[700px] h-20 items-center flex justify-center -top-10 bg-gradient-to-b from-gray-100 to-white ${
                showAll ? "top-0" : "absolute"
              }`}
              onClick={toggleShowAll}
            >
              {showAll ? <ChevronUp size={40} /> : <ChevronDown size={35} />}
            </button>
          </div>
        )}
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
