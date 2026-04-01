"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333]">
      <Header active="contact" />

      <main className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <h1 className="text-6xl font-light leading-tight">
            Let's Talk <br />
            <span className="italic text-blue-500">something</span> great.
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            Let's discuss your next project and bring your ideas to life. I'm always excited to work on new challenges
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs uppercase text-gray-400">Email</p>
              <a href="mailto:anupadenil@gmail.com" className="text-lg font-medium">
                anupadenil@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-400">Location</p>
              <p className="text-lg font-medium">Colombo, Sri Lanka</p>
            </div>
            
          </div>
        </div>
            <br></br>
        {/* FORM */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
         <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-[#f9f9f9] border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-[#f9f9f9] border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-[#f9f9f9] border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-[#f9f9f9] border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-black text-black rounded-2xl font-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/10 active:scale-[0.98] disabled:bg-gray-400"
              >
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                <Send size={18} />
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm text-center font-medium animate-pulse">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center font-medium">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
