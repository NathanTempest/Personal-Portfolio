import React from "react";

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  const sections = ["contact", "experience", "education", "projects", "side-projects"];
  
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id); // for collapsible sections if needed
  };

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold animate-pulse">Nathaniel Jason</h1>
        <nav className="space-x-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className="tab-btn"
            >
              {section.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;