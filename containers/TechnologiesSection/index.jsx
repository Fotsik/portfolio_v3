import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {SectionContext} from '../../state/SectionProvider';

import Wrapper from './styled/Wrapper';

export default function TechnologiesSection(){
    const [section, setSection] = useContext(SectionContext);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
      });

    useEffect(() => {
        inView && setSection('Technologies')
    }, [inView]);

    return(
        <Wrapper ref={ref}>
            Technologies Section
        </Wrapper>
    )
}