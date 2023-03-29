import Head from 'next/head'
import { Inter } from 'next/font/google'
import AnimatedText from 'react-animated-text-content';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const mystyle = {
    margin: "100px",
    textAlign: "center",
    fontSize: "100px"
  };
  return (
    <>
      <Head>
        <title>"HealthHub" let's lead  a healthy life </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* for  adding animated text used to react-animated-text package */}
      <AnimatedText
        type="bounce" 
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        style={mystyle}
      >
        Let's F**k the Next
      </AnimatedText>;
      <AnimatedText
        type="bounce" 
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="wave"
        interval={0.08}
        duration={1}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        style={mystyle}
      >
        Build The HealthHub
      </AnimatedText>;

    </>
  )
}
