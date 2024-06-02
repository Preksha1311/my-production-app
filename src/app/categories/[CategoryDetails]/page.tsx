"use client"
import { useRouter } from "next/navigation";

export default function CategoryDetails({ params }: { params: { categoryId: string } }) {
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
