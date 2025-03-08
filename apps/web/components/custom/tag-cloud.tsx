import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface TagCloudProps {
  tags: {
    name: string
    count: number
  }[]
}

export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link key={tag.name} href={`/tags/${tag.name}`}>
          <Badge variant="outline" className="hover:bg-secondary cursor-pointer">
            {tag.name}
            <span className="ml-1 text-xs text-muted-foreground">×{tag.count}</span>
          </Badge>
        </Link>
      ))}
    </div>
  )
}

