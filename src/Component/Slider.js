import SimpleImageSlider from "react-simple-image-slider";
import Mediaquery from "./MediaQuery";
import {COLORS} from "../Theme/Theme";
const images = [
  { url: require("../assets/2.png") },
  { url: require("../assets/Background.png") },
  { url: require("../assets/3.png") },
];

export default function Slider() {
  const matches = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  return (
    <div>
      <SimpleImageSlider
      style={{
        left: 0,
        bottom: 0,
        display: "flex" ,
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: COLORS.layout,
        borderRadius: 10,
      }}
      width={mobile ? (matches ? "100%" : "100%") : "100%"}
      height={mobile ? (matches ? 650 : "91.5vh") : 230}
        images={images}
        bgColor={"#f7faf9"}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </div>
  );
}