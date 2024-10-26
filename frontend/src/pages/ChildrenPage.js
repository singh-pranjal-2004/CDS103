import React, { useState } from 'react';
import Image1 from '../assets/images/image1.jpg'; 
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';
import Image4 from '../assets/images/image4.png';
import Image5 from '../assets/images/image5.png';
import Image6 from '../assets/images/image6.png';
import Image7 from '../assets/images/image7.png';
import Image8 from '../assets/images/image8.png';
import Image9 from '../assets/images/image9.png';
import Image10 from '../assets/images/image10.png';
import Video1 from '../assets/videos/rightToEducation.mp4'; 
import Video2 from '../assets/videos/rightToIdentity.mp4';
import Video3 from '../assets/videos/abuse.mp4';



function ChildrenPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionToggle = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  

  return (
    <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6 mt-16 bg-[#FFF7E6] text-[#333]">
      {/* Hero Section */}
      <header className="text-center bg-gray-800 p-6 rounded-lg w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-yellow-400">Welcome to the Kids Zone!</h1>
        <p className="mt-2 text-gray-300">Discover fun stories and important lessons about safety, laws, and more!</p>
        {/* Image Gallery */}
        <div className="mt-4">
          {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10].map((image, index) => (
            <div key={index} className={`w-full ${index % 2 === 0 ? 'mb-4' : ''}`}>
              <img src={image} alt={`Image ${index + 1}`} className="w-full object-cover" />
            </div>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Animated Videos */}
        <section className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Animated Videos</h2>
          <div className="flex flex-col space-y-4">
            {/* Video 1 */}
            <div className="w-full">
              <video
                className="w-full rounded shadow-md"
                src={Video1}
                muted
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                onClick={(e) => {
                  if (e.currentTarget.paused) {
                    e.currentTarget.play();
                  } else {
                    e.currentTarget.pause();
                  }
                }}
              />
              <h3 className="text-lg font-semibold text-yellow-400 mt-2">Right to Education</h3>
            </div>

            {/* Video 2 */}
            <div className="w-full">
              <video
                className="w-full rounded shadow-md"
                src={Video2}
                muted
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                onClick={(e) => {
                  if (e.currentTarget.paused) {
                    e.currentTarget.play();
                  } else {
                    e.currentTarget.pause();
                  }
                }}
              />
              <h3 className="text-lg font-semibold text-yellow-400 mt-2">Right to Identity</h3>
            </div>

            {/* Video 3 */}
            <div className="w-full">
              <video
                className="w-full rounded shadow-md"
                src={Video3}
                muted
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                onClick={(e) => {
                  if (e.currentTarget.paused) {
                    e.currentTarget.play();
                  } else {
                    e.currentTarget.pause();
                  }
                }}
              />
              <h3 className="text-lg font-semibold text-yellow-400 mt-2">Understanding Child Abuse</h3>
            </div>
          </div>
        </section>

        {/* Safety Scenarios */}
        <section className="bg-[#FFF0C2] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#FFA69E] mb-4">Safety Scenarios</h2>
          <div className="flex flex-wrap space-x-4">
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">What to Do if You’re Lost</div>
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">Stranger Danger</div>
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">Online Safety Tips</div>
          </div>
        </section>

        {/* Help Me Understand Q&A */}
        <section className="bg-[#FFF0C2] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#FFA69E] mb-4">Help Me Understand</h2>
          <div className="space-y-2">
            {[
              "Why do I need to go to school?",
              "What are traffic rules for?",
              "Who makes the laws?",
            ].map((question, index) => (
              <div key={index} className="p-3 bg-[#FFF7E6] rounded shadow cursor-pointer" onClick={() => handleQuestionToggle(index)}>
                <h3 className="font-medium text-[#333]">{question}</h3>
                {selectedQuestion === index && (
                  <p className="text-sm text-[#555] mt-2">Answer to {question}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Who Can Help Me */}
        <section className="bg-[#FFF0C2] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#FFA69E] mb-4">Who Can Help Me?</h2>
          <div className="flex flex-wrap space-x-4">
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">
              <p>👩‍🏫 Teacher</p>
              <small className="text-[#555]">A teacher can help you understand your rights at school.</small>
            </div>
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">
              <p>👮 Police Officer</p>
              <small className="text-[#555]">A police officer can help if you feel unsafe.</small>
            </div>
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">
              <p>👨‍⚕️ Doctor</p>
              <small className="text-[#555]">Doctors keep you healthy and safe.</small>
            </div>
          </div>
        </section>

        {/* Laws for Kids */}
        <section className="bg-[#FFF0C2] p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#FFA69E] mb-4">Laws for Kids</h2>
          <div className="flex flex-wrap space-x-4">
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">
              <p>Anti-Bullying</p>
              <small className="text-[#555]">Everyone has the right to feel safe at school.</small>
            </div>
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">
              <p>School Attendance</p>
              <small className="text-[#555]">School is important for learning and making friends.</small>
            </div>
            <div className="bg-[#FFF7E6] p-4 rounded shadow-md w-40">
              <p>Online Safety</p>
              <small className="text-[#555]">Stay safe when you’re using the internet.</small>
            </div>
          </div>
        </section>
      </div>

      {/* Sidebar for Parents */}
      <aside className="w-full md:w-1/4 bg-[#B8D8F3] p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-[#333]">Parents' Corner</h3>
        <p className="mt-2 text-[#555]">Tips for discussing laws and safety with your child, plus resources for further learning.</p>
      </aside>
    </div>
  );
}

export default ChildrenPage;
