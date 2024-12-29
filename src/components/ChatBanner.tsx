import { CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ChatBanner() {
  return (
    <CardHeader className="bg-[#FF4500] text-white">
      <div className="flex items-center">
        <CardTitle className="flex items-center gap-2 font-mono">
          <Avatar>
            <AvatarImage src="/snoofi-avatar.png" alt="SNOOFI" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          SNOOFI
        </CardTitle>
      </div>
    </CardHeader>
  )
}

