import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import Mediaquery from './Component/MediaQuery'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
export default function Terms() {
    const mobile = Mediaquery("(min-width:460px)")
    const titleStyle = {
        ...FONTS.h1,
        fontWeight: "bold",
        marginBlock: 0,
        color: COLORS.Primary,
        letterSpacing: "1.5px",
        paddingInline: 20,
    }
    const mtitleStyle = {
        ...FONTS.h2,
        fontWeight: "bold",
        marginBlock: 0,
        color: COLORS.Primary,
        letterSpacing: "1.5px",
        paddingInline: 20,
    }
    const textStyle = {
        color: COLORS.black,
        ...FONTS.body3,
        fontWeight: "bolder",
        letterSpacing: "2px",
        paddingInlineStart: 20,
    }
    const btextStyle = {
        color: COLORS.black,
        ...FONTS.h3,
        fontWeight: "bolder",
        letterSpacing: "2px",
        paddingInlineStart: 20,
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: COLORS.layout,
                overflowY: "scroll",
                paddingBottom: "80px",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    backgroundColor: COLORS.white,
                    height: mobile ? 60 : 60,
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
                }}>
                <Link
                    to={"/"}
                    style={{
                        display: "flex",
                        backgroundColor: COLORS.Primary,
                        border: "none",
                        color: COLORS.white,
                        ...FONTS.h3,
                        height: mobile ? 40 : 30,
                        width: mobile ? 40 : 30,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        marginInlineStart:mobile? 20:5,
                    }}
                >
                    <IoIosArrowBack size={30} />
                </Link>

                <p style={mobile ? {
                    ...FONTS.h1,
                    fontWeight: "bold",
                    marginBlock: 0,
                    color: COLORS.Primary,
                    letterSpacing: "1.5px",
                } : {
                    ...FONTS.h2,
                    fontWeight: "bolder",
                    marginBlock: 0,
                    color: COLORS.Primary,
                }}>
                    Azaan Terms & Conditions
                </p>
                <button
                    style={{
                        display: "flex",
                        backgroundColor: COLORS.white,
                        border: "none",
                        color: COLORS.white,
                        ...FONTS.h3,
                        height: mobile ? 40 : 30,
                        width: mobile ? 40 : 30,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        marginInlineStart:mobile? 20:0,

                    }}
                >
                </button>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    width: "100%",
                    paddingBlockStart: 65,
                }}>
                <p style={mobile ? titleStyle : mtitleStyle}>
                • Introduction
                </p>
                <p style={textStyle}>
                    Welcome to Azaan! These Terms of Service ("Terms") govern your use of our app, so please read them carefully before using the app. By using the app, you agree to be bound by these Terms.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                • Definitions
                </p>
                <p style={textStyle}>
                    In these Terms, the following terms shall have the meanings set forth below:
                    <br />• "App" means the Azaan app and any related services or software provided by us.
                    <br />• "Masjid" means a mosque or place of worship that is registered with Azaan by an imam or responsible person.
                    <br />• "User" means any person who uses the App, including but not limited to imams and responsible persons who register a Masjid with Azaan.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                    1. Masjid Registration
                </p>
                <p style={textStyle}>
                    To register a Masjid with Azaan, the imam or responsible person must provide accurate information about the Masjid, including its location, address, and contact information. Azaan reserves the right to verify the information provided and may reject any registration that is incomplete or inaccurate.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                    2. Use of Masjid Information
                </p>
                <p style={textStyle}>

                    By registering a Masjid with Azaan, the imam or responsible person grants Azaan the right to use and display the Masjid's information on the App, as well as on any other platform or service provided by Azaan. The imam or responsible person represents and warrants that they have the necessary authority to grant this right to Azaan.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                    3. User Conduct
                </p>
                <p style={textStyle}>

                    Users agree to use the App only for lawful purposes and in accordance with these Terms. Users may not use the App to engage in any activity that is illegal, harmful, or otherwise objectionable.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>

                    4. Disclaimer of Warranties
                </p>
                <p style={btextStyle}>
                        THE APP AND ANY RELATED SERVICES OR SOFTWARE PROVIDED BY US ARE PROVIDED "AS IS" AND WITHOUT WARRANTY OF ANY KIND. WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT, OR ERROR-FREE OR UNINTERRUPTED OPERATION.
                </p>

                <p style={mobile ? titleStyle : mtitleStyle}>
                    5. Limitation of Liability
                </p>
                <p style={btextStyle}>
                        IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP OR ANY RELATED SERVICES OR SOFTWARE PROVIDED BY US.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                    6. Indemnification
                </p>
                <p style={textStyle}>
                    Users agree to indemnify and hold us harmless from any claim, demand, or damage, including attorneys' fees, arising out of or in connection with their use of the App or any breach of these Terms.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                    7. Governing Law and Jurisdiction
                </p>
                <p style={textStyle}>
                    These Terms shall be governed by and construed in accordance with the laws of India. Users agree that any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                    8. Changes to these Terms
                </p>
                <p style={textStyle}>
                    We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting on the App. Users are responsible for regularly reviewing these Terms to ensure they are aware of any changes.
                </p>
                <p style={mobile ? titleStyle : mtitleStyle}>
                    9. Contact Us
                </p>
                <p style={textStyle}>
                    If you have any questions about these Terms, please contact us at 
                    contact.nerdtech@gmail.com
                </p>
            </div>
        </div>
    )
}

