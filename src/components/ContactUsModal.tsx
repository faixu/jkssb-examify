import React, { useState } from 'react';
import {
  X,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Wrench,
  MessageSquare,
} from 'lucide-react';

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [humanVerified, setHumanVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg('Please fill out all required fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!humanVerified) {
      setErrorMsg('Please check the human verification box to confirm you are not a robot.');
      return;
    }

    // Construct mailto URI for direct delivery while showing instant on-screen confirmation
    const mailtoSubject = encodeURIComponent(`[FlashMind Contact] ${subject.trim()} - from ${fullName.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${fullName.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`
    );

    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:flust786@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    mailtoLink.click();

    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setSubject('General Inquiry');
    setMessage('');
    setHumanVerified(false);
    setErrorMsg(null);
    setSubmitted(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-us-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageSquare size={22} />
            </div>
            <div>
              <h2 id="contact-us-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Contact Us &amp; Support Desk
              </h2>
              <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <ShieldCheck size={14} /> Guaranteed Response Within 24&ndash;48 Hours
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Contact Us"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-slate-300">
          {/* 1. Introductory Text */}
          <section className="space-y-2">
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              We value your questions, suggestions, and feedback. Whether you have a general inquiry about our JKSSB &amp; competitive exam study materials, want to suggest syllabus updates or report an MCQ correction, need technical assistance, or wish to reach us regarding advertising, partnerships, or copyright matters, our support team is here to help. Reach out using the direct contact channels or the message form below, and we will respond within <strong className="text-white">24 to 48 business hours</strong>.
            </p>
          </section>

          {/* 2. Direct Contact Cards */}
          <section aria-label="Direct Contact Information" className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Primary Support Email Card */}
            <a
              href="mailto:flust786@gmail.com"
              className="flex flex-col justify-between p-4 rounded-2xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  24&ndash;48h Reply
                </span>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Primary Support Email</h3>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5 break-all">flust786@gmail.com</p>
                <p className="text-xs text-slate-400 mt-1">For support, feedback &amp; copyright inquiries</p>
              </div>
            </a>

            {/* Phone Support Card */}
            <a
              href="tel:+916006580370"
              className="flex flex-col justify-between p-4 rounded-2xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Direct Line
                </span>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone Support</h3>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">+91 6006580370</p>
                <p className="text-xs text-slate-400 mt-1">Available during official operating hours</p>
              </div>
            </a>

            {/* Office / Operating Hours Card */}
            <div className="flex flex-col justify-between p-4 rounded-2xl bg-slate-800/70 border border-slate-700/70">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Clock size={20} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  IST (UTC+5:30)
                </span>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Operating Hours</h3>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">Mon &ndash; Sat, 9:00 AM &ndash; 6:00 PM</p>
                <p className="text-xs text-slate-400 mt-1">Closed on Sundays &amp; public holidays</p>
              </div>
            </div>
          </section>

          {/* 3. Functional Web Form Structure */}
          <section className="p-5 sm:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/70">
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-bold text-white">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Fill out the form below and our compliance or academic support team will get back to you within 24&ndash;48 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Thank You for Reaching Out!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Your inquiry has been prepared for <strong className="text-white">flust786@gmail.com</strong>. We review every message carefully and will respond within 24&ndash;48 business hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2">
                    <AlertCircle size={16} className="text-rose-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-full-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Study Material / Question Feedback">Study Material / Question Feedback</option>
                    <option value="Technical Support / Bug Report">Technical Support / Bug Report</option>
                    <option value="Copyright / DMCA Notice">Copyright / DMCA Notice</option>
                    <option value="Advertising & Partnerships">Advertising &amp; Partnerships</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you? Please include relevant details or page URLs if reporting an issue..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition resize-y"
                  />
                </div>

                {/* Simple Validation / Human Verification Notice */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <label className="flex items-start sm:items-center gap-2.5 cursor-pointer select-none text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={humanVerified}
                      onChange={(e) => setHumanVerified(e.target.checked)}
                      className="mt-0.5 sm:mt-0 w-4 h-4 rounded border-slate-600 bg-slate-900 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>
                      <strong className="text-white">Human Verification:</strong> I confirm that I am a human user submitting a genuine inquiry (not an automated script).
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/20 shrink-0 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* 4. Technical & Navigation Notice */}
          <section className="p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-100/90 space-y-1.5">
            <h3 className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2">
              <Wrench size={16} className="shrink-0" />
              Technical &amp; Navigation Notice
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              We are committed to providing a seamless user experience. If you encounter any broken links, loading errors, or accessibility issues while browsing our site, please report them directly to{' '}
              <a
                href="mailto:flust786@gmail.com"
                className="font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                flust786@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 sm:px-8 border-t border-slate-800 bg-slate-900/95 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Your privacy is protected. Email addresses submitted via this form are never sold or shared with third parties.
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
