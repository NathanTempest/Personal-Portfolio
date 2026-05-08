import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4">
      <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full group-hover:scale-110 transition-transform">
        <FileText size={32} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Curriculum Vitae</h3>
        <p className="text-xs text-slate-500 mb-4 px-4">Detailed overview of my professional journey and technical expertise.</p>
        <a 
          href="/path-to-resume.pdf" 
          target="_blank" 
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200"
        >
          <Download size={16} />
          View Resume
        </a>
      </div>
    </div>
  );
}
