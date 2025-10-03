"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Package, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects-data"

interface MaterialsChecklistProps {
  project: Project
}

export function MaterialsChecklist({ project }: MaterialsChecklistProps) {
  const [checkedMaterials, setCheckedMaterials] = useState<Set<string>>(new Set())
  const [checkedTools, setCheckedTools] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem(`checklist-${project.id}`)
    if (saved) {
      const { materials, tools } = JSON.parse(saved)
      setCheckedMaterials(new Set(materials))
      setCheckedTools(new Set(tools))
    } else {
      setCheckedMaterials(new Set())
      setCheckedTools(new Set())
    }
  }, [project.id])

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem(
      `checklist-${project.id}`,
      JSON.stringify({
        materials: Array.from(checkedMaterials),
        tools: Array.from(checkedTools),
      }),
    )
  }, [checkedMaterials, checkedTools, project.id])

  const toggleMaterial = (id: string) => {
    const newSet = new Set(checkedMaterials)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setCheckedMaterials(newSet)
  }

  const toggleTool = (id: string) => {
    const newSet = new Set(checkedTools)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setCheckedTools(newSet)
  }

  const totalCost = project.materials.reduce((sum, m) => sum + (checkedMaterials.has(m.id) ? m.estimatedCost : 0), 0)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Materials Needed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.materials.map((material) => (
            <div
              key={material.id}
              className="flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
            >
              <Checkbox
                id={material.id}
                checked={checkedMaterials.has(material.id)}
                onCheckedChange={() => toggleMaterial(material.id)}
                className="mt-1"
              />
              <div className="flex-1 space-y-1">
                <label
                  htmlFor={material.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {material.name}
                </label>
                <p className="text-sm text-muted-foreground">{material.description}</p>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-sm font-semibold text-primary">${material.estimatedCost}</span>
                  <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
                    <a
                      href={material.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Buy on Amazon
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Selected Materials Total:</span>
              <span className="text-xl font-bold text-primary">${totalCost.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            Tools Required
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.tools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
            >
              <Checkbox
                id={tool.id}
                checked={checkedTools.has(tool.id)}
                onCheckedChange={() => toggleTool(tool.id)}
                className="mt-1"
              />
              <div className="flex-1 space-y-1">
                <label
                  htmlFor={tool.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {tool.name}
                </label>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
                <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
                  <a
                    href={tool.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    Buy on Amazon
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
