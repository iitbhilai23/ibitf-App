export const defaultColors = {
    darkCyan: { base: "#45beff", lighter: "#45beff", darker: "#45beff", },
    paynesGray: { base: "#45beff", lighter: "#45beff", darker: "#385157", },
    cerulean: { base: "#45beff", lighter: "#d19191", darker: "#1c5b78", },
    imperialRed: { base: "#45beff", lighter: "#fbc2c3", darker: "#45beff;", },
    orangeCrayola: { base: "#f3722c", lighter: "#f78c49", darker: "#622c17", },
    carrotOrange: { base: "#acba37", lighter: "#fabb7e", darker: "#7f8103", },
    coral: { base: "#f9844a", lighter: "#fba75e", darker: "#d65e29", },
    saffron: { base: "#f9c74f", lighter: "#fcd269", darker: "#d69b2b", },
    pistachio: { base: "#90be6d", lighter: "#c8f7a8", darker: "#4f6a3d", },
    zomp: { base: "#43aa8b", lighter: "#61bd9e", darker: "#27836c", },
    purple: { base: "#836394", lighter: "#ab95b7", darker: "#47394f" },
    color4: { lighter: "#CE9FFC", base: "#7367F0", darker: "#7367F0" },
    color1: { lighter: "#ABDCFF", base: "#0396FF", darker: "#0396FF" },
    color2: { lighter: "#FEB692", base: "#EA5455", darker: "#EA5455" },
    color3: { lighter: "#FFF720", base: "#3CD500", darker: "#3CD500" },
    color5: { lighter: "#81FBB8", base: "#28C76F", darker: "#28C76F" },
    color6: { lighter: "#97ABFF", base: "#123597", darker: "#123597" },
    color7: { lighter: "#F6CEEC", base: "#D939CD", darker: "#D939CD" },
    color8: { lighter: "#FFF886", base: "#F072B6", darker: "#F072B6" },
    color9: { lighter: "#3B2667", base: "#BC78EC", darker: "#BC78EC" },
    color10: { lighter: "#FDEB71", base: "#F8D800", darker: "#F8D800" },
    cl3: { lighter: "#ABDCFF", base: "#123597", darker: "#49aef6" },
    cl5: { lighter: "#76c657", base: "#f0cf0d", darker: "#76c657" },
    cl1: { lighter: "#e20ca8", base: "#577590", darker: "#e20ca8" },
    cl6: { lighter: "#841cfb", base: "#841cfb", darker: "#841cfb" },
    cl7: { lighter: "#4d01ef", base: "#4d01ef", darker: "#4d01ef" },

    //
}

export default function getColorByNumber(colorNum) {
    const colorKeys = Object.keys(defaultColors);
    const selectedColor = defaultColors[colorKeys[colorNum - 1]];
  
    if (!selectedColor) {
        return null;
    }
  
    return {
        base: selectedColor.base,
        lighter: selectedColor.lighter,
        darker: selectedColor.darker,
    };
  }