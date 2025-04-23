"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Users,
  GraduationCap,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"

export default function AdminDashboard() {
  const statsCards = [
    {
      title: "Total Students",
      value: "1,245",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Faculty Members",
      value: "64",
      change: "+2.3%",
      trend: "up",
      icon: GraduationCap,
      color: "bg-purple-500",
    },
    {
      title: "Upcoming Events",
      value: "8",
      change: "-3.2%",
      trend: "down",
      icon: Calendar,
      color: "bg-amber-500",
    },
    {
      title: "Attendance Rate",
      value: "94.2%",
      change: "+1.8%",
      trend: "up",
      icon: TrendingUp,
      color: "bg-emerald-500",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      title: "New student registration",
      description: "Rahul Sharma registered for Class 10",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Event scheduled",
      description: "Annual Sports Day scheduled for next month",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "Faculty meeting",
      description: "Meeting scheduled for curriculum review",
      time: "2 days ago",
    },
    {
      id: 4,
      title: "Fee payment",
      description: "15 students completed fee payment",
      time: "3 days ago",
    },
    {
      id: 5,
      title: "Website update",
      description: "School gallery updated with new photos",
      time: "5 days ago",
    },
  ]

  const performanceData = [
    { class: "Class 10", performance: 92 },
    { class: "Class 9", performance: 88 },
    { class: "Class 8", performance: 85 },
    { class: "Class 7", performance: 90 },
    { class: "Class 6", performance: 87 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin! Here's what's happening with your schools today.</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button>Download Report</Button>
          <Button variant="outline">Settings</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <div className={`${card.color} p-2 rounded-full`}>
                  <card.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <div className="flex items-center pt-1 text-xs">
                  {card.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={card.trend === "up" ? "text-emerald-500" : "text-red-500"}>{card.change}</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>School Performance</CardTitle>
                <Tabs defaultValue="trilok">
                  <TabsList>
                    <TabsTrigger value="trilok">Trilok Vidhya Vihar</TabsTrigger>
                    <TabsTrigger value="shantipeeth">Shantipeeth Public</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <CardDescription>Academic performance across different classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="w-full space-y-4">
                  {performanceData.map((item) => (
                    <div key={item.class} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{item.class}</div>
                        <div className="text-sm text-muted-foreground">{item.performance}%</div>
                      </div>
                      <Progress value={item.performance} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activities</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View all</DropdownMenuItem>
                    <DropdownMenuItem>Filter activities</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription>Latest activities across both schools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <BarChart3 className="h-4 w-4 text-purple-700" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                <Button
                  variant="ghost"
                  className="w-full justify-center text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  View All Activities
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events scheduled for the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Parent-Teacher Meeting",
                    date: "May 15, 2023",
                    school: "Trilok Vidhya Vihar",
                  },
                  {
                    title: "Annual Sports Day",
                    date: "May 22, 2023",
                    school: "Shantipeeth Public School",
                  },
                  {
                    title: "Science Exhibition",
                    date: "June 5, 2023",
                    school: "Trilok Vidhya Vihar",
                  },
                ].map((event, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{event.school}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used administrative actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <Users className="h-5 w-5 mb-2" />
                  <span>Add Student</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <GraduationCap className="h-5 w-5 mb-2" />
                  <span>Add Faculty</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <Calendar className="h-5 w-5 mb-2" />
                  <span>Schedule Event</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <BarChart3 className="h-5 w-5 mb-2" />
                  <span>Generate Report</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

