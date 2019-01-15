import React from 'react';
import Home from './Home';
import BouncingBlocks from './Demo/bouncingBlocks';
import TokyoGhoul from './Demo/Draggable';
import IconDrag from './Demo/IconDrag';
import ServerLess from './Demo/ServerLess';
import SurveyModal from './Demo/SurveyModal';
import { NNM } from './CaseStudies/NNM';
import { Rheintech } from './CaseStudies/Rheintech';
import { RSI } from './CaseStudies/RuralSourcing';

export const returnActiveComponent = (active) => {
    let component = null;
    switch (active) {
        case 'Home':
            component = <Home />;
            break;
        case 'National Nuclear Museum':
            component = <NNM />;
            break;
        case 'RheinTech Laboratories':
            component = <Rheintech />;
            break;
        case 'Rural Sourcing Inc':
            component = <RSI />;
            break;
        case 'Icon Drag':
            component = <IconDrag />;
            break;
        case 'Serverless Backend':
            component = <ServerLess />;
            break;
        case 'Bouncing Blocks':
            component = <BouncingBlocks />;
            break;
        case 'Survey Modal':
            component = <SurveyModal />;
    }
    
    return component;
}