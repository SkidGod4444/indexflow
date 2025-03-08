import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowBigUp, MessageSquare, Eye } from "lucide-react"

interface QuestionCardProps {
  question: {
    id: string
    title: string
    content: string
    tags: string[]
    votes: number
    answers: number
    views: number
    author: {
      name: string
      avatar: string
    }
    createdAt: string
  }
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-3">
          <Link href={`/questions/${question.id}`}>
            <h3 className="text-xl font-semibold hover:text-primary hover:underline line-clamp-2">{question.title}</h3>
          </Link>
          <p className="text-muted-foreground line-clamp-2">{question.content}</p>
          <div className="flex flex-wrap gap-2">
            {question.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-4 border-t bg-muted/40 px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ArrowBigUp className="h-4 w-4" />
            <span>{question.votes} votes</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>{question.answers} answers</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="h-4 w-4" />
            <span>{question.views} views</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={question.author.avatar} alt={question.author.name} />
            <AvatarFallback>{question.author.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <span className="text-muted-foreground">asked </span>
            <span className="font-medium">{question.createdAt}</span>
            <span className="text-muted-foreground"> by </span>
            <span className="font-medium">{question.author.name}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

