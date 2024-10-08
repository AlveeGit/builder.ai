import React, { useEffect, useRef, useState } from "react";

const AboutTeam = ({ teamMembers }) => {
  const carouselRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Function to handle slide to the right
  const slideRight = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const carousel = carouselRef.current;
      const firstChild = carousel.firstElementChild;
      const itemWidth = firstChild.offsetWidth;

      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${itemWidth}px)`;

      // After transition, move the first item to the end and reset transform
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        carousel.appendChild(firstChild);
        setIsTransitioning(false);
      }, 500); // Matches the duration of the CSS transition
    }
  };

  // Function to handle slide to the left
  const slideLeft = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const carousel = carouselRef.current;
      const lastChild = carousel.lastElementChild;
      const itemWidth = lastChild.offsetWidth;

      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${itemWidth}px)`;
      carousel.insertBefore(lastChild, carousel.firstElementChild);

      // Allow the transition back to normal position
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = "translateX(0)";
        setIsTransitioning(false);
      }, 0); // Immediate reflow
    }
  };

  return (
    <div className="relative pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Say hello!</h2>
        <section className="w-full h-[80vh] relative">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden w-full">
            <div
              ref={carouselRef}
              className="flex space-x-4 p-4 transition-transform duration-500 ease-in-out"
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="carousel-item flex flex-col items-center"
                  style={{ minWidth: "240px" }} // Fixed width for smooth transitions
                >
                  {/* Circle Image */}
                  <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-gray-500">
                    <img
                      src={member.imgUrl}
                      alt={`Team member ${member.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Rectangle for Name and Designation */}
                  <div className="mt-4 bg-gray-200 p-4 w-60 rounded-lg text-center group transition-all duration-500 ease-in-out hover:shadow-lg hover:bg-gray-300">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600">
                      {member.designation}
                    </p>

                    {/* Feedback (Initially Hidden, Show on Hover) */}
                    <div className="max-h-0 overflow-hidden opacity-0 text-start group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4">
                      <p className="text-sm text-gray-500">{member.feedback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={slideLeft}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-300"
            disabled={isTransitioning} // Disable while transitioning
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={slideRight}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-300"
            disabled={isTransitioning} // Disable while transitioning
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutTeam;

// ----------------------------
// import React, { useEffect, useRef, useState } from "react";

// const AboutTeam = ({ teamMembers }) => {
//   const carouselRef = useRef(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       slideRight();
//     }, 3000); // Slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Function to handle slide to the right
//   const slideRight = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       const carousel = carouselRef.current;
//       const firstChild = carousel.firstElementChild;
//       const itemWidth = firstChild.offsetWidth;

//       carousel.style.transition = "transform 0.5s ease-in-out";
//       carousel.style.transform = `translateX(-${itemWidth}px)`;

//       // After transition, move the first item to the end and reset transform
//       setTimeout(() => {
//         carousel.style.transition = "none";
//         carousel.style.transform = "translateX(0)";
//         carousel.appendChild(firstChild);
//         setIsTransitioning(false);
//       }, 500); // Matches the duration of the CSS transition
//     }
//   };

//   // Function to handle slide to the left
//   const slideLeft = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       const carousel = carouselRef.current;
//       const lastChild = carousel.lastElementChild;
//       const itemWidth = lastChild.offsetWidth;

//       carousel.style.transition = "none";
//       carousel.style.transform = `translateX(-${itemWidth}px)`;
//       carousel.insertBefore(lastChild, carousel.firstElementChild);

//       // Allow the transition back to normal position
//       setTimeout(() => {
//         carousel.style.transition = "transform 0.5s ease-in-out";
//         carousel.style.transform = "translateX(0)";
//         setIsTransitioning(false);
//       }, 0); // Immediate reflow
//     }
//   };

//   return (
//     <div className="relative pt-10 h-[80vh]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
//         <h2 className="text-4xl font-bold mb-6">Say hello!</h2>
//         <section className="w-full relative">
//           {/* Carousel Wrapper */}
//           <div className="overflow-hidden w-full">
//             <div
//               ref={carouselRef}
//               className="flex space-x-4 p-4 transition-transform duration-500 ease-in-out"
//             >
//               {teamMembers.map((member) => (
//                 <div
//                   key={member.id}
//                   className="carousel-item flex flex-col items-center"
//                   style={{ minWidth: "240px" }} // Ensure fixed width for smooth transitions
//                 >
//                   {/* Circle Image */}
//                   <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-gray-500">
//                     <img
//                       src={member.imgUrl}
//                       alt={`Team member ${member.id}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Rectangle for Name and Designation */}
//                   <div className="mt-4 bg-gray-200 p-4 w-60 rounded-lg text-center group transition-all duration-500 ease-in-out hover:shadow-lg hover:bg-gray-300">
//                     <h3 className="text-lg font-bold">{member.name}</h3>
//                     <p className="text-sm text-gray-600">
//                       {member.designation}
//                     </p>

//                     {/* Feedback (Initially Hidden, Show on Hover) */}
//                     <div className="max-h-0 overflow-hidden opacity-0 text-start group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4">
//                       <p className="text-xs text-gray-500">{member.feedback}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Left Arrow Button */}
//           <button
//             onClick={slideLeft}
//             className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-300"
//             disabled={isTransitioning} // Disable while transitioning
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Right Arrow Button */}
//           <button
//             onClick={slideRight}
//             className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-300"
//             disabled={isTransitioning} // Disable while transitioning
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutTeam;
