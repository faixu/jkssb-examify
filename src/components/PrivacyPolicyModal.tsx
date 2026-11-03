import React from 'react';
import { X, Shield, Lock, Eye, FileText, CheckCircle2, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-heading"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-300 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-slate-800 bg-slate-950/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 id="privacy-policy-heading" className="text-base sm:text-lg font-extrabold text-white">
                Privacy Policy
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400">
                FlashMind – JKSSB Mock Test &amp; MCQ Quiz • Last Updated: November 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Privacy Policy"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-700">
          {/* Quick Notice Badge */}
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              This Privacy Policy applies to <strong>FlashMind – JKSSB Mock Test &amp; MCQ Quiz</strong> accessible at{' '}
              <span className="text-indigo-300 font-mono">https://jkssb-mcq-quiz.ai.studio/</span>. It adheres to Google AdSense
              Publisher Policies, General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA).
            </p>
          </div>

          {/* Section 1: Introduction & Scope */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">1</span>
              Introduction &amp; Scope
            </h3>
            <p>
              At <strong>FlashMind</strong>, available at{' '}
              <a
                href="https://jkssb-mcq-quiz.ai.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline inline-flex items-center gap-1"
              >
                https://jkssb-mcq-quiz.ai.studio/ <ExternalLink className="w-3 h-3" />
              </a>
              , the privacy of our visitors is one of our utmost priorities. This document details the types of personal and
              technical information that is collected, logged, and utilized, and how we protect and safeguard your confidentiality.
            </p>
            <p>
              By accessing and using our website, mock examination engine, current affairs portals, and study tools, you consent
              to our Privacy Policy and agree to its terms.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">2</span>
              Information We Collect
            </h3>
            <p>We collect information in the following limited and transparent categories:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>
                <strong>Log Files &amp; Technical Usage Data:</strong> Like most modern websites, FlashMind follows standard log file
                protocols. The information inside log files includes Internet Protocol (IP) addresses, browser type, Internet
                Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks. These are not linked to any
                information that is personally identifiable and are used solely for administering the platform and analyzing trends.
              </li>
              <li>
                <strong>Cookies and Web Beacons:</strong> We use cookies to store information about visitors’ preferences, session
                configurations (such as audio preferences, theme settings, and offline cached quiz progress), and to optimize user
                experiences by customizing webpage content.
              </li>
              <li>
                <strong>Voluntary Contact Information:</strong> If you contact us directly via email (
                <span className="text-indigo-300 font-mono">flust786@gmail.com</span>) or phone (
                <span className="text-indigo-300 font-mono">+91 6006580370</span>), we receive your name, email address, phone
                number, the contents of your message, and any attachments you provide.
              </li>
              <li>
                <strong>Local Educational Data:</strong> Your test attempts, answers, bookmarks, and revision decks are stored
                client-side inside your browser’s local storage (LocalStorage / IndexedDB) to enable offline PWA study mode.
              </li>
            </ul>
          </section>

          {/* Section 3: Google AdSense, DoubleClick DART Cookies & Third-Party Advertising */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">3</span>
              Google AdSense, DoubleClick DART Cookies &amp; Third-Party Advertising
            </h3>
            <p>
              Google is a third-party vendor on our site. Google uses cookies, specifically known as the{' '}
              <strong>DoubleClick DART cookie</strong>, to serve advertisements to our site visitors based upon their visit to{' '}
              <span className="text-indigo-300">https://jkssb-mcq-quiz.ai.studio/</span> and other websites on the Internet.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2">
              <p className="font-semibold text-white">How Users Can Opt Out of Personalized Advertising:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  Users may choose to opt out of the use of the DART cookie and interest-based advertising by visiting the{' '}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 underline font-semibold inline-flex items-center gap-1"
                  >
                    Google Ad Settings <ExternalLink className="w-3 h-3" />
                  </a>
                  .
                </li>
                <li>
                  You may also opt out of third-party vendor cookies across multiple ad networks by visiting the{' '}
                  <a
                    href="https://www.networkadvertising.org/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 underline font-semibold inline-flex items-center gap-1"
                  >
                    Network Advertising Initiative (NAI) Opt-Out Page <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  or the{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 underline font-semibold inline-flex items-center gap-1"
                  >
                    Digital Advertising Alliance (AboutAds) Consumer Choice Page <ExternalLink className="w-3 h-3" />
                  </a>
                  .
                </li>
              </ul>
            </div>
            <p className="text-xs text-slate-400">
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on FlashMind, which are sent directly to users’ browsers. They
              automatically receive your IP address when this occurs. FlashMind has no access to or control over these cookies that
              are used by third-party advertisers.
            </p>
          </section>

          {/* Section 4: Analytics and Performance Tracking */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">4</span>
              Analytics &amp; Performance Tracking
            </h3>
            <p>
              We may utilize performance measurement tools like Google Analytics to evaluate user navigation patterns, popular
              exam syllabus topics, page load speeds, and geographic distribution. The telemetry data collected is anonymized and
              aggregated, providing macro-level insights to help us optimize educational mock tests and server reliability.
            </p>
          </section>

          {/* Section 5: GDPR Data Protection Rights */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">5</span>
              GDPR Privacy Rights (EEA &amp; UK Users)
            </h3>
            <p>
              Under the General Data Protection Regulation (GDPR), users residing in the European Economic Area (EEA) and United
              Kingdom hold the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>The Right to Access:</strong> You have the right to request copies of your personal data held by us.</li>
              <li><strong>The Right to Rectification:</strong> You have the right to request that we correct inaccurate or incomplete information.</li>
              <li><strong>The Right to Erasure ("Right to be Forgotten"):</strong> You have the right to request that we erase your personal data under certain conditions.</li>
              <li><strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
              <li><strong>The Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization or directly to you.</li>
            </ul>
            <p className="text-xs text-slate-400">
              If you submit a privacy request, we have one month to respond to you. Please contact us at{' '}
              <span className="text-indigo-300 font-mono">flust786@gmail.com</span> to exercise any of these rights.
            </p>
          </section>

          {/* Section 6: CCPA Privacy Rights (Do Not Sell My Info) */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">6</span>
              CCPA Privacy Rights &amp; "Do Not Sell My Personal Information"
            </h3>
            <p>Under the California Consumer Privacy Act (CCPA), California consumers are granted specific rights:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>The right to know the specific categories and pieces of personal data a business has collected about consumers.</li>
              <li>The right to request that a business delete any personal data collected about the consumer.</li>
              <li>The right not to receive discriminatory treatment for the exercise of privacy rights conferred by the CCPA.</li>
            </ul>
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 font-semibold text-xs">
              <strong>Explicit "Do Not Sell" Declaration:</strong> FlashMind does <u>NOT</u> sell, rent, monetize, or trade your
              personal information to third parties for monetary or commercial consideration.
            </div>
          </section>

          {/* Section 7: Data Security and Safeguards */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">7</span>
              Data Security &amp; Storage
            </h3>
            <p>
              We implement industry-standard technical, operational, and organizational security protocols, including HTTPS / SSL
              encryption across all web traffic. Quiz progress and personal bookmarks reside in the user's localized browser storage
              and are not transmitted to centralized databases without explicit user consent.
            </p>
          </section>

          {/* Section 8: Children's Information (COPPA) */}
          <section className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">8</span>
              Children's Privacy Protection (COPPA)
            </h3>
            <p>
              Protecting children while using the internet is especially important to us. FlashMind is designed for adult candidates
              and students preparing for competitive government examinations (such as JKSSB, JKPSC, SSC, and UPSC), typically aged
              18 and above.
            </p>
            <p className="text-xs text-slate-400">
              FlashMind does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you
              believe that your child has provided personal information on our website, please contact us immediately, and we will
              use our best efforts to promptly remove such information from our records.
            </p>
          </section>

          {/* Section 9: Contact Information */}
          <section className="space-y-3 pt-3 border-t border-slate-800">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs">9</span>
              Contact Information
            </h3>
            <p>
              If you have additional questions, require more information about our Privacy Policy, or wish to exercise your legal
              data rights, please contact our Data Protection Officer directly:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="mailto:flust786@gmail.com"
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/60 flex items-center gap-3 text-slate-200 transition"
              >
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Privacy &amp; Legal Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">flust786@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+916006580370"
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/60 flex items-center gap-3 text-slate-200 transition"
              >
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Official Contact Helpline</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">+91 6006580370</div>
                </div>
              </a>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>
                Website URL: <strong className="text-slate-200">https://jkssb-mcq-quiz.ai.studio/</strong> • FlashMind Exam Prep
              </span>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-3 sm:py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500">© 2026 FlashMind. All rights reserved.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition cursor-pointer"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
