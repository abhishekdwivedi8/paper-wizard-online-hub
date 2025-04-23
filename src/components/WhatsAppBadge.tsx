
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MessageCircle } from "lucide-react"

export const WhatsAppBadge = () => {
  const whatsappNumber = "9142506335"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="space-y-4">
            <h4 className="font-semibold">Need help? Message us on WhatsApp</h4>
            <p className="text-sm text-gray-500">
              Get quick responses to your questions about our research paper services
            </p>
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
