const AboutTeam = ({ teamMembers }) => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Say hello!</h2>
        <section className="w-full">
          <div className="w-full carousel carousel-center rounded-box space-x-4 p-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="carousel-item flex flex-col items-center"
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
                <div className="mt-4 bg-gray-200 p-4 w-40 rounded-lg text-center group transition-all duration-300 ease-in-out hover:w-56">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm">{member.designation}</p>

                  {/* Feedback (Initially Hidden, Show on Hover) */}
                  <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
                    {member.feedback}
                  </p>
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

// const AboutTeam = ({ teamMembers }) => {
//   return (
//     <div className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
//         <h2 className="text-4xl font-bold mb-6">Say hello!</h2>
//         <section className="w-full">
//           <div className="w-full carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//                 className="carousel-item flex flex-col items-center"
//               >
//                 {/* Circle Image */}
//                 <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-gray-500">
//                   <img
//                     src={member.imgUrl}
//                     alt={`Team member ${member.id}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Rectangle for Name and Designation */}
//                 <div className="mt-4 bg-gray-200 p-4 w-40 rounded-lg text-center">
//                   <h3 className="text-lg font-bold">{member.name}</h3>
//                   <p className="text-sm">{member.designation}</p>
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

// -------------------------------------------
// const AboutTeam = ({ teamMembers }) => {
//   return (
//     <div className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
//         <h2 className="text-4xl font-bold mb-6">Say hello!</h2>
//         <section className="w-full">
//           <div className="w-full carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//                 className="carousel-item border border-red-500"
//               >
//                 <img
//                   src={member.imgUrl}
//                   alt={`Team member ${member.id}`}
//                   className="rounded-box"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutTeam;
