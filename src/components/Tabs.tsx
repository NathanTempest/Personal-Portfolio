import React from "react";
import ContactTab from "./ContactTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";
import ProjectsTab from "./ProjectsTab";
import SideProjectsTab from "./SideProjectsTab";

interface TabsProps {
  activeTab: string;
}

const Tabs: React.FC<TabsProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "Contact":
      return <ContactTab />;
    case "Experience":
      return <ExperienceTab />;
    case "Education":
      return <EducationTab />;
    case "Projects":
      return <ProjectsTab />;
    case "Side Projects":
      return <SideProjectsTab />;
    default:
      return <ContactTab />;
  }
};

export default Tabs;