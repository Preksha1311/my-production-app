"use client"
// // import { useRouter } from "next/navigation";

// // import React from 'react'

// // const CategoryDetails = ({ params }: { params: { categoryId: string } }) => {
// //   const router = useRouter()
// //   let id= params.categoryId;
// // //   console.log(router.)
// //   return (
// //     <>
// //       {/* <h1>Id is{router.query.slug}</h1> */}
// //       {/* <p>Details of category {router.query.slug}</p>
// //        */}
// //        <h1>hii</h1>
// //     </>
// //   );
// // }


// // export default CategoryDetails
// // export default function CategoryDetails() {
// //   const router = useRouter()
// //   let id= params.categoryId;
// // //   console.log(router.)
// //   return (
// //     <>
// //       {/* <h1>Id is{router.query.slug}</h1> */}
// //       {/* <p>Details of category {router.query.slug}</p>
// //        */}
// //        <h1>hii</h1>
// //     </>
// //   );
// // }
// // pages/categories/[categorySlug].js

// // Define an interface for Category data
// interface Category {
//   name: string;
//   // Add other properties your category data has (e.g., description, image)
// }

// export async function getStaticPaths(): Promise<{ paths: { params: { categorySlug: string } }[] }> {
//   // Fetch your category data (replace with your logic)
//   const categories = await fetch('https://api.example.com/categories');
//   const categoryData = await categories.json();

//   const paths = categoryData.map(category => ({
//     params: { categorySlug: category.slug }, // Use categorySlug
//   }));

//   return {
//     paths,
//     fallback: false, // Set to 'blocking' if data fetching is required
//   };
// }

// export async function getStaticProps({ params }: { params: { categorySlug: string } }) {
//   // Fetch category details based on slug (replace with your logic)
//   const response = await fetch(`https://api.example.com/categories/${params.categorySlug}`);
//   const category = await response.json();

//   return {
//     props: { category },
//   };
// }

// function CategoryPage({ category }: { category: Category }) {
//   // Display category details here
//   return (
//     <div>
//       <h1>{category.name}</h1>
//       {/* ... other category details */}
//     </div>
//   );
// }

// export default CategoryPage;

import React from 'react'

const page = ({ params }: { params: { CategoryDetails: string } }) => {
  const cat = ["glassware", "china"]
  const url = params.CategoryDetails
  const findCate = {
    
  }
  console.log(params);
  return (
    <div>Category {params.CategoryDetails}</div>
  )
}

export default page
