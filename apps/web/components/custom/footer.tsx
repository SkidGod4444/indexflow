import Link from "next/link"
import { MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background flex justify-center">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">DevOverflow</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              A community-driven platform for developers to ask questions and share knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/questions" className="text-muted-foreground hover:text-foreground">
                  Questions
                </Link>
              </li>
              <li>
                <Link href="/tags" className="text-muted-foreground hover:text-foreground">
                  Tags
                </Link>
              </li>
              <li>
                <Link href="/users" className="text-muted-foreground hover:text-foreground">
                  Users
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://discord.com" className="text-muted-foreground hover:text-foreground">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevOverflow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

