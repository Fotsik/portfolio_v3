import React, { useContext, useEffect } from 'react';
import Wrapper from './styled/Wrapper';
import { useInView } from 'react-intersection-observer';
import {SectionContext} from '../../state/SectionProvider';

export default function AboutSection(){

    const [section, setSection] = useContext(SectionContext);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
      });

    useEffect(() => {
        inView && setSection('About')
    }, [inView]);

    return(
        <Wrapper ref={ref}>
            AboutSection
        </Wrapper>
    )
}