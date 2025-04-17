"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    teamSize: "",
    useCase: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formStep, setFormStep] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200 text-green-600">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="mb-4 text-2xl font-bold">Thank You!</h3>
        <p className="mb-6 text-gray-700">We've received your request for early access. We'll be in touch soon!</p>
        <div className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600">
          You'll receive a confirmation email shortly
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {formStep === 0 ? (
        <>
          <div className="mb-5">
            <Label htmlFor="email" className="mb-1.5 block text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@company.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="companyName" className="mb-1.5 block text-gray-700">
              Company Name
            </Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Your Company"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="border-gray-300 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="mt-8">
            <Button
              type="button"
              onClick={nextStep}
              className="group w-full bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-md py-2.5"
            >
              <span className="flex items-center justify-center gap-2">
                Continue
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-5">
            <Label htmlFor="teamSize" className="mb-1.5 block text-gray-700">
              Team Size
            </Label>
            <Select value={formData.teamSize} onValueChange={(value) => handleSelectChange("teamSize", value)}>
              <SelectTrigger className="border-gray-300 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201+">201+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <Label htmlFor="useCase" className="mb-1.5 block text-gray-700">
              Primary Use Case
            </Label>
            <Select value={formData.useCase} onValueChange={(value) => handleSelectChange("useCase", value)}>
              <SelectTrigger className="border-gray-300 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select use case" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="defi">DeFi Enterprise</SelectItem>
                <SelectItem value="web3">Web3 Company</SelectItem>
                <SelectItem value="team">Project Team</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="flex-1 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-50 py-2.5"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-md py-2.5"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Sign Up Early"
              )}
            </Button>
          </div>
        </>
      )}

      <p className="mt-4 text-center text-xs text-gray-500">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  )
}
