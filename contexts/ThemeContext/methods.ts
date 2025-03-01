import { ThemeState, ThemeVariants } from "./state";

export default function createThemeMethods(state: ThemeState) {
  return {
    setThemeName: (themeName: string): ThemeState => {
      return { ...state, activeThemeName: themeName };
    },
    setThemeVariants: (themeVariants: ThemeVariants): ThemeState => {
      return { ...state, themeVariants };
    },
    setSectionTheme: (sectionName: string, themeName: string): ThemeState => {
      if (state.sectionThemes[sectionName] === themeName) {
        return state;
      } else {
        const sectionThemes = {
          ...state.sectionThemes,
          [sectionName]: themeName,
        };
        return { ...state, sectionThemes };
      }
    },
  };
}
