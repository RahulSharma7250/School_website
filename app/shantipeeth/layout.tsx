"use client"

import type React from "react"

import { SchoolLayout } from "../components/school-layout"

const navItems = [
  {
    name: "Home",
    href: "/shantipeeth",
  },
  {
    name: "About",
    href: "/shantipeeth/about",
  },
  {
    name: "Academics",
    href: "#",
    subItems: [
      { name: "Curriculum", href: "/shantipeeth/academics/curriculum" },
      { name: "Departments", href: "/shantipeeth/academics/departments" },
      { name: "Achievements", href: "/shantipeeth/academics/achievements" },
    ],
  },
  {
    name: "Admissions",
    href: "/shantipeeth/admissions",
  },
  {
    name: "Faculty",
    href: "/shantipeeth/faculty",
  },
  {
    name: "Gallery",
    href: "/shantipeeth/gallery",
  },
  {
    name: "Events",
    href: "/shantipeeth/events",
  },
  {
    name: "Contact Us",
    href: "/shantipeeth/contact",
  },
]

export default function ShantipeethLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SchoolLayout schoolName="Shantipeeth Public Secondary School" theme="shantipeeth" navItems={navItems}>
      {children}
    </SchoolLayout>
  )
}

