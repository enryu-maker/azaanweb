import React from 'react'
import Footer from './Footer'
import { COLORS, FONTS } from './Theme/Theme'
import { Helmet } from "react-helmet";
import Mediaquery from './Component/MediaQuery';
export default function Blogs() {
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
                <title>Azaan :: Donate</title>
                <description>In website development service we offers customized website design, development, and maintenance, catering to clients' specific needs, goals, and budget. We aims to create a professional, user-friendly, and high-performing online presence.</description>
            </Helmet>
            <p
                style={{
                    marginTop: !mobile ? "55px" : 0,
                    color: COLORS.black,
                    fontFamily: "Mono",
                    fontSize: mobile ? "34px" : 25,
                    textAlign: "center",
                    letterSpacing: "0.5px",
                    fontWeight: "bold",
                    paddingInline: mobile ? 0 : 20,
                }}
            >
                Azaan is a nonprofitable organization
            </p>
            <p
                style={{
                    marginBlock: 0,
                    color: COLORS.black,
                    fontFamily: "Mono",
                    fontSize: mobile ? "34px" : 25,
                    textAlign: "center",
                    letterSpacing: "0.5px",
                    fontWeight: "bold",
                    paddingInline: mobile ? 0 : 20,
                }}
            >
                All the donations are used for improvement of app and server cost
            </p>
            <p
                style={{
                    color: COLORS.black,
                    marginBlock: 0,
                    fontFamily: "Mono",
                    ...FONTS.h1,
                    textAlign: "center",
                    letterSpacing: "0.5px",
                    fontWeight: "bolder",
                    paddingInline: !mobile ? 0 : 20,
                }}
            >
                Payment Method
            </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: mobile ? "row" : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.layout,
                }}
            >
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
                    <p
                        style={{
                            color: COLORS.black,
                            marginBlock: 0,
                            fontFamily: "Mono",
                            ...FONTS.body2,
                        }}
                    >
                        UPI Payment
                    </p>
                    <img
                        src={require("./assets/code.png")}
                        alt="QR Code"
                        style={{
                            width: 380,
                            height: 280,
                            cursor: "pointer",
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: !mobile ? 10 : 0,
                        backgroundColor: COLORS.layout,
                    }}
                >
                    <p
                        style={{
                            color: COLORS.black,
                            marginBlock: 0,
                            fontFamily: "Mono",
                            ...FONTS.body2,
                        }}
                    >
                        Bank Details
                    </p>
                    <p
                        style={{
                            color: COLORS.black,
                            marginBlock: 0,
                            fontFamily: "Mono",
                            ...FONTS.body2,
                        }}
                    >
                        Account number: 55550126581279

                    </p>
                    <p
                        style={{
                            color: COLORS.black,
                            marginBlock: 0,
                            fontFamily: "Mono",
                            ...FONTS.body2,
                        }}
                    >
                        IFSC: FDRL0005555
                    </p>

                </div>
            </div>
            <Footer />
        </div>
    )
}
