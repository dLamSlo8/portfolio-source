import React from "react"
import Header from '../components/Header';
import AboutSection from '../components/sections/about/AboutSection';
import WorkExperienceSection from '../components/sections/work/WorkExperienceSection';
import ProjectSection from '../components/sections/projects/ProjectSection';
import LinkSection from '../components/sections/links/LinkSection';

export default function Home() {
    return (
        <div>
            <Header />
            <AboutSection />
            <WorkExperienceSection />
            <ProjectSection />
            <LinkSection />
        </div>
    )
}
