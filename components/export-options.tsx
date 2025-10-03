"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Printer, Share2 } from "lucide-react"
import type { Project } from "@/lib/projects-data"
import { useToast } from "@/hooks/use-toast"

interface ExportOptionsProps {
  project: Project
  skillLevel: "beginner" | "intermediate" | "pro"
}

export function ExportOptions({ project, skillLevel }: ExportOptionsProps) {
  const { toast } = useToast()

  const handlePrint = () => {
    window.print()
    toast({
      title: "Print dialog opened",
      description: "Your project plan is ready to print",
    })
  }

  const handleDownloadPDF = async () => {
    try {
      // Dynamically import jsPDF to avoid SSR issues
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      let yPosition = 20
      const pageWidth = doc.internal.pageSize.getWidth()
      const margin = 20

      // Title
      doc.setFontSize(22)
      doc.setFont("helvetica", "bold")
      doc.text(project.name, margin, yPosition)
      yPosition += 10

      // Project Details
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text(
        `Difficulty: ${project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}`,
        margin,
        yPosition,
      )
      yPosition += 6
      doc.text(`Estimated Cost: $${project.baseCost.min} - $${project.baseCost.max}`, margin, yPosition)
      yPosition += 6
      doc.text(`Estimated Time: ${project.baseTime} hours`, margin, yPosition)
      yPosition += 6
      doc.text(`Skill Level: ${skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1)}`, margin, yPosition)
      yPosition += 12

      // Materials Section
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.text("Materials Required", margin, yPosition)
      yPosition += 8

      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      project.materials.forEach((material) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(`☐ ${material.name}`, margin + 5, yPosition)
        yPosition += 5
        doc.setFontSize(8)
        doc.setTextColor(100)
        const descLines = doc.splitTextToSize(material.description, pageWidth - margin * 2 - 10)
        doc.text(descLines, margin + 10, yPosition)
        yPosition += descLines.length * 4 + 3
        doc.setFontSize(9)
        doc.setTextColor(0)
      })

      yPosition += 5

      // Tools Section
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.text("Tools Required", margin, yPosition)
      yPosition += 8

      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      project.tools.forEach((tool) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        const toolText = tool.optional ? `☐ ${tool.name} (Optional)` : `☐ ${tool.name}`
        doc.text(toolText, margin + 5, yPosition)
        yPosition += 5
        doc.setFontSize(8)
        doc.setTextColor(100)
        const descLines = doc.splitTextToSize(tool.description, pageWidth - margin * 2 - 10)
        doc.text(descLines, margin + 10, yPosition)
        yPosition += descLines.length * 4 + 3
        doc.setFontSize(9)
        doc.setTextColor(0)
      })

      yPosition += 10

      // Step-by-Step Instructions
      doc.addPage()
      yPosition = 20

      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("Step-by-Step Instructions", margin, yPosition)
      yPosition += 10

      project.steps.forEach((step, index) => {
        if (yPosition > 250) {
          doc.addPage()
          yPosition = 20
        }

        // Step title
        doc.setFontSize(12)
        doc.setFont("helvetica", "bold")
        doc.text(`Step ${index + 1}: ${step.title}`, margin, yPosition)
        yPosition += 7

        // Step description
        doc.setFontSize(9)
        doc.setFont("helvetica", "normal")
        const descLines = doc.splitTextToSize(step.description, pageWidth - margin * 2)
        doc.text(descLines, margin, yPosition)
        yPosition += descLines.length * 5 + 3

        // Beginner tip
        if (step.beginnerTip) {
          doc.setFontSize(8)
          doc.setTextColor(0, 100, 200)
          doc.setFont("helvetica", "italic")
          const tipLines = doc.splitTextToSize(`💡 Beginner Tip: ${step.beginnerTip}`, pageWidth - margin * 2 - 5)
          doc.text(tipLines, margin + 5, yPosition)
          yPosition += tipLines.length * 4 + 2
          doc.setTextColor(0)
        }

        // Pro tip
        if (step.proTip) {
          doc.setFontSize(8)
          doc.setTextColor(200, 100, 0)
          doc.setFont("helvetica", "italic")
          const tipLines = doc.splitTextToSize(`⭐ Pro Tip: ${step.proTip}`, pageWidth - margin * 2 - 5)
          doc.text(tipLines, margin + 5, yPosition)
          yPosition += tipLines.length * 4 + 2
          doc.setTextColor(0)
        }

        // Safety warning
        if (step.safetyWarning) {
          doc.setFontSize(8)
          doc.setTextColor(200, 0, 0)
          doc.setFont("helvetica", "bold")
          const warnLines = doc.splitTextToSize(`⚠️ Safety: ${step.safetyWarning}`, pageWidth - margin * 2 - 5)
          doc.text(warnLines, margin + 5, yPosition)
          yPosition += warnLines.length * 4 + 2
          doc.setTextColor(0)
        }

        // Common mistake
        if (step.commonMistake) {
          doc.setFontSize(8)
          doc.setTextColor(150, 0, 150)
          doc.setFont("helvetica", "italic")
          const mistakeLines = doc.splitTextToSize(`❌ Avoid: ${step.commonMistake}`, pageWidth - margin * 2 - 5)
          doc.text(mistakeLines, margin + 5, yPosition)
          yPosition += mistakeLines.length * 4 + 2
          doc.setTextColor(0)
        }

        yPosition += 8
      })

      // Save the PDF
      doc.save(`${project.name.toLowerCase().replace(/\s+/g, "-")}-guide.pdf`)

      toast({
        title: "PDF Downloaded",
        description: "Your project plan has been downloaded successfully",
      })
    } catch (error) {
      console.error("[v0] PDF generation error:", error)
      toast({
        title: "Download Failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      })
    }
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
