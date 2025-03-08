/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpIcon as ArrowTrendingUp, Clock, FlameIcon as Fire, Search } from "lucide-react"
import TagCloud from "@/components/custom/tag-cloud"
import QuestionCard from "@/components/custom/question-card"
import { useState } from 'react'

export default function Home() {
  // Mock data for questions
  const questions = [
    {
      id: "1",
      title: "How do I implement authentication with Next.js and NextAuth?",
      content:
        "I'm trying to add authentication to my Next.js application using NextAuth.js but I'm running into issues with the callback URLs...",
      tags: ["next.js", "authentication", "nextauth"],
      votes: 42,
      answers: 7,
      views: 1253,
      author: {
        name: "JaneDev",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2 hours ago",
    },
    {
      id: "2",
      title: "Best practices for handling API routes in Next.js App Router",
      content:
        "I'm migrating from Pages Router to App Router and I'm confused about how to properly structure my API routes now...",
      tags: ["next.js", "api", "app-router"],
      votes: 38,
      answers: 5,
      views: 987,
      author: {
        name: "CodeMaster",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "5 hours ago",
    },
    {
      id: "3",
      title: "How to fix CORS errors when using fetch in React?",
      content:
        "I'm trying to fetch data from an external API in my React application but I keep getting CORS errors. I've tried adding the 'mode: cors' option but it doesn't help...",
      tags: ["react", "cors", "fetch-api"],
      votes: 27,
      answers: 12,
      views: 2145,
      author: {
        name: "ReactEnthusiast",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "1 day ago",
    },
    {
      id: "4",
      title: "Optimizing Tailwind CSS bundle size for production",
      content:
        "My production build is quite large and I suspect Tailwind CSS might be contributing to it. What are the best practices for optimizing Tailwind CSS in a production environment?",
      tags: ["tailwind-css", "optimization", "webpack"],
      votes: 19,
      answers: 3,
      views: 756,
      author: {
        name: "CSSWizard",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2 days ago",
    },
    {
      id: "1",
      title: "How do I implement authentication with Next.js and NextAuth?",
      content:
        "I'm trying to add authentication to my Next.js application using NextAuth.js but I'm running into issues with the callback URLs...",
      tags: ["next.js", "authentication", "nextauth"],
      votes: 42,
      answers: 7,
      views: 1253,
      author: {
        name: "JaneDev",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2 hours ago",
    },
    {
      id: "2",
      title: "Best practices for handling API routes in Next.js App Router",
      content:
        "I'm migrating from Pages Router to App Router and I'm confused about how to properly structure my API routes now...",
      tags: ["next.js", "api", "app-router"],
      votes: 38,
      answers: 5,
      views: 987,
      author: {
        name: "CodeMaster",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "5 hours ago",
    },
    {
      id: "3",
      title: "How to fix CORS errors when using fetch in React?",
      content:
        "I'm trying to fetch data from an external API in my React application but I keep getting CORS errors. I've tried adding the 'mode: cors' option but it doesn't help...",
      tags: ["react", "cors", "fetch-api"],
      votes: 27,
      answers: 12,
      views: 2145,
      author: {
        name: "ReactEnthusiast",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "1 day ago",
    },
    {
      id: "4",
      title: "Optimizing Tailwind CSS bundle size for production",
      content:
        "My production build is quite large and I suspect Tailwind CSS might be contributing to it. What are the best practices for optimizing Tailwind CSS in a production environment?",
      tags: ["tailwind-css", "optimization", "webpack"],
      votes: 19,
      answers: 3,
      views: 756,
      author: {
        name: "CSSWizard",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2 days ago",
    },
  ]

  // Mock data for popular tags
  const popularTags = [
    { name: "javascript", count: 1254 },
    { name: "react", count: 982 },
    { name: "next.js", count: 753 },
    { name: "node.js", count: 621 },
    { name: "typescript", count: 587 },
    { name: "css", count: 432 },
    { name: "tailwind", count: 398 },
    { name: "api", count: 321 },
    { name: "database", count: 287 },
    { name: "authentication", count: 254 },
  ]

  // Mock data for random communities
  const randomCommunities = [
    {
      id: "1",
      name: "React Devs",
      description: "A community for React developers.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      id: "2",
      name: "Next.js Enthusiasts",
      description: "All about Next.js.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      id: "3",
      name: "Tailwind CSS Wizards",
      description: "Mastering Tailwind CSS.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      id: "4",
      name: "React Devs",
      description: "A community for React developers.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      id: "5",
      name: "Next.js Enthusiasts",
      description: "All about Next.js.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      id: "6",
      name: "Tailwind CSS Wizards",
      description: "Mastering Tailwind CSS.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      id: "7",
      name: "React Devs",
      description: "A community for React developers.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      id: "8",
      name: "Next.js Enthusiasts",
      description: "All about Next.js.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      id: "9",
      name: "Tailwind CSS Wizards",
      description: "Mastering Tailwind CSS.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      id: "10",
      name: "React Devs",
      description: "A community for React developers.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      id: "11",
      name: "Next.js Enthusiasts",
      description: "All about Next.js.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      id: "12",
      name: "Tailwind CSS Wizards",
      description: "Mastering Tailwind CSS.",
      img: "https://avatar.vercel.sh/jill",
    },
  ];

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 3; // Number of questions per page

  // Calculate the index of the first and last question on the current page
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle next and previous buttons
  const handleNext = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="container py-8 flex flex-col lg:flex-row gap-4 relative">
        {/* Sidebar - Make it sticky */}
        <div className="w-full lg:w-80 space-y-6 sticky lg:top-[100px] h-fit">
          <div className="bg-card rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
            <TagCloud tags={popularTags} />
          </div>
        </div>

        {/* Main content - Make this scrollable */}
        <div className="flex-1 relative h-[calc(100vh-120px)]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold">All Questions</h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search questions..." className="pl-10" />
            </div>

            <Tabs defaultValue="newest" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="newest">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Newest</span>
                </TabsTrigger>
                <TabsTrigger value="hot">
                  <Fire className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Hot</span>
                </TabsTrigger>
                <TabsTrigger value="top">
                  <ArrowTrendingUp className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Top</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-4 relative h-[75%] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {currentQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>

          <div className="mt-8 flex justify-center absolute bottom-0 w-full">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
              </Button>
              {[...Array(Math.ceil(questions.length / questionsPerPage)).keys()].map((page) => (
                <Button
                  key={page + 1}
                  variant="outline"
                  size="sm"
                  className={currentPage === page + 1 ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </Button>
              ))}
              <Button variant="outline" size="sm" onClick={handleNext} disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}>
                Next
              </Button>
            </div>
          </div>
        </div>
        {/*Communities Component */}
        <div className="w-full lg:w-80 space-y-6 sticky lg:top-[100px] h-fit">
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-4">Communities</h2>
            <p className="text-muted-foreground mb-4">Get unstuck with the help of our community of developers.</p>
            <Button className="w-full mb-4">Join Community</Button>
            <div className="overflow-y-auto max-h-72 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {randomCommunities.map((community: { id: string; name: string; description: string; img: string; }) => (
                <div key={community.id} className="flex items-center py-2">
                  <img src={community.img} alt={community.name} className="w-10 h-10 rounded-full mr-4" />
                  <div className="flex-1">
                    <h3 className="text-md font-medium truncate max-w-[12ch] overflow-hidden whitespace-nowrap">{community.name}</h3>
                    <p className="text-xs text-muted-foreground">{community.description}</p>
                  </div>
                  <Button className="ml-4" variant={"default"}>Join</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

