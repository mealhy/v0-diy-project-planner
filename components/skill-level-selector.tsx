"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { User } from "lucide-react"
import type { SkillLevel } from "@/lib/projects-data"

interface SkillLevelSelectorProps {
  skillLevel: SkillLevel
  onSkillLevelChange: (level: SkillLevel) => void
}

export function SkillLevelSelector({ skillLevel, onSkillLevelChange }: SkillLevelSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          Your Skill Level
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={skillLevel}
          onValueChange={(value) => onSkillLevelChange(value as SkillLevel)}
          className="space-y-3"
        >
          <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
            <RadioGroupItem value="beginner" id="beginner" />
            <Label htmlFor="beginner" className="flex-1 cursor-pointer">
              <div className="font-medium text-foreground">Beginner</div>
              <div className="text-sm text-muted-foreground">New to DIY projects, need detailed guidance</div>
            </Label>
          </div>

          <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
            <RadioGroupItem value="intermediate" id="intermediate" />
            <Label htmlFor="intermediate" className="flex-1 cursor-pointer">
              <div className="font-medium text-foreground">Intermediate</div>
              <div className="text-sm text-muted-foreground">Some experience with home improvement</div>
            </Label>
          </div>

          <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
            <RadioGroupItem value="pro" id="pro" />
            <Label htmlFor="pro" className="flex-1 cursor-pointer">
              <div className="font-medium text-foreground">Professional</div>
              <div className="text-sm text-muted-foreground">Experienced, just need the checklist</div>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
