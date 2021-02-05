import Head from 'next/head';
import LandingPage from '../containers/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fotsofly.</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
      <LandingPage/>
    </>
  )
}
