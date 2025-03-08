/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

interface AnswerFormProps {
  questionId: string
}

export default function AnswerForm({ questionId }: AnswerFormProps) {
  const [answer, setAnswer] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preview, setPreview] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!answer.trim()) return

    setIsSubmitting(true)

    // In a real app, you would submit the answer to your API
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form after successful submission
      setAnswer("")
      setPreview("")

      // Show success message or redirect
      alert("Your answer has been posted!")
    } catch (error) {
      console.error("Error posting answer:", error)
      alert("Failed to post your answer. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const generatePreview = () => {
    // In a real app, you would use a markdown parser
    setPreview(
      `<div class="markdown">${answer
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("")}</div>`,
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="write" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="preview" onClick={generatePreview} disabled={!answer.trim()}>
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent value="write" className="mt-0">
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here... You can use Markdown for formatting."
            className="min-h-[200px]"
            required
          />
        </TabsContent>
        <TabsContent value="preview" className="mt-0">
          <div
            className="min-h-[200px] border rounded-md p-4 bg-background"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </TabsContent>
      </Tabs>

      <div className="mt-4 flex justify-end">
        <Button type="submit" disabled={!answer.trim() || isSubmitting}>
          {isSubmitting ? "Posting..." : "Post Your Answer"}
        </Button>
      </div>
    </form>
  )
}

