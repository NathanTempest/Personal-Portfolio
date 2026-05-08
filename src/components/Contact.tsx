import { Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Send className="text-emerald-500" size={24} />
          Let's Connect
        </h3>
        <p className="text-sm text-slate-500 max-w-md">
          Open to collaborations on AI/ML projects, backend architecture, or interesting engineering challenges.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
        <a 
          href="mailto:nathaniel@example.com" 
          className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-2xl text-slate-700 font-bold hover:border-emerald-200 hover:text-emerald-600 transition-all shadow-sm"
        >
          <Mail size={20} />
          Email Me
        </a>
        <a 
          href="#" 
          className="flex items-center gap-3 px-6 py-3 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </>
  );
}
