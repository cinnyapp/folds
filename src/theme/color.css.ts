import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const color = createThemeContract({
  Background: {
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  Surface: {
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  SurfaceVariant: {
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  Primary: {
    Main: "",
    MainHover: "",
    MainActive: "",
    MainLine: "",
    OnMain: "",
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  Secondary: {
    Main: "",
    MainHover: "",
    MainActive: "",
    MainLine: "",
    OnMain: "",
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  Success: {
    Main: "",
    MainHover: "",
    MainActive: "",
    MainLine: "",
    OnMain: "",
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  Warning: {
    Main: "",
    MainHover: "",
    MainActive: "",
    MainLine: "",
    OnMain: "",
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  Critical: {
    Main: "",
    MainHover: "",
    MainActive: "",
    MainLine: "",
    OnMain: "",
    Container: "",
    ContainerHover: "",
    ContainerActive: "",
    ContainerLine: "",
    OnContainer: "",
  },

  FocusRing: "",
});

export const lightTheme = createTheme(color, {
  Background: {
    Container: "#F2F2F2",
    ContainerHover: "#E5E5E5",
    ContainerActive: "#D9D9D9",
    ContainerLine: "#CCCCCC",
    OnContainer: "#000000",
  },

  Surface: {
    Container: "#FFFFFF",
    ContainerHover: "#F2F2F2",
    ContainerActive: "#E5E5E5",
    ContainerLine: "#D9D9D9",
    OnContainer: "#000000",
  },

  SurfaceVariant: {
    Container: "#F2F2F2",
    ContainerHover: "#E5E5E5",
    ContainerActive: "#D9D9D9",
    ContainerLine: "#CCCCCC",
    OnContainer: "#000000",
  },

  Primary: {
    Main: "#1858D5",
    MainHover: "#164FC0",
    MainActive: "#144BB5",
    MainLine: "#1346AA",
    OnMain: "#FFFFFF",
    Container: "#E8EEFB",
    ContainerHover: "#DCE6F9",
    ContainerActive: "#D1DEF7",
    ContainerLine: "#C5D5F5",
    OnContainer: "#113E95",
  },

  Secondary: {
    Main: "#000000",
    MainHover: "#1A1A1A",
    MainActive: "#262626",
    MainLine: "#333333",
    OnMain: "#FFFFFF",
    Container: "#D9D9D9",
    ContainerHover: "#CCCCCC",
    ContainerActive: "#BFBFBF",
    ContainerLine: "#B2B2B2",
    OnContainer: "#0D0D0D",
  },

  Success: {
    Main: "#00844C",
    MainHover: "#007744",
    MainActive: "#007041",
    MainLine: "#006A3D",
    OnMain: "#FFFFFF",
    Container: "#E5F3ED",
    ContainerHover: "#D9EDE4",
    ContainerActive: "#CCE6DB",
    ContainerLine: "#BFE0D2",
    OnContainer: "#005C35",
  },

  Warning: {
    Main: "#A85400",
    MainHover: "#974C00",
    MainActive: "#8F4700",
    MainLine: "#864300",
    OnMain: "#FFFFFF",
    Container: "#F6EEE5",
    ContainerHover: "#F2E5D9",
    ContainerActive: "#EEDDCC",
    ContainerLine: "#E9D4BF",
    OnContainer: "#763B00",
  },

  Critical: {
    Main: "#C40E0E",
    MainHover: "#AC0909",
    MainActive: "#A60C0C",
    MainLine: "#9C0B0B",
    OnMain: "#FFFFFF",
    Container: "#F9E7E7",
    ContainerHover: "#F6DBDB",
    ContainerActive: "#F3CFCF",
    ContainerLine: "#F0C3C3",
    OnContainer: "#890A0A",
  },

  FocusRing: "rgba(0 0 0 / 50%)",
});

export const darkTheme = createTheme(color, {
  Background: {
    Container: "#1A1A1A",
    ContainerHover: "#262626",
    ContainerActive: "#333333",
    ContainerLine: "#404040",
    OnContainer: "#FFFFFF",
  },

  Surface: {
    Container: "#262626",
    ContainerHover: "#333333",
    ContainerActive: "#404040",
    ContainerLine: "#4C4C4C",
    OnContainer: "#FFFFFF",
  },

  SurfaceVariant: {
    Container: "#333333",
    ContainerHover: "#404040",
    ContainerActive: "#4C4C4C",
    ContainerLine: "#595959",
    OnContainer: "#FFFFFF",
  },

  Primary: {
    Main: "#A3BCEE",
    MainHover: "#8BACEA",
    MainActive: "#80A3E8",
    MainLine: "#749BE6",
    OnMain: "#071A40",
    Container: "#0D3075",
    ContainerHover: "#0E3580",
    ContainerActive: "#10398A",
    ContainerLine: "#113E95",
    OnContainer: "#E8EEFB",
  },

  Secondary: {
    Main: "#FFFFFF",
    MainHover: "#E5E5E5",
    MainActive: "#D9D9D9",
    MainLine: "#CCCCCC",
    OnMain: "#1A1A1A",
    Container: "#404040",
    ContainerHover: "#4C4C4C",
    ContainerActive: "#595959",
    ContainerLine: "#666666",
    OnContainer: "#F2F2F2",
  },

  Success: {
    Main: "#99CEB7",
    MainHover: "#80C1A5",
    MainActive: "#73BB9D",
    MainLine: "#66B594",
    OnMain: "#002817",
    Container: "#00492A",
    ContainerHover: "#004F2E",
    ContainerActive: "#005631",
    ContainerLine: "#005C35",
    OnContainer: "#E5F3ED",
  },

  Warning: {
    Main: "#DCBB99",
    MainHover: "#D3A980",
    MainActive: "#CFA173",
    MainLine: "#CB9866",
    OnMain: "#321900",
    Container: "#5C2E00",
    ContainerHover: "#653200",
    ContainerActive: "#6D3700",
    ContainerLine: "#763B00",
    OnContainer: "#F6EEE5",
  },

  Critical: {
    Main: "#E79F9F",
    MainHover: "#E18686",
    MainActive: "#DE7A7A",
    MainLine: "#DB6E6E",
    OnMain: "#3A0404",
    Container: "#6B0808",
    ContainerHover: "#750808",
    ContainerActive: "#7F0909",
    ContainerLine: "#890A0A",
    OnContainer: "#F9E7E7",
  },

  FocusRing: "rgba(0 0 0 / 50%)",
});
