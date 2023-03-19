import React from "react";
import { COLORS, FONTS } from "./Theme/Theme";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Mediaquery from "./Component/MediaQuery";
import Slider from "./Component/Slider";
export default function Home() {
  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: 'center',
          height: "100vh",
          width: "100vw",
          backgroundColor: COLORS.layout,
          overflowY: "scroll",
          paddingBottom: "80px",
          paddingTop: mobile ? 0 : 100,
        }}
      >
        {mobile ? (
          <></>
        ) : (
          <>
            
          </>
        )}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Azann</title>
          <description>
            In website development service we offers customized website design,
            development, and maintenance, catering to clients' specific needs,
            goals, and budget. We aims to create a professional, user-friendly,
            and high-performing online presence.
          </description>
        </Helmet>
        {/* <p
          style={{
            // marginTop: "78px",
            color: COLORS.black,
            fontFamily: "Mono",
            fontSize: mobile ? "34px" : 25,
            textAlign: "center",
            letterSpacing: "0.5px",
            fontWeight: "bold",
            paddingInline: mobile ? 0 : 20,
          }}
        >
          India's #1 Azaan App to get the Timing of your Masjid
        </p> */}
        
        <Slider/>

        {/* <Footer /> */}
      </div>
    </>
  );
}
