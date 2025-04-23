"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BarChart3,
  Users,
  GraduationCap,
  Calendar,
  FileText,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Input } from "../components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin",
  },
  {
    title: "Students",
    icon: Users,
    href: "/admin/students",
  },
  {
    title: "Faculty",
    icon: GraduationCap,
    href: "/admin/faculty",
  },
  {
    title: "Events",
    icon: Calendar,
    href: "/admin/events",
  },
  {
    title: "Content",
    icon: FileText,
    href: "/admin/content",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <Link href="/admin" className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold mr-2">
                  TS
                </div>
                <span className="text-lg font-bold">TS Admin</span>
              </Link>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-purple-100 hover:text-purple-700 transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t">
              <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-10 w-64 bg-white border-r shadow-sm transition-transform duration-300 ease-in-out md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link href="/admin" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold mr-2">
                TS
              </div>
              <span className="text-lg font-bold">TS Admin</span>
            </Link>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-purple-100 hover:text-purple-700 transition-colors"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn("transition-all duration-300 ease-in-out", sidebarOpen ? "md:ml-64" : "md:ml-0")}>
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 md:px-6">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex mr-2"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
              <div className="relative hidden md:flex items-center">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-10 w-64 h-9 focus-visible:ring-purple-500" />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium mr-2">
                      A
                    </div>
                    <span className="hidden md:inline">Admin User</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

