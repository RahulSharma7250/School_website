"use client"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

interface SchoolLayoutProps {
  children: ReactNode
  schoolName: string
  schoolLogo?: string
  theme: "trilok" | "shantipeeth"
  navItems: {
    name: string
    href: string
    subItems?: { name: string; href: string }[]
  }[]
}

export function SchoolLayout({ children, schoolName, schoolLogo, theme, navItems }: SchoolLayoutProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const themeStyles = {
    trilok: {
      header: "bg-gradient-to-r from-emerald-600 to-teal-700",
      button: "bg-emerald-600 hover:bg-emerald-700",
      activeLink: "text-emerald-600",
      hoverLink: "hover:text-emerald-600",
      mobileNav: "bg-emerald-50",
      footer: "bg-emerald-900",
    },
    shantipeeth: {
      header: "bg-gradient-to-r from-amber-600 to-orange-700",
      button: "bg-amber-600 hover:bg-amber-700",
      activeLink: "text-amber-600",
      hoverLink: "hover:text-amber-600",
      mobileNav: "bg-amber-50",
      footer: "bg-amber-900",
    },
  }

  const styles = themeStyles[theme]

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={cn("text-white shadow-md", styles.header)}>
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                {schoolLogo ? (
                  <img src={schoolLogo || "/placeholder.svg"} alt={schoolName} className="h-10 w-auto mr-3" />
                ) : (
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-800 font-bold mr-3">
                    {schoolName.charAt(0)}
                  </div>
                )}
                <span className="text-lg font-bold">{schoolName}</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex items-center text-white hover:text-white/90 font-medium",
                          activeDropdown === item.name ? "text-white/90" : "",
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>
                    </div>
                  ) : (
                    <Link href={item.href} className="text-white hover:text-white/90 font-medium">
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown for desktop */}
                  <AnimatePresence>
                    {item.subItems && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                      >
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {/* <Button className={cn("text-white", styles.button)}>Contact Us</Button> */}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className={styles.mobileNav}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-lg font-bold text-gray-900">{schoolName}</div>
                    </div>
                    <nav className="flex-1">
                      <ul className="space-y-4">
                        {navItems.map((item) => (
                          <li key={item.name}>
                            {item.subItems ? (
                              <div>
                                <button
                                  onClick={() => toggleDropdown(item.name)}
                                  className="flex items-center justify-between w-full text-gray-800 font-medium"
                                >
                                  {item.name}
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 transition-transform",
                                      activeDropdown === item.name ? "rotate-180" : "",
                                    )}
                                  />
                                </button>
                                <AnimatePresence>
                                  {activeDropdown === item.name && (
                                    <motion.ul
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="mt-2 ml-4 space-y-2 overflow-hidden"
                                    >
                                      {item.subItems.map((subItem) => (
                                        <li key={subItem.name}>
                                          <Link
                                            href={subItem.href}
                                            className={cn("block text-gray-600", styles.hoverLink)}
                                          >
                                            {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                className={cn("block text-gray-800 font-medium", styles.hoverLink)}
                              >
                                {item.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="mt-6">
                      <Button className={cn("w-full text-white", styles.button)}>Contact Us</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className={cn("text-white py-8", styles.footer)}>
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p>{schoolName}</p>
                <p>Tokar, Tah. Semari</p>
                <p>Dist. Salumbar (Raj.) 313806</p>
                <p className="mt-2">Phone: +91 XXXXX XXXXX</p>
                <p>Email: info@example.com</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="mb-4">Follow us on social media to stay updated with the latest news and events.</p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
                <div className="h-8 w-8 bg-white/20 rounded-full"></div>
                <div className="h-8 w-8 bg-white/20 rounded-full"></div>
                <div className="h-8 w-8 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>
              © {new Date().getFullYear()} {schoolName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

