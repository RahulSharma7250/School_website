"use client"

import type React from "react"

import { SchoolLayout } from "../components/school-layout"

const navItems = [
  {
    name: "Home",
    href: "/trilok",
  },
  {
    name: "About",
    href: "/trilok/about",
  },
  {
    name: "Academics",
    href: "#",
    subItems: [
      { name: "Curriculum", href: "/trilok/academics/curriculum" },
      { name: "Departments", href: "/trilok/academics/departments" },
      { name: "Achievements", href: "/trilok/academics/achievements" },
    ],
  },
  {
    name: "Admissions",
    href: "/trilok/admissions",
  },
  {
    name: "Faculty",
    href: "/trilok/faculty",
  },
  {
    name: "Gallery",
    href: "/trilok/gallery",
  },
  {
    name: "Events",
    href: "/trilok/events",
  },
  {
    name: "Contact Us",
    href: "/trilok/contact",
  },
]

export default function TrilokLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SchoolLayout schoolName="Trilok Vidhya Vihar Senior Secondary School" theme="trilok" navItems={navItems}>
      {children}
    </SchoolLayout>
  )
}

