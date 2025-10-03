"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Lightbulb } from "lucide-react"
import type { Project, SkillLevel } from "@/lib/projects-data"

interface StepGuideProps {
  project: Project
  skillLevel: SkillLevel
}

export function StepGuide({ project, skillLevel }: StepGuideProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem(`steps-${project.id}`)
    if (saved) {
      setCompletedSteps(new Set(JSON.parse(saved)))
    } else {
      setCompletedSteps(new Set())
    }
  }, [project.id])

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem(`steps-${project.id}`, JSON.stringify(Array.from(completedSteps)))
  }, [completedSteps, project.id])

  const toggleStep = (stepId: string) => {
    const newSet = new Set(completedSteps)
    if (newSet.has(stepId)) {
      newSet.delete(stepId)
    } else {
      newSet.add(stepId)
    }
    setCompletedSteps(newSet)
  }

  const progress = (completedSteps.size / project.steps.length) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Step-by-Step Guide
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            {completedSteps.size} / {project.steps.length} Complete
          </Badge>
        </div>
        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {project.steps.map((step, index) => (
            <AccordionItem key={step.id} value={step.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <Checkbox
                    checked={completedSteps.has(step.id)}
                    onCheckedChange={() => toggleStep(step.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                        completedSteps.has(step.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className={completedSteps.has(step.id) ? "line-through opacity-60" : ""}>{step.title}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="ml-14 space-y-4 pt-2">
                  <p className="text-sm leading-relaxed text-foreground">{step.description}</p>

                  {skillLevel === "beginner" && step.beginnerTips && (
                    <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-primary mb-1">Beginner Tip</p>
                          <p className="text-sm text-foreground">{step.beginnerTips}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Estimated time: {step.estimatedTime} minutes</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
