import React, {useContext} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, brightTheme } from '../../utils/theme';

import { OwnThemeContext } from '../../state/OwnThemeProvider';

import AboutSection from '../AboutSection';
import WelcomeSection from '../WelcomeSection';
import ContactSection from '../ContactSection';
import ExperienceSection from '../ExperienceSection';
import ProjectsSection from '../ProjectsSection';
import TechnologiesSection from '../TechnologiesSection';

import Menu from '../../components/Menu';

import ProgressIndicator from '../../components/ProgressIndicator';







export default function LandingPage(){
    const [theme] = useContext(OwnThemeContext);
    
    return(
        <ThemeProvider theme={ theme ? darkTheme : brightTheme }>
            <Menu/>
            <ProgressIndicator/>
            <WelcomeSection/>
            <AboutSection/>
            <TechnologiesSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <ContactSection/>
        </ThemeProvider>
    )
}