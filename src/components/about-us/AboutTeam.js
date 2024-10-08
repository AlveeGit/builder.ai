

import React, { useEffect, useRef } from "react";

const AboutTeam = ({ teamMembers }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstElementChild;
        carouselRef.current.appendChild(firstChild); // Moves the first item to the end
      }
    }, 3000); // Slide every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="pt-10 h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Say hello!</h2>
        <section className="w-full">
          {/* Carousel Wrapper */}
          <div
            ref={carouselRef}
            className="w-full carousel carousel-center rounded-box space-x-4 p-4"
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="carousel-item flex flex-col items-center "
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
                  <p className="text-sm text-gray-600">{member.designation}</p>

                  {/* Feedback (Initially Hidden, Show on Hover) */}
                  <div className="max-h-0 overflow-hidden opacity-0 text-start group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4">
                    <p className="text-xs text-gray-500">{member.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutTeam;

// import React, { useEffect, useRef } from "react";

// const AboutTeam = ({ teamMembers }) => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (carouselRef.current) {
//         const firstChild = carouselRef.current.firstElementChild;
//         carouselRef.current.appendChild(firstChild); // Moves the first item to the end
//       }
//     }, 1000); // Slide every 3 seconds

//     return () => {
//       clearInterval(interval); // Cleanup on component unmount
//     };
//   }, []);

//   return (
//     <div className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
//         <h2 className="text-4xl font-bold mb-6">Say hello!</h2>
//         <section className="w-full">
//           {/* Carousel Wrapper */}
//           <div
//             ref={carouselRef}
//             className="w-full carousel carousel-center rounded-box space-x-4 p-4"
//           >
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//                 className="carousel-item flex flex-col items-center"
//               >
//                 {/* Circle Image */}
//                 <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-gray-500">
//                   <img
//                     src={member.imgUrl}
//                     alt={`Team member ${member.id}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Rectangle for Name and Designation */}
//                 <div className="mt-4 bg-gray-200 p-4 w-60 rounded-lg text-center group transition-all duration-300 ease-in-out hover:w-60">
//                   <h3 className="text-lg font-bold">{member.name}</h3>
//                   <p className="text-sm">{member.designation}</p>

//                   {/* Feedback (Initially Hidden, Show on Hover) */}
//                   <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
//                     {member.feedback}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutTeam;
