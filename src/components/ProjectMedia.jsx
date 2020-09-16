import React from 'react';

export default function ProjectMedia({ desktopMedia, mobileMedia }) {
    return (
        <div className="project-body__project-media">
        { 
            mobileMedia && (
                <div className="project-body__mobile-media">
                    {mobileMedia}
                </div>
            )
        }
            <div className="project-body__desktop-media">
                {desktopMedia}
            </div>
        </div>
    )
}