"use client"
import { useRouter } from "next/navigation";

import React from 'react'

const CategoryDetails = ({ params }: { params: { categoryId: string } }) => {
  const router = useRouter()
  let id= params.categoryId;
//   console.log(router.)
  return (
    <>
      {/* <h1>Id is{router.query.slug}</h1> */}
      {/* <p>Details of category {router.query.slug}</p>
       */}
       <h1>hii</h1>
    </>
  );
}


export default CategoryDetails
// export default function CategoryDetails() {
//   const router = useRouter()
//   let id= params.categoryId;
// //   console.log(router.)
//   return (
//     <>
//       {/* <h1>Id is{router.query.slug}</h1> */}
//       {/* <p>Details of category {router.query.slug}</p>
//        */}
//        <h1>hii</h1>
//     </>
//   );
// }
