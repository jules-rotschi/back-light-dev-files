enum Theme {
  light = "light",
  dark = "dark"
}

const getCurrentTheme = () => {
  return document.documentElement.getAttribute('data-theme') as Theme;
}

const getNextTheme = (currentTheme: Theme) => {
  return currentTheme === Theme.light ? Theme.dark : Theme.light;
}

export const toggleTheme = () => {
  const currentTheme = getCurrentTheme();
  const newTheme = getNextTheme(currentTheme);
  document.documentElement.setAttribute("data-theme", newTheme)
}