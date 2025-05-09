import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background flex justify-center w-screen min-h-full">
      <div className="container py-8">
        <div className="max-w-lg">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">IndexFlow</span>
          </Link>
          <p className="mt-2 text-md text-muted-foreground">
            A platform where Discord community owners can Index their community threads and make them searchable on the Internet.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between border-t pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© INDEXFLOW 2025</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              href="https://l.devwtf.in/iflow"
              className="text-xs text-muted-foreground"
            >
              STAR ON GITHUB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
