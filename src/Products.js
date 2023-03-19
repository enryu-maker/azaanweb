import React from "react";
import { COLORS, FONTS } from "./Theme/Theme";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Mediaquery from "./Component/MediaQuery";
export default function Products() {
  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: COLORS.layout,
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Azaan :: Download</title>
        <description>
          In website development service we offers customized website design,
          development, and maintenance, catering to clients' specific needs,
          goals, and budget. We aims to create a professional, user-friendly,
          and high-performing online presence.
        </description>
      </Helmet>
      <p
        style={{
          marginTop: !mobile?"50px":0,
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
      </p>
      <p
        style={{
          marginBlock: "0px",
          color: COLORS.black,
          textAlign: "center",
          fontSize: mobile ? "45px" : "25px",
          fontWeight: "bolder",
          fontFamily: "Mono",
          letterSpacing: "2px",
        }}
      >
        Download Now
      </p>
      <div
        style={{
          display: mobile ? "flex" : "flex",
          flexDirection: mobile ? "row" : "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            backgroundColor: COLORS.layout,
          }}
        >
          <img
            src={require("./assets/Azaan.png")}
            alt="QR Code"
            style={{
              width: 220,
              height: 200,
              cursor: "pointer",
              borderRadius: 15,
            }}
          />
          <p
            style={{
              color: COLORS.black,
              marginBlock: 0,
              fontFamily: "Mono",
              ...FONTS.body2,
            }}
          >
            *App for ummati
          </p>

        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            backgroundColor: COLORS.layout,
          }}
        >
          <img
            src={require("./assets/Time.png")}
            alt="QR Code"
            style={{
              width: 220,
              height: 200,
              cursor: "pointer",
              borderRadius: 15,
            }}
          />
          <p
            style={{
              color: COLORS.black,
              marginBlock: 0,
              fontFamily: "Mono",
              ...FONTS.body2,
            }}
          >
            *App for Masjid
          </p>

        </div>
      </div>
      <p
        style={{
          marginBlock: "0px",
          color: COLORS.black,
          textAlign: "center",
          fontSize: mobile ? "35px" : "25px",
          fontWeight: "bolder",
          fontFamily: "Mono",
          letterSpacing: "2px",
        }}
      >
        Available on Play Store
      </p>
      <Footer
        divStyle={{
          position: "fixed",
          left: 0,
          bottom: 0,
        }}
      />
    </div>
  );
}
