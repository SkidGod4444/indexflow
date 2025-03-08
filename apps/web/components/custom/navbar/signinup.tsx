import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LogIn } from "lucide-react"

export function SignInBtn() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 h-9">
                    <LogIn className="h-4 w-4" />
                    <span>Log In</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Think it. Make it.</DialogTitle>
                    <DialogDescription>
                        Log in to your account.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-3 py-4 justify-center items-center min-w-full">
                    <Button variant={"outline"} className="w-fit">
                        <Icons.google className="fill-black h-5 w-5" />
                        <span className="px-10">Continue with Google</span>
                    </Button>
                    <Button variant={"outline"} className="w-fit">
                        <Icons.gitHub className="fill-black h-5 w-5" />
                        <span className="px-10">Continue with GitHub</span>
                    </Button>
                    <Button variant={"outline"} className="w-fit">
                        <Icons.discord className="fill-black h-5 w-5" />
                        <span className="px-10">Continue with Discord</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
