import React from "react";
import { COLORS, FONTS } from "./Theme/Theme";
import { AiOutlineArrowUp } from "react-icons/ai";
import Mediaquery from "./Component/MediaQuery";
import { Link } from "react-router-dom";
export default function Footer({ divStyle }) {
  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        display: mobile ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: COLORS.white,
        color: COLORS.Primary,
        textAlign: "center",
        ...divStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "88%",
          // height: "60px",
          alignItems: "center",
        }}
      >
        <p
          style={{
            ...FONTS.h3,
            fontWeight: "bold",
            // marginBlockEnd: 0,
            color: COLORS.black,
            letterSpacing: "1.5px",
          }}
        >
          Copyright Azaan@2023, All rights reserved.
        </p>
        <Link
          to="/terms"
          style={{
            ...FONTS.h3,
            fontWeight: "bolder",
            color: COLORS.Primary,
            letterSpacing: "1.5px",
            textDecoration: "none",
          }}
        >
          Privacy Policy | Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
