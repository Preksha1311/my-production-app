"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from 'react'
const site = "localhost:3000"
const CardHoverEffectDemo = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: `http://localhost:3000/categories/lamp`,
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: `http://${site}/categories/lights`,
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: `http://${site}/categories/lamps`,
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: `http://${site}/categories/pedestal`,
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: `http://${site}/categories/chandeliers`,
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: `http://${site}/categories/glassware`,
  },
];
 export default CardHoverEffectDemo
