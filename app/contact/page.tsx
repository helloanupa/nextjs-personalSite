"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Send, Mail, MapPin, Clock, Linkedin, Github, Instagram } from "lucide-react";

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
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header active="contact" />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Let's Talk With Me :)</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Have a project in mind or want to discuss opportunities? I'm always interested in hearing about new challenges and collaborations.
          </p>
        </header>

        

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                      <Mail size={24} className="text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-1">Email</p>
                      <a href="mailto:anupadenil@gmail.com" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors truncate block">
                        anupadenil@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                      <MapPin size={24} className="text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-1">Location</p>
                      <p className="text-gray-900 font-semibold">Colombo, Sri Lanka</p>
                      <p className="text-sm text-gray-500 mt-2">UTC+5:30</p>
                    </div>
                  </div>
                </div>

                {/* Availability Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg flex-shrink-0">
                      <Clock size={24} className="text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-600 font-semibold tracking-wider mb-1">Availability</p>
                      <p className="text-gray-900 font-semibold">Available Now</p>
                      <p className="text-sm text-gray-600 mt-2">Open for projects & collaborations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-6">Connect With Me</p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/anupadenil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://github.com/helloanupa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-200"
                    title="GitHub"
                  >
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.instagram.com/devbyanupa?igsh=ZGN2bDBvMG02cDI4&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-pink-600 hover:text-white transition-all duration-200"
                    title="Instagram"
                  >
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Send Me a Message</h2>
                <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email Field - Two Columns on Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Full Name*</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Enter your Name"
                      className="w-full px-4 py-3 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Email Address*</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Enter a valid email address"
                      className="w-full px-4 py-3 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Subject*</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Enter the subject of your message"
                    className="w-full px-4 py-3 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message*</label>
                  <textarea 
                    name="message"
                    required
                    rows={6}
                    placeholder="Enter your message here."
                    className="w-full px-4 py-3 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 sm:py-3.5 bg-blue-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} strokeWidth={2} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {status === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in">
                    <p className="text-green-700 font-semibold text-center flex items-center justify-center gap-2">
                      <span className="text-2xl">✓</span>
                      Thank you! Your message has been sent successfully. I'll get back to you soon!
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-in fade-in">
                    <p className="text-red-700 font-semibold text-center flex items-center justify-center gap-2">
                      <span className="text-2xl">✕</span>
                      Oops! Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center pt-4">
                  Your privacy is important. We'll only use your information to respond to your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
