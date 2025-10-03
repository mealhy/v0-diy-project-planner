"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Clock, DollarSign } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface BudgetCalculatorProps {
  project: Project
}

export function BudgetCalculator({ project }: BudgetCalculatorProps) {
  const [roomSize, setRoomSize] = useState<number>(144) // 12x12 default
  const [hoursPerDay, setHoursPerDay] = useState<number>(4)
  const [materialCost, setMaterialCost] = useState<number>(0)

  useEffect(() => {
    // Calculate default material cost
    const defaultCost = project.materials.reduce((sum, m) => sum + m.estimatedCost, 0)
    setMaterialCost(defaultCost)
  }, [project])

  const calculateEstimates = () => {
    let estimatedCost = materialCost
    let estimatedTime = project.baseTime

    // Adjust for room size if applicable
    if (project.costPerSqFt && roomSize) {
      const additionalCost = roomSize * project.costPerSqFt
      estimatedCost = additionalCost
    }

    // Adjust time based on room size
    if (project.costPerSqFt && roomSize) {
      const sizeFactor = roomSize / 144 // 144 sq ft is baseline (12x12)
      estimatedTime = project.baseTime * sizeFactor
    }

    const daysNeeded = Math.ceil(estimatedTime / hoursPerDay)

    return {
      cost: estimatedCost,
      hours: estimatedTime,
      days: daysNeeded,
    }
  }

  const estimates = calculateEstimates()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Budget & Time Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          {project.costPerSqFt && (
            <div className="space-y-2">
              <Label htmlFor="room-size">Room Size (sq. ft.)</Label>
              <Input
                id="room-size"
                type="number"
                value={roomSize}
                onChange={(e) => setRoomSize(Number(e.target.value))}
                min="1"
                placeholder="144"
              />
              <p className="text-xs text-muted-foreground">Example: 12ft × 12ft = 144 sq. ft.</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="hours-per-day">Hours Available Per Day</Label>
            <Input
              id="hours-per-day"
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              min="1"
              max="24"
              placeholder="4"
            />
            <p className="text-xs text-muted-foreground">How many hours can you work daily?</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="material-cost">Material Cost ($)</Label>
            <Input
              id="material-cost"
              type="number"
              value={materialCost}
              onChange={(e) => setMaterialCost(Number(e.target.value))}
              min="0"
              placeholder="0"
            />
            <p className="text-xs text-muted-foreground">Adjust based on your selections</p>
          </div>
        </div>

        <div className="space-y-3 rounded-lg border border-border bg-muted/50 p-4">
          <h4 className="font-semibold text-foreground">Estimated Results</h4>

          <div className="flex items-center justify-between rounded-lg bg-background p-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Total Cost</span>
            </div>
            <span className="text-lg font-bold text-primary">${estimates.cost.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-background p-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Total Time</span>
            </div>
            <span className="text-lg font-bold text-primary">{estimates.hours.toFixed(1)} hours</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-background p-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Days Needed</span>
            </div>
            <span className="text-lg font-bold text-primary">
              {estimates.days} {estimates.days === 1 ? "day" : "days"}
            </span>
          </div>
        </div>

        <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> These are estimates based on average conditions. Actual costs and time may vary
            depending on your specific situation, skill level, and unforeseen complications.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
