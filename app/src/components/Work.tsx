import React from 'react';
import ProjectForm from './ProjectForm';

const Work = () => {
    const electron = (window as any).electron
    return (
        <div>
            <h2>this work page </h2>
            <div>
                the home directory is @ {electron.homeDir()} <br/>
            </div>
            <div>
                os system is {electron.osVersion()}
            </div>
            <div>
                architecture {electron.arch()}
            </div>
            <ProjectForm/>
        </div>
    );
};

export default Work;