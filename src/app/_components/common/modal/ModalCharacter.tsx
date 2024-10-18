// "use client";

// import { MemberListType } from "@/app/_types/type";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function CharacterModal({
//   member,
//   hidden,
//   handleCloseCharacterModal,
// }: {
//   member: MemberListType;
//   hidden: boolean;
//   handleCloseCharacterModal: (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => void;
// }) {
//   return (
//     <section
//       className={`fixed z-[9999] w-full h-full top-0 left-0 flex justify-center items-center text-white bg-black bg-opacity-50 cursor-pointer`}
//       onClick={handleCloseCharacterModal}
//     >
//       <section
//         className={`w-[60rem] h-[30rem] flex border rounded-[3rem] transform duration-500 overflow-hidden ${
//           hidden ? "scale-0" : "scale-100"
//         }`}
//       >
//         <section>
//           <Image
//             src={member.profile_image}
//             alt="profile_image"
//             width={350}
//             priority
//           />
//         </section>
//         <section
//           style={{ backgroundColor: member.color }}
//           className="flex-grow flex flex-col items-center justify-center gap-5 font-bold text-4xl"
//         >
//           <div>{member.name}</div>
//           <div
//             className={`flex flex-col justify-center items-center gap-2 text-xl `}
//           >
//             {member.items.map((item) => (
//               <div key={item}>{item}</div>
//             ))}
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// }
