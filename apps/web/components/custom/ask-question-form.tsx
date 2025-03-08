/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function AskQuestionForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tagInput, setTagInput] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [preview, setPreview] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()

      const newTag = tagInput.trim().toLowerCase()

      if (newTag && !tags.includes(newTag) && tags.length < 5) {
        setTags([...tags, newTag])
        setTagInput("")
      }
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const generatePreview = () => {
    // In a real app, you would use a markdown parser
    setPreview(
      `<div class="markdown">${content
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("")}</div>`,
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !content.trim() || tags.length === 0) return

    setIsSubmitting(true)

    // In a real app, you would submit the question to your API
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form after successful submission
      setTitle("")
      setContent("")
      setTags([])
      setTagInput("")
      setPreview("")

      // Show success message or redirect
      alert("Your question has been posted!")
    } catch (error) {
      console.error("Error posting question:", error)
      alert("Failed to post your question. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. How do I implement authentication with Next.js?"
          required
        />
        <p className="text-sm text-muted-foreground">
          Be specific and imagine you're asking a question to another person
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Body</Label>
        <Tabs defaultValue="write" className="w-full">
          <TabsList className="mb-2">
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview" onClick={generatePreview} disabled={!content.trim()}>
              Preview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="write" className="mt-0">
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Include all the information someone would need to answer your question"
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
        <p className="text-sm text-muted-foreground">
          Include all the information someone would need to answer your question
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags</Label>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
        <Input
          id="tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="e.g. next.js, authentication (press Enter to add)"
        />
        <p className="text-sm text-muted-foreground">Add up to 5 tags to describe what your question is about</p>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={!title.trim() || !content.trim() || tags.length === 0 || isSubmitting}>
          {isSubmitting ? "Posting..." : "Post Your Question"}
        </Button>
      </div>
    </form>
  )
}

