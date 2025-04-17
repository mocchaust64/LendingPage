import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Fingerprint, Key, Users, RefreshCw, Wallet, Building2, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import SignUpForm from "@/components/sign-up-form"
import FeatureCard from "@/components/feature-card"
import RoadmapTimeline from "@/components/roadmap-timeline"
import TechStack from "@/components/tech-stack"
import UseCase from "@/components/use-case"
import AnimatedSection from "@/components/animated-section"
import ParticlesBackground from "@/components/particles-background"
import TransactionDemo from "@/components/transaction-demo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Particles */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 py-16 md:py-24 lg:py-32">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 lg:gap-12 md:grid-cols-2 md:items-center">
            <AnimatedSection className="space-y-8 text-white" direction="left">
              <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-purple-100 backdrop-blur-sm">
                Enterprise-Grade Security for Web3
              </div>
              <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  <span className="block mb-2">Secure Enterprise</span>
                  <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                    Asset Management
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                  Gokei Wallet combines multisig security, biometric authentication, and decentralized control to
                  protect your enterprise's digital assets on Solana.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
                >
                  <Link href="#sign-up" className="flex items-center gap-2">
                    Get Early Access
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <span className="absolute inset-0 -z-10 translate-y-[100%] rounded-full bg-orange-400 transition-transform duration-300 group-hover:translate-y-[0%]"></span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  <Link href="#features" className="flex items-center gap-2">
                    Explore Features
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative" direction="right">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-2 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>

                {/* Wallet Interface Mockup */}
                <div className="absolute inset-4 rounded-xl bg-gray-900/80 p-4 backdrop-blur-sm overflow-hidden">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                      <span className="text-sm font-medium text-white">Gokei Enterprise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white">Connected</div>
                    </div>
                  </div>

                  <div className="mb-4 rounded-lg bg-gray-800/50 p-3">
                    <div className="mb-1 text-xs text-gray-400">Total Balance</div>
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white">128,450.75</span>
                      <span className="text-sm text-gray-400">SOL</span>
                    </div>
                    <div className="text-xs text-green-400">+2.4% today</div>
                  </div>

                  <div className="mb-4 grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-800/30 p-2 transition-colors hover:bg-gray-800/50">
                      <span className="text-xs text-gray-300">Send</span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-800/30 p-2 transition-colors hover:bg-gray-800/50">
                      <span className="text-xs text-gray-300">Receive</span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-800/30 p-2 transition-colors hover:bg-gray-800/50">
                      <span className="text-xs text-gray-300">History</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-800/50 p-3">
                    <div className="mb-2 text-xs font-medium text-white">Guardian Status</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-gray-300">Guardian 1</span>
                        </div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-gray-300">Guardian 2</span>
                        </div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                          <span className="text-xs text-gray-300">Guardian 3</span>
                        </div>
                        <span className="text-xs text-gray-400">Offline</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500/30 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl"></div>
              </div>

              {/* Floating Elements - Repositioned to avoid overlap */}
              <div className="absolute -right-4 bottom-4 rounded-lg bg-white/10 p-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium text-white">Secure Transactions</span>
                </div>
              </div>

              <div className="absolute -left-4 bottom-4 rounded-lg bg-white/10 p-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Fingerprint className="h-4 w-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Biometric Auth</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.4} className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-purple-300" />
                <div>
                  <h3 className="font-medium text-white">Enterprise Security</h3>
                  <p className="text-sm text-gray-300">Multi-signature protection</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Users className="h-6 w-6 text-blue-300" />
                <div>
                  <h3 className="font-medium text-white">Guardian Control</h3>
                  <p className="text-sm text-gray-300">Distributed authorization</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Fingerprint className="h-6 w-6 text-orange-300" />
                <div>
                  <h3 className="font-medium text-white">WebAuthn Integration</h3>
                  <p className="text-sm text-gray-300">Biometric authentication</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Transaction Demo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center" direction="up">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Experience Seamless Transactions</h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600">
              Watch how Gokei Wallet handles multi-signature transactions with WebAuthn authentication, providing both
              security and ease of use.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <TransactionDemo />
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-100 opacity-70 blur-3xl"></div>
        <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimatedSection className="mx-auto max-w-3xl" direction="up">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1.5 text-sm font-semibold text-white">
              Why Choose Gokei
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Enterprise-Grade Asset Management for the Web3 Era</h2>
            <p className="mb-10 text-lg text-gray-600">
              Gokei Wallet combines the security of multisig technology with the convenience of biometric
              authentication. Our Guardian model ensures your enterprise assets remain secure while maintaining the
              flexibility your business needs.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection className="group" direction="up" delay={0.1}>
              <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-purple-100 hover:shadow-lg">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Military-Grade Security</h3>
                <p className="text-gray-600">
                  WebAuthn biometric authentication combined with multisig Guardian model ensures your assets remain
                  secure from unauthorized access.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection className="group" direction="up" delay={0.2}>
              <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Distributed Control</h3>
                <p className="text-gray-600">
                  Set custom signature thresholds and manage multiple Guardians for distributed asset control, perfect
                  for enterprise teams.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection className="group" direction="up" delay={0.3}>
              <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-orange-100 hover:shadow-lg">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Web2-Friendly Experience</h3>
                <p className="text-gray-600">
                  Intuitive interface designed for non-technical users, bridging the gap between traditional finance and
                  Web3 capabilities.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection direction="up" delay={0.4}>
            <Button className="mt-12 bg-orange-500 text-white hover:bg-orange-600">
              <Link href="#sign-up" className="flex items-center gap-2">
                Sign Up Early to Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center" direction="up">
            <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-600 mb-4">
              Key Features
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              Enterprise Security <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Without Complexity</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Gokei combines enterprise-grade security with intuitive design, giving you powerful protection without the technical hurdles.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection direction="up" delay={0.1}>
              <FeatureCard
                icon={<Shield className="h-6 w-6" />}
                title="Multi-signature Security"
                description="Multiple Guardians must approve transactions, protecting against single points of failure or compromise."
                color="purple"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <FeatureCard
                icon={<Fingerprint className="h-6 w-6" />}
                title="Biometric Authentication"
                description="WebAuthn integration allows for fingerprint or face ID authorization from any device."
                color="blue"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <FeatureCard
                icon={<Key className="h-6 w-6" />}
                title="Recovery Key System"
                description="Backup access mechanism ensures you never lose access to your assets."
                color="teal"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4}>
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Guardian Management"
                description="Easily add, remove, or replace Guardians as your organizational needs change."
                color="orange"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.5}>
              <FeatureCard
                icon={<RefreshCw className="h-6 w-6" />}
                title="Synchronized Access"
                description="Changes are instantly synced across all authorized devices for seamless collaboration."
                color="pink"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.6}>
              <FeatureCard
                icon={<Wallet className="h-6 w-6" />}
                title="Enterprise Controls"
                description="Set transaction limits, authorization thresholds, and spending policies across your organization."
                color="indigo"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center" direction="up">
            <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600">
              Benefits
            </div>
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">Why Enterprises Choose Gokei Wallet</h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-100 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Enterprise-Grade Security</h3>
                <p className="text-gray-600">WebAuthn and multisig protect assets from cyber threats.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-100 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Distributed Control</h3>
                <p className="text-gray-600">
                  Multiple Guardians approve transactions, eliminating single points of failure.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-100 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Web2-Friendly Interface</h3>
                <p className="text-gray-600">
                  Intuitive design with multilingual support, accessible to non-technical staff.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4}>
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-100 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Reliable Recovery</h3>
                <p className="text-gray-600">Recovery Key ensures access even if devices are lost.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.5}>
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-100 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">DeFi Integration</h3>
                <p className="text-gray-600">Low-cost, high-speed transactions on Solana for Web3 businesses.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>
        <div className="absolute -right-32 top-0 h-64 w-64 rounded-full bg-purple-50 opacity-70 blur-3xl"></div>
        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection className="text-center" direction="up">
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
              Roadmap
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Vision and Development Roadmap</h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-600">
              We're committed to building a secure, user-friendly platform for enterprise asset management. Here's our
              plan to get there.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <RoadmapTimeline />
          </AnimatedSection>
          <AnimatedSection className="mt-10 text-center" direction="up" delay={0.4}>
            <Button className="bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-md">
              <Link href="#sign-up" className="flex items-center gap-2">
                Sign Up Early for Roadmap Updates <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center" direction="up">
            <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-600">
              Getting Started
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Get Started with Gokei Wallet in Minutes</h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-600">
              Our streamlined onboarding process makes it easy to secure your enterprise assets with minimal technical
              knowledge.
            </p>
          </AnimatedSection>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="relative flex gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="absolute -left-3 -top-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-xl font-bold text-white shadow-md">
                  1
                </div>
                <div className="ml-6 mt-2">
                  <h3 className="mb-2 text-xl font-semibold">Sign Up Early</h3>
                  <p className="text-gray-600">Submit the form to gain early access to the beta.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative flex gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="absolute -left-3 -top-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-xl font-bold text-white shadow-md">
                  2
                </div>
                <div className="ml-6 mt-2">
                  <h3 className="mb-2 text-xl font-semibold">Create Enterprise Wallet</h3>
                  <p className="text-gray-600">Set up a wallet with WebAuthn and add Guardians.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.3}>
              <div className="relative flex gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="absolute -left-3 -top-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-xl font-bold text-white shadow-md">
                  3
                </div>
                <div className="ml-6 mt-2">
                  <h3 className="mb-2 text-xl font-semibold">Manage Transactions</h3>
                  <p className="text-gray-600">Create and sign transfer proposals with biometric authentication.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.4}>
              <div className="relative flex gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="absolute -left-3 -top-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-xl font-bold text-white shadow-md">
                  4
                </div>
                <div className="ml-6 mt-2">
                  <h3 className="mb-2 text-xl font-semibold">Recover Securely</h3>
                  <p className="text-gray-600">Use the Recovery Key for uninterrupted access.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection className="mt-12 text-center" direction="up" delay={0.5}>
            <Button className="bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-md">
              <Link href="#sign-up" className="flex items-center gap-2">
                Sign Up Early Now! <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center" direction="up">
            <div className="mb-4 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-700">
              Technology
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Powered by Cutting-Edge Technology</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
              Built on Solana blockchain, WebAuthn for biometric security, and Firebase for data sync, Gokei Wallet
              delivers a seamless and secure experience.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <TechStack />
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12" direction="up">
            <div className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
              Use Cases
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              Who Benefits from <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Gokei Wallet</span>?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Gokei Wallet is designed to meet the needs of various enterprise users in the Web3 space,
              providing security and convenience for different types of organizations.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection direction="up" delay={0.1}>
              <UseCase
                title="DeFi Enterprises"
                description="Manage investment funds or digital assets with multi-Guardian approvals, ensuring security for financial operations."
                icon={<Wallet className="h-full w-full" />}
                color="purple"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <UseCase
                title="Web3 Companies"
                description="Integrate wallet into payment or asset management workflows, with built-in security features for your business operations."
                icon={<Building2 className="h-full w-full" />}
                color="blue"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <UseCase
                title="Project Teams"
                description="Distribute asset control among team members for transparency, with customizable approval requirements for different transaction types."
                icon={<Users2 className="h-full w-full" />}
                color="orange"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="sign-up"
        className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 py-24"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 lg:gap-12 md:grid-cols-2 md:items-center">
            <AnimatedSection direction="left">
              <div className="text-white">
                <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                  Early Access Program
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Secure Your Enterprise Assets?</h2>
                <p className="mb-8 text-lg text-gray-200">
                  Join the Gokei Wallet early access program to experience a secure, user-friendly, and decentralized
                  asset management solution on Solana.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <p className="text-gray-200">Priority access to beta releases</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <p className="text-gray-200">Dedicated onboarding support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <p className="text-gray-200">Influence product development roadmap</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="overflow-hidden rounded-xl bg-white/10 p-1 backdrop-blur-md">
                <div className="rounded-lg bg-white p-6 text-gray-800">
                  <h3 className="mb-6 text-center text-xl font-bold">Sign Up for Early Access</h3>
                  <SignUpForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 md:py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-6 text-xl font-bold">Gokei Wallet</h3>
              <p className="mb-6 text-gray-400">The Ultimate Asset Management Solution for Enterprises on Solana</p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-orange-500"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-orange-500"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-orange-500"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold">Connect</h3>
              <p className="mb-4 text-gray-400">
                Have questions about Gokei Wallet? We're here to help you secure your enterprise assets.
              </p>
              <div className="rounded-lg bg-gray-800 p-4">
                <p className="mb-2 text-sm font-medium text-gray-300">Contact Us</p>
                <p className="mb-4 text-gray-400">info@gokeiwallet.com</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Gokei Wallet. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="text-sm text-gray-400 hover:text-orange-500">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-orange-500">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-orange-500">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
