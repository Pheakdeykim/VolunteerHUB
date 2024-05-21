import React from "react";
import NavBar from "../layouts/navBar";
import Footer from "../layouts/footer";

const VolunteerInfoPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 min-h-screen py-8 ">
        <div className="w-[96%] md:w-3/4 mx-auto flex flex-col md:flex-row">
          <div className="md:w-3/4 bg-white rounded-lg shadow-md overflow-hidden mb-4 md:mb-0 md:mr-4">
            <div className="px-6 py-4">
              <h1 className="text-3xl font-bold mb-4 text-blue-600">
                Teach Kids Coding: Ignite the Future!
              </h1>
              <div className="mb-4">
                <img
                  src="/images/education_Cover.webp"
                  alt="Kids coding"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-base mb-4">
                Join our mission to inspire the next generation of innovators
                and problem-solvers. By volunteering to teach coding to
                elementary school students, you'll be opening up a world of
                possibilities and empowering young minds with the skills they
                need to thrive in our digital age.
                <br />
                <br />
                No prior teaching experience is required. All you need is a
                passion for coding, a desire to make a difference, and a
                commitment to nurturing curiosity and creativity in children.
                Together, we can ignite the future!
              </p>
              <div className="bg-gray-200 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-bold mb-2 text-blue-500">
                  Description
                </h2>
                <p className="text-gray-700 text-base mb-4">
                  As a coding instructor, you'll have the opportunity to work
                  with students aged 8-12, introducing them to the captivating
                  world of programming through hands-on activities and
                  interactive tools. You'll guide them through the fundamentals
                  of coding, such as variables, loops, and conditional
                  statements, making learning fun and engaging.
                </p>
                <p className="text-gray-700 text-base mb-4">
                  But this experience is about more than just coding. It's about
                  fostering a growth mindset, encouraging problem-solving
                  skills, and nurturing a love for learning. You'll be a mentor
                  and a role model, inspiring the students to embrace their
                  curiosity and think outside the box.
                </p>
                <p className="text-gray-700 text-base">
                  By the end of the program, the students will have not only
                  gained a solid foundation in coding but also developed
                  essential life skills like critical thinking, collaboration,
                  and perseverance. You'll have played a pivotal role in shaping
                  their future, igniting their passion for technology, and
                  empowering them to be the innovators of tomorrow.
                </p>
              </div>
              <div className="flex items-center mb-4">
                {/* ... location, date, and time sections ... */}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-2 text-blue-500">
                Requirements
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Basic understanding of coding concepts</li>
                <li>Patience and enthusiasm for teaching</li>
                <li>Commitment to the scheduled time</li>
              </ul>
            </div>
            <div className="px-6 py-4 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-2 text-blue-500">Benefits</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Gain teaching experience</li>
                <li>Enhance your resume</li>
                <li>Contribute to the community</li>
              </ul>
            </div>
            <div className="px-6 py-4 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-2 text-blue-500">
                Application Process
              </h2>
              <p className="text-gray-700">
                To apply for this volunteer opportunity, please send an email to
                john.doe@example.com with your resume and a brief statement of
                interest. We will get back to you within a week.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-2 text-blue-500">
                Contact Information
              </h2>
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <span className="text-gray-700 font-medium">John Doe</span>
              </div>
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  john.doe@example.com
                </span>
              </div>
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  (123) 456-7890
                </span>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-2 text-blue-500">
                Testimonials
              </h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-700 italic">
                  "This volunteer opportunity was an amazing experience. I loved
                  working with the kids and seeing their excitement when they
                  learned something new."
                </p>
                <p className="text-gray-700 font-medium mt-2">- Jane Smith</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 italic">
                  "A rewarding way to give back to the community and develop new
                  skills. Highly recommend!"
                </p>
                <p className="text-gray-700 font-medium mt-2">- Mike Johnson</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/4 bg-white rounded-lg shadow-md overflow-hidden h-fit">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-2 text-blue-500">
                Related Volunteer Opportunities
              </h2>
            </div>
            <div className="px-6 py-4">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-bold mb-2 text-blue-500">
                  Community Clean-Up
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Help us keep our community clean and green. Join us for a
                  neighborhood clean-up event.
                </p>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-500 text-sm">
                    Location: 456 Elm St, Anytown USA
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-bold mb-2 text-blue-500">
                  Food Bank Volunteer
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Assist at the local food bank by sorting and distributing food
                  to those in need.
                </p>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-500 text-sm">
                    Location: 789 Pine St, Anytown USA
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-bold mb-2 text-blue-500">
                  Animal Shelter Helper
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Spend time caring for animals at the local shelter. Help with
                  feeding, cleaning, and socializing pets.
                </p>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-500 text-sm">
                    Location: 321 Maple St, Anytown USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteerInfoPage;
