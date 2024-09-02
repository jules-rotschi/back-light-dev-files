export enum Theme {
  light = "light",
  dark = "dark"
}

export const detectUserPreference = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

export const getCurrentTheme = () => {
  return document.documentElement.getAttribute('data-theme') as Theme;
}

export const getNextTheme = (currentTheme: Theme) => {
  return currentTheme === Theme.light ? Theme.dark : Theme.light;
}

export const toggleTheme = () => {
  const currentTheme = getCurrentTheme();
  const newTheme = getNextTheme(currentTheme);
  document.documentElement.setAttribute("data-theme", newTheme)
}