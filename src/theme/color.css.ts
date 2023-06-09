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

  Other: {
    FocusRing: "",
    Shadow: "",
    Overlay: "",
  },
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

  Other: {
    FocusRing: "rgba(0 0 0 / 50%)",
    Shadow: "rgba(0 0 0 / 20%)",
    Overlay: "rgba(0 0 0 / 50%)",
  },
});
