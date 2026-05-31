/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, ShieldAlert, Sparkles, Database, Code, Mail, ArrowUpRight, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FormValues {
  name: string;
  email: string;
  category: string;
  budget: string;
  details: string;
}

interface SavedMessage extends FormValues {
  id: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    category: "Custom Block FSE Theme",
    budget: "$5,000 - $15,000",
    details: ""
  });

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [sendStage, setSendStage] = useState<"idle" | "compiling" | "validating" | "encrypting" | "success">("idle");
  const [stageProgress, setStageProgress] = useState(0);
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);

  // Load existing mock messages from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("wp_portfolio_messages");
      if (stored) {
        setSavedMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local storage lookup failed", e);
    }
  }, []);

  const validate = (values: FormValues): { [key: string]: string } => {
    const errs: { [key: string]: string } = {};
    if (!values.name.trim()) errs.name = "Architect name/identity is required";
    if (!values.email.trim()) {
      errs.email = "Target email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errs.email = "Invalid email formatting parsed";
    }
    if (!values.details.trim()) {
      errs.details = "Please supply project specification briefs";
    } else if (values.details.length < 15) {
      errs.details = "Specs must contain at least 15 characters of detail";
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (touched[name]) {
        setErrors(validate(updated));
      }
      return updated;
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      details: true
    });

    if (Object.keys(validationErrors).length > 0) return;

    // Trigger cool technical compile step cycle
    setSendStage("compiling");
    setStageProgress(15);

    // Compilation progress stepper simulator
    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    await wait(600);
    setSendStage("validating");
    setStageProgress(45);

    await wait(700);
    setSendStage("encrypting");
    setStageProgress(80);

    await wait(800);
    setSendStage("success");
    setStageProgress(100);

    // Persist local message
    const msg: SavedMessage = {
      ...formData,
      id: "msg-" + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString() + " (" + new Date().toLocaleDateString() + ")"
    };

    const newMessages = [msg, ...savedMessages];
    setSavedMessages(newMessages);
    localStorage.setItem("wp_portfolio_messages", JSON.stringify(newMessages));

    // Reset Form Fields after slight delay
    await wait(500);
  };

  const clearSandboxMessages = () => {
    setSavedMessages([]);
    localStorage.removeItem("wp_portfolio_messages");
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      category: "Custom Block FSE Theme",
      budget: "$5,000 - $15,000",
      details: ""
    });
    setTouched({});
    setErrors({});
    setSendStage("idle");
    setStageProgress(0);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden border-t border-gray-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct communication context (Col: 5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-850/60 px-3 py-1.5 rounded-md inline-flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Initialize Interaction</span>
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Let's Build WordPress Excellence Together.
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
                Whether you need a high-end enterprise WooCommerce stack, a specialized React custom editor block suite, or a detailed Speed Audit, I am ready to deploy.
              </p>
            </div>

            {/* Quick response stats */}
            <div className="space-y-4">
              <div className="p-4.5 rounded-xl border border-gray-900 bg-slate-900/10 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-850/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Database className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-gray-500 font-bold uppercase tracking-wider">Estimated Setup Time</span>
                  <span className="font-display font-bold text-sm text-gray-200">Contract drafts prepared in 24 hrs</span>
                </div>
              </div>

              <div className="p-4.5 rounded-xl border border-gray-900 bg-slate-900/10 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-850/60 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Code className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-gray-500 font-bold uppercase tracking-wider">Standard Project Methodologies</span>
                  <span className="font-display font-bold text-sm text-gray-200">Strict Git workflows & Local setups</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-900 space-y-2">
              <p className="font-sans text-xs text-gray-500 uppercase tracking-widest font-bold">Direct Channels</p>
              <p className="font-mono text-xs sm:text-sm text-cyan-400">contracts@alexcarver-developer.io</p>
              <p className="font-sans text-xs text-gray-400 font-medium">Located in San Francisco, CA — Servicing Globally</p>
            </div>
          </div>

          {/* Right Column: Custom interactive form workspace (Col: 7) */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-gray-800 bg-slate-900/10 h-full p-6 sm:p-8 space-y-6 relative">
            
            <AnimatePresence mode="wait">
              {sendStage === "idle" ? (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <h3 className="font-display font-bold text-lg text-white pb-3 border-b border-gray-900">
                    Portfolio Inquiry Specification
                  </h3>

                  {/* Dual Grid Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name field */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="name-input" className="font-sans text-xs font-bold text-gray-300">
                        Your Identity / Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe / Acme Inc"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-950 border font-sans text-sm outline-none transition duration-300 ${
                          errors.name && touched.name
                            ? "border-red-500 focus:border-red-400"
                            : "border-gray-850 focus:border-cyan-500"
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="font-sans text-[11px] text-red-500 font-semibold">{errors.name}</p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="email-input" className="font-sans text-xs font-bold text-gray-300">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-950 border font-sans text-sm outline-none transition duration-300 ${
                          errors.email && touched.email
                            ? "border-red-500 focus:border-red-400"
                            : "border-gray-850 focus:border-cyan-500"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="font-sans text-[11px] text-red-500 font-semibold">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Dropdowns Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Category Selection dropdown */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="category-select" className="font-sans text-xs font-bold text-gray-300">
                        Inquiry Scope Category
                      </label>
                      <div className="relative">
                        <select
                          id="category-select"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-850 font-sans text-sm outline-none focus:border-cyan-500 appearance-none cursor-pointer"
                        >
                          <option value="Custom Block FSE Theme">Custom Block FSE Theme</option>
                          <option value="Bespoke WooCommerce Integrations">Bespoke WooCommerce Integrations</option>
                          <option value="Advanced Core Web Vitals Speed Auditing">Advanced Speed Auditing</option>
                          <option value="Next.js Headless Decoupled WP">Headless Decoupled Setup</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                      </div>
                    </div>

                    {/* Budget selection slider category */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="budget-select" className="font-sans text-xs font-bold text-gray-300">
                        Budget Matrix Allocation
                      </label>
                      <div className="relative">
                        <select
                          id="budget-select"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-850 font-sans text-sm outline-none focus:border-cyan-500 appearance-none cursor-pointer"
                        >
                          <option value="<$5,000">&lt; $5,000</option>
                          <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                          <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                          <option value="$30,000+">$30,000+</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                      </div>
                    </div>
                  </div>

                  {/* Project specifications details field */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="details-textarea" className="font-sans text-xs font-bold text-gray-300">
                      Project specifications & timeline details
                    </label>
                    <textarea
                      id="details-textarea"
                      name="details"
                      rows={5}
                      value={formData.details}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Please trace scope items: custom post requirements, target API configurations, Speed concerns..."
                      className={`w-full px-4 py-3 rounded-xl bg-gray-950 border font-sans text-sm outline-none transition duration-300 resize-none ${
                        errors.details && touched.details
                          ? "border-red-500 focus:border-red-400"
                          : "border-gray-850 focus:border-cyan-500"
                      }`}
                    />
                    {errors.details && touched.details && (
                      <p className="font-sans text-[11px] text-red-500 font-semibold">{errors.details}</p>
                    )}
                  </div>

                  {/* Send Action Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 font-sans font-bold text-white shadow-lg hover:from-cyan-400 hover:to-indigo-400 focus:outline-none flex items-center justify-center space-x-2.5 cursor-pointer hover:scale-[1.01] duration-300 self-center"
                  >
                    <span>Dispatch Project Parameters</span>
                    <Send className="w-4.5 h-4.5 transform group-hover:translate-x-0.5 duration-300" />
                  </button>

                </motion.form>
              ) : (
                /* Dynamic Technical compiled transmitter loader */
                <motion.div
                  key="loader"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col justify-center items-center text-center space-y-8"
                >
                  {sendStage !== "success" ? (
                    <div className="space-y-6 w-full max-w-sm flex flex-col items-center">
                      {/* Technical loading wheel */}
                      <div className="relative w-20 h-20 rounded-full border-4 border-gray-900 border-t-cyan-400 animate-spin flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-cyan-400 animate-pulse absolute" />
                      </div>

                      {/* Transmitting states */}
                      <div className="space-y-2 text-center w-full">
                        <h4 className="font-display font-semibold text-white text-base">
                          {sendStage === "compiling" && "Analyzing specifications details..."}
                          {sendStage === "validating" && "Verifying transmission endpoints..."}
                          {sendStage === "encrypting" && "Encrypting message packets securely..."}
                        </h4>
                        <div className="h-1.5 w-full bg-gray-950 rounded-full border border-gray-900 overflow-hidden relative">
                          <div
                            className="bg-cyan-500 h-full duration-500"
                            style={{ width: `${stageProgress}%` }}
                          />
                        </div>
                        <span className="font-mono text-[10px] text-gray-500 tracking-widest font-semibold uppercase">
                          PROCESS: {stageProgress}% COMPLETED
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Final successfully sent status modal view */
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="space-y-6 flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-display font-bold text-xl text-white">
                          Inquiry Dispatched Successfully!
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
                          Your contract details and variables have been serialized. An automated draft proposal is being calculated by Alex's parser. Expect direct feedback.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-gray-900 bg-gray-950/40 text-left space-y-1.5 max-w-sm w-full">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 font-bold">
                          SECURE TRANSMISSION RECEIPT
                        </span>
                        <div className="flex justify-between font-mono text-[10px] text-gray-500">
                          <span>Sender:</span>
                          <span className="text-gray-300 font-semibold">{formData.name}</span>
                        </div>
                        <div className="flex justify-between font-mono text-[10px] text-gray-500">
                          <span>Target ID:</span>
                          <span className="text-gray-300 font-semibold">{formData.email}</span>
                        </div>
                        <div className="flex justify-between font-mono text-[10px] text-gray-500">
                          <span>Budget Spec:</span>
                          <span className="text-cyan-400 font-bold">{formData.budget}</span>
                        </div>
                      </div>

                      <button
                        onClick={resetForm}
                        className="px-6 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs font-sans font-bold text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition"
                      >
                        Write Another Message
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simulated Live Local Inbox Sandbox */}
            {savedMessages.length > 0 && (
              <div className="border-t border-gray-900 pt-6 mt-6 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-cyan-400 flex items-center space-x-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>Active Storage Database Sandbox (Local)</span>
                  </h4>
                  <button
                    onClick={clearSandboxMessages}
                    className="text-[10px] font-mono text-gray-500 hover:text-red-400 transition"
                  >
                    Wipe Database Cache
                  </button>
                </div>
                <div className="space-y-3.5 overflow-y-auto max-h-[160px] pr-2">
                  {savedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-3.5 rounded-xl bg-gray-950/80 border border-gray-900 flex justify-between items-start text-xs font-sans hover:border-indigo-900 duration-300"
                    >
                      <div className="space-y-1 w-11/12">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-bold">{msg.name}</span>
                          <span className="text-gray-600">({msg.email})</span>
                        </div>
                        <div className="text-[10px] font-mono text-cyan-400/90 font-bold">
                          {msg.category} • {msg.budget}
                        </div>
                        <p className="text-gray-400 text-xs italic leading-relaxed truncate">{msg.details}</p>
                      </div>
                      <span className="text-[9px] font-mono text-gray-500 flex-shrink-0 text-right">
                        {msg.timestamp.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
