import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {SectionContext} from '../../state/SectionProvider';

import Wrapper from './styled/Wrapper';

export default function ExperienceSection(){
    const [section, setSection] = useContext(SectionContext);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
      });

    useEffect(() => {
        inView && setSection('Experience')
    }, [inView]);

    return(
        <Wrapper ref={ref}>
            Experience Section
        </Wrapper>
    )
}