"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Fingerprint, Check, ArrowRight, Shield, AlertCircle } from "lucide-react"

export default function TransactionDemo() {
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const steps = [
    { title: "Transaction Initiated", description: "User creates a new transaction proposal" },
    { title: "Biometric Authentication", description: "User verifies identity with WebAuthn" },
    { title: "Guardian Approval", description: "Transaction sent to Guardians for approval" },
    { title: "Multi-signature Verification", description: "Threshold of signatures reached" },
    { title: "Transaction Executed", description: "Assets transferred securely on Solana" },
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isPlaying && step < steps.length - 1) {
      timer = setTimeout(() => {
        setStep((prev) => prev + 1)
      }, 2000)
    } else if (step >= steps.length - 1) {
      setIsPlaying(false)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [step, isPlaying, steps.length])

  const handlePlay = () => {
    setStep(0)
    setIsPlaying(true)
  }

  const handleReset = () => {
    setStep(0)
    setIsPlaying(false)
  }

  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Enterprise Transaction Flow</h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </Button>
        </div>
      </div>

      {showDetails && (
        <div className="border-b border-gray-200 bg-gray-50 p-4 text-sm">
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 text-blue-600" />
            <p className="text-gray-700">
              Gokei Wallet uses a multi-signature approach where transactions require approval from multiple Guardians.
              This ensures no single point of failure and provides enterprise-grade security for your digital assets.
            </p>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="mb-8 flex flex-wrap justify-between">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center mb-4 w-1/5 min-w-[80px]">
              <div
                className={`relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  i < step
                    ? "border-green-600 bg-green-600 text-white"
                    : i === step
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {i < step ? <Check className="h-6 w-6" /> : <span>{i + 1}</span>}
                {i < steps.length - 1 && (
                  <div
                    className={`absolute left-12 top-1/2 h-0.5 w-[calc(100%-3rem)] -translate-y-1/2 transition-all duration-500 ${
                      i < step ? "bg-green-600" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
              <span
                className={`mt-2 text-center text-xs font-medium ${i === step ? "text-blue-600" : "text-gray-500"}`}
              >
                {s.title.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-xl bg-gray-50 p-6 shadow-inner">
          <div className="mb-4 flex items-center gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full ${
                step === 0
                  ? "bg-orange-100 text-orange-600"
                  : step === 1
                    ? "bg-purple-100 text-purple-600"
                    : step === 2
                      ? "bg-blue-100 text-blue-600"
                      : step === 3
                        ? "bg-green-100 text-green-600"
                        : "bg-teal-100 text-teal-600"
              } transition-all duration-300`}
            >
              {step === 0 && <ArrowRight className="h-7 w-7" />}
              {step === 1 && <Fingerprint className="h-7 w-7" />}
              {step === 2 && <Shield className="h-7 w-7" />}
              {step === 3 && <Check className="h-7 w-7" />}
              {step === 4 && <ArrowRight className="h-7 w-7" />}
            </div>
            <div>
              <h4 className="text-xl font-semibold">{steps[step].title}</h4>
              <p className="text-gray-600">{steps[step].description}</p>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            {step === 0 && (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-6 w-full max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-800">New Transaction</span>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">Draft</span>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <span className="font-medium text-gray-600">Transfer Amount:</span>
                    <span className="font-bold text-blue-600">1,000 SOL</span>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <span className="font-medium text-gray-600">Recipient:</span>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-sm">Gk7y...8fPq</span>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <span className="font-medium text-gray-600">Fee:</span>
                    <span className="text-gray-800">0.000005 SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Required Signatures:</span>
                    <span className="text-gray-800">2 of 3</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">Creating transaction proposal...</div>
              </div>
            )}

            {step === 1 && (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-100 text-purple-600 animate-pulse">
                  <Fingerprint className="h-12 w-12" />
                </div>
                <div className="text-center">
                  <p className="mb-3 text-lg font-medium">Verify your identity</p>
                  <p className="mb-4 text-sm text-gray-500">Use Face ID or fingerprint to authenticate</p>
                  <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                    Waiting for biometric verification...
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-8 grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Guardian 1</span>
                      <span className="text-xs text-green-600">Approved</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 animate-pulse">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Guardian 2</span>
                      <span className="text-xs text-blue-600">Pending</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Guardian 3</span>
                      <span className="text-xs text-gray-500">Waiting</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600">
                  Waiting for Guardian approval (1/2 signatures)
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-8 grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Guardian 1</span>
                      <span className="text-xs text-green-600">Approved</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Guardian 2</span>
                      <span className="text-xs text-green-600">Approved</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Guardian 3</span>
                      <span className="text-xs text-gray-500">Not Required</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                  Signature threshold reached (2/2)! Processing transaction...
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-10 w-10" />
                </div>
                <p className="mb-4 text-xl font-medium text-green-600">Transaction Complete!</p>
                <div className="mb-4 w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex justify-between">
                    <span className="font-medium text-gray-600">Transaction ID:</span>
                    <span className="font-mono text-xs">4xPk...7mHq</span>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <span className="font-medium text-gray-600">Status:</span>
                    <span className="text-green-600">Confirmed</span>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <span className="font-medium text-gray-600">Block:</span>
                    <span>149,327,651</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Time:</span>
                    <span>Just now</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {!isPlaying ? (
            <Button
              onClick={handlePlay}
              className="bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
              disabled={isPlaying}
            >
              {step === steps.length - 1 ? "Replay Demo" : "Start Demo"}
            </Button>
          ) : (
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-blue-600 text-blue-600 transition-all duration-300 hover:bg-blue-50"
            >
              Reset
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
