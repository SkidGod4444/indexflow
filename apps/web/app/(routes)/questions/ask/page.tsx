import type { Metadata } from "next"
import AskQuestionForm from "@/components/custom/ask-question-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ask a Question",
  description: "Ask a question to the DevOverflow community",
}

export default function AskQuestionPage() {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline mb-4 inline-block">
          ← Back to questions
        </Link>
        <h1 className="text-3xl font-bold">Ask a Question</h1>
        <p className="text-muted-foreground mt-2">Get help from the community by asking a clear, specific question</p>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <AskQuestionForm />
      </div>
    </div>
  )
}

