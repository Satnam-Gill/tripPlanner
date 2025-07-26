"use client";
import Link from "next/link";
import {
  FaRocket,
  FaCreditCard,
  FaGlobe,
  FaBolt,
  FaShieldAlt,
  FaMobile,
  FaStar,
  FaBrain,
  FaMapMarkedAlt,
  FaUsers,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

export default function Hero() {
  const features = [
    {
      icon: FaRocket,
      title: "AI-Powered Planning",
      desc: "Smart recommendations based on your preferences and travel history",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: FaCreditCard,
      title: "Smart Budgeting",
      desc: "Real-time expense tracking with predictive cost analysis",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: FaGlobe,
      title: "Global Coverage",
      desc: "Plan trips anywhere with local insights and cultural tips",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaBolt,
      title: "Instant Sync",
      desc: "Real-time collaboration with travel companions",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      icon: FaShieldAlt,
      title: "Bank-Level Security",
      desc: "Your data protected with enterprise-grade encryption",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      icon: FaMobile,
      title: "Cross-Platform",
      desc: "Seamless experience across all your devices",
      gradient: "from-purple-400 to-pink-300",
    },
  ];

  const steps = [
    {
      title: "Tell Us Your Dreams",
      desc: "Share your destination, budget, and travel style preferences",
      icon: FaStar,
    },
    {
      title: "We Creates Magic",
      desc: "Our intelligent system crafts a personalized itinerary just for you",
      icon: FaBrain,
    },
    {
      title: "Live Your Adventure",
      desc: "Track, modify, and share your journey with real-time updates",
      icon: FaMapMarkedAlt,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 transition-all duration-300 pointer-events-none" />
      {/* Hero Section */}
      <div className="relative z-10 pt-16 md:pt-32 pb-20 md:pb-32 text-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                Plan Trips
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                Brilliantly
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Transform your wanderlust into perfectly crafted adventures with
              AI-powered planning, smart budgeting, and real-time collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/submit">
                <button className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl shadow-pink-500/40 hover:shadow-pink-500/60 hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </button>
              </Link>

              <button className="px-8 py-4 text-lg font-semibold rounded-full border border-white/30 text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "50K+", label: "Happy Travelers" },
              { number: "150+", label: "Countries Covered" },
              { number: "1M+", label: "Trips Planned" },
              { number: "4.9/5", label: "User Rating" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="text-2xl md:text-4xl font-black text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-b from-white/95 to-slate-50 py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Three Steps to Paradise
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process transforms your travel dreams into reality
              with unprecedented ease and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={i}
                  className="text-center relative animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="relative inline-block mb-6">
                    <div
                      className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-indigo-500 to-orange-700/70 flex items-center justify-center shadow-2xl shadow-indigo-500/30 hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="text-2xl md:text-3xl text-white" />
                    </div>
                    <div
                      className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold`}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Connection Line */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform -translate-x-6" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold mb-4">
              POWERFUL FEATURES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Why Travelers Choose Us
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience the future of travel planning with cutting-edge
              technology that adapts to your unique style and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={i}
                  className="group bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <IconComponent className="text-2xl text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats & Social Proof */}
      <div className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white text-sm font-semibold mb-4">
                TRUSTED GLOBALLY
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Join Millions of Smart Travelers
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                From weekend getaways to epic adventures, our platform has
                helped travelers save over $50M in travel costs while creating
                unforgettable memories.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <FaAward className="text-2xl text-yellow-400" />
                  <span className="font-semibold">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-2xl text-blue-400" />
                  <span className="font-semibold">50K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-2xl text-emerald-400" />
                  <span className="font-semibold">98% Success Rate</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "1M+", label: "Trips Planned", icon: FaMapMarkedAlt },
                { number: "$50M+", label: "Money Saved", icon: FaCreditCard },
                { number: "150+", label: "Countries", icon: FaGlobe },
                { number: "4.9★", label: "User Rating", icon: FaStar },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 hover:bg-white/20"
                >
                  <stat.icon className="text-3xl text-blue-400 mb-3 mx-auto" />
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready for Your Next Adventure?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands of travelers who&apos;ve discovered the smarter way
            to plan. Your perfect trip is just one click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link href="/submit">
              <button className="px-10 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl shadow-pink-500/40 hover:shadow-pink-500/60 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                Start Planning Now
              </button>
            </Link>
          </div>

          <p className="text-white/70 text-sm">
            Free to start • No credit card required • 30-day money-back
            guarantee
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-br from-slate-900 to-black py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                TripPlanner Pro
              </h3>
              <p className="text-white/60 text-sm">
                Crafting extraordinary journeys since 2024
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} Built with ❤️ by Satnam Singh
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
