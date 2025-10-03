"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { projects, categories, type Project } from "@/lib/projects-data"
import { Badge } from "@/components/ui/badge"

interface ProjectSelectorProps {
  onProjectSelect: (project: Project | null) => void
}

export function ProjectSelector({ onProjectSelect }: ProjectSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState<string>("")

  const filteredProjects =
    selectedCategory === "All Projects" ? projects : projects.filter((p) => p.category === selectedCategory)

  const handleProjectChange = (projectId: string) => {
    setSelectedProject(projectId)
    const project = projects.find((p) => p.id === projectId)
    onProjectSelect(project || null)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "intermediate":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20"
      case "pro":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Select Category</label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Select Project</label>
        <Select value={selectedProject} onValueChange={handleProjectChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose your DIY project" />
          </SelectTrigger>
          <SelectContent>
            {filteredProjects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
                <div className="flex items-center gap-2">
                  <span>{project.name}</span>
                  <Badge variant="outline" className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedProject && (
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">{projects.find((p) => p.id === selectedProject)?.description}</p>
        </div>
      )}
    </div>
  )
}
