import React from 'react';
import { X, Scale, FileCheck, ShieldAlert, ExternalLink, AlertTriangle, RefreshCw, Gavel, Mail, Phone, Globe } from 'lucide-react';

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-conditions-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Scale size={22} />
            </div>
            <div>
              <h2 id="terms-conditions-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Terms and Conditions (Terms of Service)
              </h2>
              <p className="text-xs text-slate-400">
                Effective Date: March 27, 2026 &bull; Last Updated: March 27, 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Terms and Conditions"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-slate-300">
          {/* Platform Overview Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Globe size={14} /> Platform Agreement &amp; Legal Notice
            </p>
            <p>
              Welcome to <strong className="text-white">FlashMind &ndash; JKSSB Mock Test &amp; MCQ Quiz</strong> (accessible at{' '}
              <a
                href="https://jkssb-mcq-quiz.ai.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
              >
                https://jkssb-mcq-quiz.ai.studio/
              </a>
              ), an educational portal, competitive exam-preparation platform, and interactive study tool suite (hereinafter referred to as the{' '}
              <strong className="text-white">&ldquo;Website,&rdquo; &ldquo;Platform,&rdquo; &ldquo;Service,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;</strong> or{' '}
              <strong className="text-white">&ldquo;our&rdquo;</strong>). These Terms and Conditions govern your access to and use of all content, mock tests, flashcards, study guides, analytics, and services made available on or through the Platform.
            </p>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                1
              </span>
              Acceptance of Terms
            </h3>
            <p className="pl-8">
              By accessing, browsing, registering for, or otherwise utilizing any portion of this Website, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions, together with our Privacy Policy, in their entirety. Your continued use of the Platform constitutes your <strong className="text-white">explicit and unconditional acceptance</strong> of all rules, policies, disclaimers, and obligations set forth herein. If you do not agree to every provision of these Terms of Service, you are not authorized to access or use this Website and must discontinue use immediately.
            </p>
          </section>

          {/* 2. Intellectual Property Rights */}
          <section className="space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                2
              </span>
              Intellectual Property Rights
            </h3>
            <div className="pl-8 space-y-2">
              <p>
                Unless otherwise expressly stated, all proprietary materials available on the Platform&mdash;including, without limitation, curated multiple-choice question (MCQ) banks, explanatory notes, study guides, flashcards, user interface architecture, visual design, graphics, logos, trademarks, branding, databases, and underlying source code&mdash;are the exclusive intellectual property of <strong className="text-white">FlashMind &ndash; JKSSB Mock Test &amp; MCQ Quiz</strong> and its licensors, and are protected under applicable Indian and international copyright, trademark, and intellectual property laws.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>
                  <strong className="text-white">Limited Personal License:</strong> We grant you a limited, revocable, non-exclusive, and non-transferable license to access and use the Platform strictly for personal, non-commercial educational and exam-preparation purposes.
                </li>
                <li>
                  <strong className="text-white">Strict Restrictions:</strong> You shall not copy, reproduce, redistribute, republish, mirror, frame, sell, rent, sub-license, or create derivative works from any part of the Website&apos;s question datasets, explanations, or software code without our prior written consent.
                </li>
                <li>
                  <strong className="text-white">Anti-Scraping Mandate:</strong> Systematic extraction, bulk downloading, data mining, or harvesting of question banks or educational content via automated scripts or manual compilation for republication on competing websites, mobile applications, Telegram channels, or printed publications is strictly prohibited.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. User Conduct */}
          <section className="space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                3
              </span>
              User Conduct &amp; Prohibited Activities
            </h3>
            <div className="pl-8 space-y-2">
              <p>
                As a condition of your access to the Platform, you warrant that you will not use the Website for any purpose that is unlawful or prohibited by these Terms. Specifically, you agree <strong className="text-white">not</strong> to engage in any of the following prohibited conduct:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>
                  <strong className="text-white">Cybersecurity Violations &amp; Hacking:</strong> Attempting to probe, scan, test the vulnerability of, or breach the security or authentication measures of the Website, or introducing viruses, trojans, worms, logic bombs, or other malicious code.
                </li>
                <li>
                  <strong className="text-white">Automated Crawling &amp; Bots:</strong> Deploying spiders, robots, scrapers, headless browsers, or any automated means to access the Platform, extract data, or impose an unreasonable or disproportionately large load on our hosting infrastructure.
                </li>
                <li>
                  <strong className="text-white">Abusive or Disruptive Behavior:</strong> Interfering with or disrupting the normal operation of the Service, manipulating leaderboard or quiz telemetry, or engaging in harassment, defamation, or abusive conduct toward platform administrators or other users.
                </li>
                <li>
                  <strong className="text-white">Unauthorized Commercial Exploitation:</strong> Using the Platform, its test interfaces, or its educational materials to provide paid tutoring, commercial test-series distribution, or unauthorized institutional training without an explicit written commercial agreement.
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Third-Party Links & Advertisements */}
          <section className="space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                4
              </span>
              Third-Party Links &amp; Advertisements
            </h3>
            <div className="pl-8 space-y-2">
              <p>
                The Website may display advertisements, sponsored content, and hyperlinks to external websites or resources operated by independent third parties, including programmatic advertisements served via <strong className="text-white">Google AdSense</strong> and other advertising networks.
              </p>
              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-100/90 text-xs sm:text-sm space-y-1.5">
                <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <ExternalLink size={15} /> Independence &amp; Non-Endorsement Disclaimer
                </p>
                <p>
                  All external links and third-party advertisements (including Google AdSense ads) are controlled and operated entirely by independent third-party providers. We do not endorse, verify, warrant, or assume any legal responsibility for the accuracy, safety, legality, privacy practices, products, or services offered by any third-party advertiser or linked website. Any dealings, clicks, or transactions you enter into with third parties found on or through the Platform are solely between you and the applicable third party, and you undertake such interactions strictly at your own risk.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Limitation of Liability */}
          <section className="space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                5
              </span>
              Disclaimer of Warranties &amp; Limitation of Liability
            </h3>
            <div className="pl-8 space-y-2">
              <p>
                The Website, along with all study materials, mock tests, answer keys, explanations, and software tools, is provided strictly on an <strong className="text-white">&ldquo;AS IS&rdquo;</strong> and <strong className="text-white">&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind, whether express, implied, or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>
                  <strong className="text-white">Educational Accuracy &amp; Exam Outcomes:</strong> While we strive to maintain high editorial standards across our question banks and study guides, we do not warrant that any content is completely free of typographical, factual, or syllabus-related errors, nor do we guarantee any specific score, rank, or selection outcome in official examinations (such as JKSSB, JKPSC, SSC, or UPSC).
                </li>
                <li>
                  <strong className="text-white">No Government Affiliation:</strong> FlashMind is an independent educational portal and is not affiliated with, endorsed by, or officially connected to the Jammu and Kashmir Services Selection Board (JKSSB) or any other government agency.
                </li>
                <li>
                  <strong className="text-white">Exclusion of Damages:</strong> To the maximum extent permitted by applicable law, the Website owners, developers, contributors, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages&mdash;including loss of data, loss of study progress, service downtime, or reliance on any information obtained through the Platform.
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Modifications to Service */}
          <section className="space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                6
              </span>
              Modifications to Service &amp; Terms
            </h3>
            <p className="pl-8">
              We reserve the sole and absolute right, at our discretion, to modify, amend, update, suspend, or discontinue any aspect, feature, question deck, or functionality of the Website, as well as to revise these Terms and Conditions at any time <strong className="text-white">without prior individual notice</strong>. Any modifications to these Terms shall become effective immediately upon being posted on this page with an updated &ldquo;Last Updated&rdquo; date. Your continued access to or use of the Platform following the posting of revised Terms constitutes your binding acceptance of such changes.
            </p>
          </section>

          {/* 7. Governing Law & Dispute Resolution */}
          <section className="space-y-2.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                7
              </span>
              Governing Law &amp; Dispute Resolution
            </h3>
            <p className="pl-8">
              These Terms and Conditions, their interpretation, and any dispute, claim, or controversy arising out of or relating to your use of the Website shall be governed by and construed in accordance with the laws of <strong className="text-white">India</strong>, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms or the Platform shall be subject to the <strong className="text-white">exclusive jurisdiction of the competent courts located in the Union Territory of Jammu and Kashmir, India</strong>. Before initiating formal litigation, both parties agree to attempt in good faith to resolve any dispute amicably through written notice and informal negotiation for a period of at least thirty (30) days.
            </p>
          </section>

          {/* 8. Contact Details */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs flex items-center justify-center font-bold">
                8
              </span>
              Contact Details &amp; Legal Notices
            </h3>
            <div className="pl-8 space-y-3">
              <p>
                If you have any questions, concerns, copyright inquiries, or formal legal notices regarding these Terms and Conditions or the operation of the Website, please contact our Compliance &amp; Legal Support Desk via the details below:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="mailto:flust786@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Legal &amp; Support Email</div>
                    <div className="text-sm font-semibold text-white">flust786@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+916006580370"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Contact Phone / Helpline</div>
                    <div className="text-sm font-semibold text-white">+91 6006580370</div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 sm:px-8 border-t border-slate-800 bg-slate-900/95 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Gavel size={15} className="text-amber-400 shrink-0" />
            <span>Governed by the laws of Jammu and Kashmir, India.</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/20"
          >
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
};
