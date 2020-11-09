import React from 'react';

export default function WorkExperience({ workplace, role, timeWorked, body }) {
    return (
        <section className="work">
            <div className="work__header">
                <div className="work__headings">
                    <h2 className="heading heading--xl mb-2">{workplace}</h2>
                    <h3 className="heading heading--normal"><span className="color-primary">Role:</span> {role}</h3>
                </div>
                <p className="work__time">{timeWorked}</p>
            </div>
            <div dangerouslySetInnerHTML={{__html: body}}>
            </div>
        </section>
    )
}