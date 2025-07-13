"use client";
import React from "react";

export function McpExplanation() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Main Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: What is MCP? */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mb-6">
                What is MCP?
              </h2>
              <p className="text-lg text-neutral-200 max-w-2xl">
                Model Context Protocol - The bridge that connects AI models to your tools and data
              </p>
            </div>

            {/* Flow Diagram */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <p className="text-sm text-green-400 font-mono">
                  Petal → MCP → Your Tools → APIs
                </p>
              </div>

              {/* Vertical Flow Visualization */}
              <div className="space-y-6">
                {/* Petal Input */}
                <div className="text-center">
                  <div className="bg-green-500/10 border-2 border-green-500 rounded-xl p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-sm">Petal</h3>
                    <p className="text-xs text-gray-300">Natural Language Input</p>
                  </div>
                  <div className="flex justify-center my-3">
                    <svg width="20" height="30" viewBox="0 0 20 30" className="text-green-400">
                      <path d="M10 0 L10 25 M5 20 L10 25 L15 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>

                {/* MCP Protocol */}
                <div className="text-center">
                  <div className="bg-green-500/10 border-2 border-green-500 rounded-xl p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-sm">MCP Protocol</h3>
                    <p className="text-xs text-gray-300">Standardized Communication</p>
                  </div>
                  <div className="flex justify-center my-3">
                    <svg width="20" height="30" viewBox="0 0 20 30" className="text-green-400">
                      <path d="M10 0 L10 25 M5 20 L10 25 L15 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>

                {/* MCP Servers */}
                <div className="text-center">
                  <div className="bg-green-500/10 border-2 border-green-500 rounded-xl p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17Z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-sm">MCP Servers</h3>
                    <p className="text-xs text-gray-300">Tool Integration</p>
                  </div>
                  <div className="flex justify-center my-3">
                    <svg width="20" height="30" viewBox="0 0 20 30" className="text-green-400">
                      <path d="M10 0 L10 25 M5 20 L10 25 L15 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>

                {/* External APIs */}
                <div className="text-center">
                  <div className="bg-green-500/10 border-2 border-green-500 rounded-xl p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1 text-sm">External APIs</h3>
                    <p className="text-xs text-gray-300">Real-world automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Why MCP Matters & Benefits */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mb-6">
                Why MCP Matters
              </h2>
              <p className="text-lg text-neutral-200 max-w-2xl">
                The technical foundation that makes secure, scalable automation possible
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.9 10.5,10V11.5H13.5V10C13.5,8.9 12.8,8.2 12,8.2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">Security</h4>
                <p className="text-sm text-gray-300">Secure, authenticated connections with your data staying local</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">Performance</h4>
                <p className="text-sm text-gray-300">Optimized data transmission with minimal latency</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,18.5C16.69,18.5 20.5,14.69 20.5,10S16.69,1.5 12,1.5S3.5,5.31 3.5,10S7.31,18.5 12,18.5M12,3C15.59,3 18.5,5.91 18.5,9.5S15.59,16 12,16S5.5,13.09 5.5,9.5S8.41,3 12,3M8,14L14,20L22,12L20.59,10.59L14,17.17L9.41,12.59L8,14Z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">Flexibility</h4>
                <p className="text-sm text-gray-300">Extensible architecture that grows with your needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,3C7.58,3 4,6.58 4,11C4,14.03 5.53,16.68 7.91,18.09L9,16.5C7.22,15.5 6,13.86 6,12C6,9.79 7.79,8 10,8S14,9.79 14,12C14,13.86 12.78,15.5 11,16.5L12.09,18.09C14.47,16.68 16,14.03 16,11C16,6.58 12.42,3 12,3M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">Scalability</h4>
                <p className="text-sm text-gray-300">Handles growing complexity effortlessly</p>
              </div>
            </div>

            {/* Technical Comparison */}
            <div className="space-y-6 mb-12">
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-4">Traditional MCP Setup</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Manual server configuration</li>
                  <li>• Complex authentication setup</li>
                  <li>• Individual tool integrations</li>
                  <li>• Technical expertise required</li>
                </ul>
              </div>

              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-4">Petal&apos;s Innovation</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Natural language interface</li>
                  <li>• Automated server management</li>
                  <li>• Pre-built integrations</li>
                  <li>• No coding required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Petal's Advantage - Full Width */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Petal&apos;s Advantage</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-4xl mx-auto">
              While MCP provides the technical foundation, Petal adds the intelligence layer that makes automation accessible to everyone.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center bg-green-500/20 rounded-lg px-6 py-3">
                <span className="text-green-400 font-mono text-sm">Natural Language → MCP → Automation</span>
              </div>
              <div className="flex items-center justify-center bg-green-500/20 rounded-lg px-6 py-3">
                <span className="text-green-400 font-mono text-sm">No Code Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 