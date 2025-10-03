"use client"

import { useState } from "react"
import { ProjectSelector } from "@/components/project-selector"
import { MaterialsChecklist } from "@/components/materials-checklist"
import { BudgetCalculator } from "@/components/budget-calculator"
import { StepGuide } from "@/components/step-guide"
import { ExportOptions } from "@/components/export-options"
import { SkillLevelSelector } from "@/components/skill-level-selector"
import type { Project, SkillLevel } from "@/lib/projects-data"
import { Hammer, Sparkles } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner")

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Hammer className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground text-balance">DIY Project Planner</h1>
                <p className="text-sm text-muted-foreground">Your step-by-step guide to home improvement success</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {/* Hero Section */}
            <div className="rounded-lg border border-border bg-gradient-to-br from-primary/10 via-background to-background p-8 text-center">
              <div className="mx-auto max-w-2xl space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground text-balance">Plan Your Next Home Project</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get personalized materials lists, budget estimates, and step-by-step instructions for your DIY
                  projects. Track your progress and never miss a step.
                </p>
              </div>
            </div>

            {/* Project Selection */}
            <div className="rounded-lg border border-border bg-card p-6">
              <ProjectSelector onProjectSelect={setSelectedProject} />
            </div>

            {/* Project Details */}
            {selectedProject && (
              <div className="space-y-8">
                {/* Skill Level */}
                <SkillLevelSelector skillLevel={skillLevel} onSkillLevelChange={setSkillLevel} />

                {/* Budget Calculator */}
                <BudgetCalculator project={selectedProject} />

                {/* Materials & Tools */}
                <MaterialsChecklist project={selectedProject} />

                {/* Step-by-Step Guide */}
                <StepGuide project={selectedProject} skillLevel={skillLevel} />

                {/* Export Options */}
                <ExportOptions project={selectedProject} skillLevel={skillLevel} />

                {/* Recommendations */}
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-3 font-semibold text-foreground">💡 Pro Tips for This Project</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Always read through all steps before starting to understand the full scope</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Gather all materials and tools before beginning - it saves time and frustration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Don't rush - quality work takes time, especially for beginners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Watch tutorial videos for visual guidance alongside these instructions</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!selectedProject && (
              <div className="rounded-lg border border-dashed border-border bg-muted/30 p-12 text-center">
                <Hammer className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Select a Project to Get Started</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose a DIY project from the dropdown above to see materials, budget estimates, and step-by-step
                  instructions.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>DIY Project Planner - Your trusted guide for home improvement projects</p>
              <p className="mt-2">
                Affiliate links help support this free tool. Prices and availability subject to change.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <Toaster />
    </>
  )
}
