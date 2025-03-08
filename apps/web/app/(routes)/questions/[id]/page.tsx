import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowBigUp, ArrowBigDown, CheckCircle2, Bookmark, Share } from "lucide-react"
import Link from "next/link"
import AnswerForm from "@/components/custom/answer-form"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const question = {
    title: "How do I implement authentication with Next.js and NextAuth?",
  }

  return {
    title: question.title,
    description: `Find the answer to "${question.title}" on DevOverflow`,
    openGraph: {
      title: question.title,
      description: `Find the answer to "${question.title}" on DevOverflow`,
    },
  }
}

export default function QuestionPage() {
  const id = 'lol'
  // Mock data for the question
  const question = {
    id: id,
    title: "How do I implement authentication with Next.js and NextAuth?",
    content: `
      <div class="markdown">
        <p>I'm trying to add authentication to my Next.js application using NextAuth.js but I'm running into issues with the callback URLs.</p>
        
        <p>Here's my current setup:</p>
        
        <pre><code>// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});</code></pre>

        <p>But when I try to sign in, I get the following error:</p>
        
        <pre><code>Error: The callback URL you specified is not valid.</code></pre>
        
        <p>I've already added <code>http://localhost:3000/api/auth/callback/github</code> to my GitHub OAuth application settings.</p>
        
        <p>What am I missing here? Any help would be greatly appreciated!</p>
      </div>
    `,
    tags: ["next.js", "authentication", "nextauth"],
    votes: 42,
    views: 1253,
    author: {
      name: "JaneDev",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2 hours ago",
  }

  // Mock data for answers
  const answers = [
    {
      id: "1",
      content: `
        <div class="markdown">
          <p>I had a similar issue and it was related to the <code>NEXTAUTH_URL</code> environment variable.</p>
          
          <p>Make sure you have set the <code>NEXTAUTH_URL</code> environment variable to your application's URL:</p>
          
          <pre><code># .env.local
NEXTAUTH_URL=http://localhost:3000</code></pre>
          
          <p>Also, check that your GitHub OAuth application settings have the correct callback URL. It should be:</p>
          
          <pre><code>http://localhost:3000/api/auth/callback/github</code></pre>
          
          <p>If you're using a custom callback URL, you need to specify it in your NextAuth configuration:</p>
          
          <pre><code>export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackUrl: "http://localhost:3000/custom-callback",
    }),
  ],
});</code></pre>
          
          <p>Hope this helps!</p>
        </div>
      `,
      votes: 28,
      author: {
        name: "AuthExpert",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "1 hour ago",
      isAccepted: true,
    },
    {
      id: "2",
      content: `
        <div class="markdown">
          <p>Another thing to check is if you're using a custom base path or a proxy that might be affecting your URLs.</p>
          
          <p>If you're deploying to a subdirectory or using a reverse proxy, you might need to adjust your callback URLs accordingly.</p>
          
          <p>Also, make sure your <code>GITHUB_ID</code> and <code>GITHUB_SECRET</code> environment variables are correctly set.</p>
          
          <p>You can debug NextAuth.js by adding the <code>debug: true</code> option to your configuration:</p>
          
          <pre><code>export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  debug: true,
});</code></pre>
          
          <p>This will output more detailed logs that might help you identify the issue.</p>
        </div>
      `,
      votes: 15,
      author: {
        name: "DevHelper",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "45 minutes ago",
      isAccepted: false,
    },
  ]

  return (
    <div className="container py-8">
      <div className="mb-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-primary hover:underline mb-2">
            ← Back to questions
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">{question.title}</h1>
          <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
            <span>Asked {question.createdAt}</span>
            <span>•</span>
            <span>Viewed {question.views} times</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4">

        {/* Question content */}
        <div className="space-y-4">
          <div dangerouslySetInnerHTML={{ __html: question.content }} className="border py-5 px-3 rounded-xl bg-primary/5" />

          <div className="flex flex-wrap gap-2 mt-4">
            {question.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            <div className="">
              <div className="flex items-center gap-2 md:gap-4 bg-primary/12 w-fit rounded-full p-1">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowBigUp className="size-5" />
                </Button>
                <span className="font-semibold text-lg">{question.votes}</span>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowBigDown className="size-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-1 px-6">
              <Button variant="outline" size="lg">
                Follow
              </Button>
              <Button variant="outline" size="lg">
                <Bookmark />
              </Button>
              <Button variant="outline" size="lg">
                <Share />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-sm text-muted-foreground">asked {question.createdAt}</div>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={question.author.avatar} alt={question.author.name} />
                  <AvatarFallback>{question.author.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium">{question.author.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answers section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-6">
          {answers.length} {answers.length === 1 ? "Answer" : "Answers"}
        </h2>

        <div className="space-y-8">
          {answers.map((answer) => (
            <div key={answer.id} className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4">
                {/* Voting */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 md:gap-4 bg-primary/12 w-fit rounded-full p-1">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <ArrowBigUp className="size-5" />
                    </Button>
                    <span className="font-semibold text-lg">{answer.votes}</span>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <ArrowBigDown className="size-5" />
                    </Button>
                  </div>
                  {answer.isAccepted && <CheckCircle2 className="size-7 text-green-500" />}
                </div>

                {/* Answer content */}
                <div className="space-y-4">
                  <div dangerouslySetInnerHTML={{ __html: answer.content }} className="border py-5 px-3 rounded-xl bg-primary/5" />
                  <div className="flex justify-end items-center mt-6">
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-muted-foreground">answered {answer.createdAt}</div>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={answer.author.avatar} alt={answer.author.name} />
                          <AvatarFallback>{answer.author.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm font-medium">{answer.author.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer form */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-6">Your Answer</h2>
        <AnswerForm questionId={id} />
      </div>
    </div>
  )
}
