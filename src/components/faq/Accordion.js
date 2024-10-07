import React from "react";

const Accordion = ({ items }) => {
  return (
    <div className="join join-vertical w-full">
      {items.map((item, index) => (
        <div
          className="collapse collapse-arrow join-item border-base-300 border"
          key={index}
        >
          <input type="radio" name="accordion" defaultChecked={index === 0} />
          <div className="collapse-title text-xl font-medium">
            {item.heading}
          </div>
          <div className="collapse-content">
            <p>{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

// Accordion
// import React from 'react';

// const Accordion = ({heading, paragraph}) => {

//     return (
//       <div>
//         <div className="join join-vertical w-full">
//           <div className="collapse collapse-arrow join-item border-base-300 border">
//             <input type="radio" name="my-accordion-4" defaultChecked />
//             <div className="collapse-title text-xl font-medium">{heading}</div>
//             <div className="collapse-content">
//               <p>
//                 {paragraph}
//               </p>
//             </div>
//           </div>
//           <div className="collapse collapse-arrow join-item border-base-300 border">
//             <input type="radio" name="my-accordion-4" />
//             <div className="collapse-title text-xl font-medium">
//               Click to open this one and close others
//             </div>
//             <div className="collapse-content">
//               <p>hello</p>
//             </div>
//           </div>
//           <div className="collapse collapse-arrow join-item border-base-300 border">
//             <input type="radio" name="my-accordion-4" />
//             <div className="collapse-title text-xl font-medium">
//               Click to open this one and close others
//             </div>
//             <div className="collapse-content">
//               <p>hello</p>
//             </div>
//           </div>
//           <div className="collapse collapse-arrow join-item border-base-300 border">
//             <input type="radio" name="my-accordion-4" />
//             <div className="collapse-title text-xl font-medium">
//               Click to open this one and close others
//             </div>
//             <div className="collapse-content">
//               <p>hello</p>
//             </div>
//           </div>
//           <div className="collapse collapse-arrow join-item border-base-300 border">
//             <input type="radio" name="my-accordion-4" />
//             <div className="collapse-title text-xl font-medium">
//               Click to open this one and close others
//             </div>
//             <div className="collapse-content">
//               <p>hello</p>
//             </div>
//           </div>
//           <div className="collapse collapse-arrow join-item border-base-300 border">
//             <input type="radio" name="my-accordion-4" />
//             <div className="collapse-title text-xl font-medium">
//               Click to open this one and close others
//             </div>
//             <div className="collapse-content">
//               <p>hello</p>
//             </div>
//           </div>
//           <div className="collapse collapse-arrow join-item border-base-300 border">
//             <input type="radio" name="my-accordion-4" />
//             <div className="collapse-title text-xl font-medium">
//               Click to open this one and close others
//             </div>
//             <div className="collapse-content">
//               <p>hello</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Accordion;
