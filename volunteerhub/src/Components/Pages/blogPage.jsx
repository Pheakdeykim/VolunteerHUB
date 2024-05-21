import React from "react";
import NavBar from "../layouts/navBar";
import Footer from "../layouts/footer";

const BlogPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 min-h-screen py-12 px-2 md:px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full md:w-3/4 flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:pr-8 bg-white rounded-lg shadow-lg p-2 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-6 text-center md:text-left border-b-2 pb-4">
                Why Students Should Join Volunteer?
              </h1>
              <p className="text-gray-600 text-center md:text-left">May 13, 2024 by John Doe</p>
            </div>
            <img
              src="https://source.unsplash.com/random/800x400"
              alt="Volunteer"
              className="rounded-lg shadow-md w-full mb-8"
            />
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed indent-5 pl-2 md:pl-0">
                Volunteering is not just about giving back; it's also about gaining valuable skills, experiences, and connections that can shape your future in profound ways.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed indent-5 pl-2 md:pl-0">
                Here are some compelling reasons why university students should seriously consider joining volunteer programs:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed space-y-4 pl-1 md:pl-5">
                <li>
                  <strong className="text-blue-700">Develop New Skills:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm ">
                    Volunteering offers opportunities to learn and develop new skills outside the classroom. You can learn leadership skills by managing projects or events, improve communication skills through interaction with diverse groups of people, and develop problem-solving skills by dealing with real-world challenges.
                  </div>
                </li>
                <li>
                  <strong className="text-blue-700">Make a Difference:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm">
                    As a volunteer, you have the chance to positively impact your community and the world. Whether it's tutoring underprivileged children, participating in environmental clean-up initiatives, or helping in disaster relief efforts, your contributions can make a tangible difference in people's lives.
                  </div>
                </li>
                <li>
                  <strong className="text-blue-700">Build Your Network:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm">
                    Volunteering connects you with like-minded individuals and professionals, expanding your network. Through volunteering, you can meet people from various backgrounds who share your interests and values. These connections can lead to friendships, mentorship opportunities, and even future job prospects.
                  </div>
                </li>
                <li>
                  <strong className="text-blue-700">Enhance Your Resume:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm">
                    Volunteer experience can make your resume stand out to future employers. Employers value candidates who demonstrate a commitment to their community and show initiative beyond academic achievements. Including volunteer work on your resume showcases your soft skills, such as teamwork, adaptability, and empathy, which are highly desirable in any workplace.
                  </div>
                </li>
                <li>
                  <strong className="text-blue-700">Personal Growth:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm">
                    Volunteering can foster personal growth and increase your self-confidence. Stepping out of your comfort zone to help others can lead to self-discovery and a sense of fulfillment. You'll gain a deeper understanding of yourself, your strengths, and areas for improvement. Overcoming challenges in your volunteer work can boost your confidence and resilience, preparing you for future endeavors.
                  </div>
                </li>
                <li>
                  <strong className="text-blue-700">Learn About Different Cultures:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm">
                    Volunteering can expose you to new cultures and perspectives. Whether you're working with local communities or participating in international volunteer programs, you'll interact with people from diverse backgrounds. This cultural immersion can broaden your worldview, challenge stereotypes, and promote cross-cultural understanding and empathy.
                  </div>
                </li>
                <li>
                  <strong className="text-blue-700">Time Management Skills:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm">
                    Balancing volunteering with academics teaches valuable time management skills. Juggling volunteer commitments with coursework, extracurricular activities, and personal life requires effective time management. Learning to prioritize tasks, set goals, and manage your schedule efficiently is essential for success both in college and beyond.
                  </div>
                </li>
                <li>
                  <strong className="text-blue-700">Leadership Opportunities:</strong>
                  <div className="indent-5 mt-2 bg-gray-50 p-4 rounded-lg shadow-sm">
                    Volunteer roles often offer leadership opportunities, allowing you to hone your leadership skills. Whether you're leading a team of volunteers on a community project, organizing fundraising events, or mentoring younger volunteers, you'll develop essential leadership qualities such as communication, decision-making, and problem-solving. These experiences can prepare you for future leadership roles in your career.
                  </div>
                </li>
              </ul>
              <p className="text-lg text-gray-800 leading-relaxed">
                Whether you volunteer for a local charity, participate in community clean-up events, or join international humanitarian efforts, the benefits of volunteering extend far beyond the immediate impact of your actions.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <div className="sticky top-20 p-6 bg-white rounded-lg shadow-lg ml-0 md:ml-5">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Related Articles
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    The Impact of Volunteering on Mental Health
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    10 Ways to Find Volunteer Opportunities Near You
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    How Volunteering Can Help Your Career
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    The Benefits of Volunteering Abroad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Making the Most of Your Volunteer Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Volunteering: A Pathway to Social Change
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;