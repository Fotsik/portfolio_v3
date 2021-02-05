import React, {useContext} from 'react';
import { OwnThemeProvider } from '../state/OwnThemeProvider';
import { MenuProvider } from '../state/MenuProvider';
import {SectionProvider} from '../state/SectionProvider';
import GlobalStyles from '../utils/global-styles';

function MyApp({ Component, pageProps }) {
  return(
    <OwnThemeProvider>
      <SectionProvider>
        <MenuProvider>
            <GlobalStyles />
            <Component {...pageProps} />
        </MenuProvider>
      </SectionProvider>           
    </OwnThemeProvider>
    )
}

export default MyApp
