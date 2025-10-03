"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Printer, Share2 } from "lucide-react"
import type { Project } from "@/lib/projects-data"
import { useToast } from "@/hooks/use-toast"

interface ExportOptionsProps {
  project: Project
}

export function ExportOptions({ project }: ExportOptionsProps) {
  const { toast } = useToast()

  const handlePrint = () => {
    window.print()
    toast({
      title: "Print dialog opened",
      description: "Your project plan is ready to print",
    })
  }

  const handleDownloadPDF = () => {
    // In a real implementation, you'd use a library like jsPDF
    toast({
      title: "PDF Generation",
      description: "PDF download feature would be implemented with jsPDF library",
    })
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(`DIY Project Plan: ${project.name}`)
    const body = encodeURIComponent(
      `Check out this DIY project plan for ${project.name}!\n\nProject: ${project.name}\nDifficulty: ${project.difficulty}\nEstimated Cost: $${project.baseCost.min}-$${project.baseCost.max}\nEstimated Time: ${project.baseTime} hours\n\nMaterials needed:\n${project.materials.map((m) => `- ${m.name}`).join("\n")}\n\nView full details at: ${window.location.href}`,
    )
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `DIY Project: ${project.name}`,
          text: `Check out this ${project.name} project plan!`,
          url: window.location.href,
        })
        toast({
          title: "Shared successfully",
          description: "Project plan shared",
        })
      } catch (err) {
        console.log("[v0] Share cancelled or failed:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied",
        description: "Project link copied to clipboard",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5 text-primary" />
          Export & Share
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleDownloadPDF}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>

          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print Checklist
          </Button>

          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleEmail}>
            <Mail className="mr-2 h-4 w-4" />
            Email Plan
          </Button>

          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share Link
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
