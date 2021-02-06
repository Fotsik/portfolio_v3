import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {SectionContext} from '../../state/SectionProvider';

import Wrapper from './styled/Wrapper';
import Line from './styled/Line';
import TextWrapper from './styled/TextWrapper';
import EventsWrapper from './styled/EventsWrapper';
import DateWrapper from './styled/DateWrapper';
import Date from './styled/Date';
import Dot from './styled/Dot';
import Text from './styled/Text';
import Span from './styled/Span';

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
            <DateWrapper>
                <Date>2018</Date>
                <Date>2019 <Span>October</Span></Date>
                <Date>2020 January</Date>
                <Date><Span>2020 Febuary </Span>- October</Date>
                <Date>2020 October - 2021 January</Date>
                <Date>2021 January - <Span>current</Span></Date>
                <Date>2024</Date>
            </DateWrapper>
            <Line/>
            <EventsWrapper>
                <TextWrapper><Dot/><Text>Start of<Span>learning basics</Span>HTML and CSS</Text></TextWrapper>
                <TextWrapper><Dot/><Text>Enter in CodersCamp (Course of web development with JavaScript, React, NodeJS)</Text></TextWrapper>
                <TextWrapper><Dot/><Text>Ended<Span>CodersCamp</Span>with honour</Text></TextWrapper>
                <TextWrapper><Dot/><Text>Realised projects on my own</Text></TextWrapper>
                <TextWrapper><Dot/><Text>Intern in<Span>LePolishBureau</Span>(a Unit9 company)</Text></TextWrapper>
                <TextWrapper><Dot/><Text>Junior React Developer in LePolishBureau</Text></TextWrapper>
                <TextWrapper><Dot/><Text>CEO at Michal and Piotr Company</Text></TextWrapper>
            </EventsWrapper>
        </Wrapper>
    )
}