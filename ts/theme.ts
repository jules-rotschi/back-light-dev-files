export enum AvailableTheme {
  LIGHT = "light",
  DARK = "dark"
}

export class ThemeDomState {
  public getCurrent() {
    return document.documentElement.getAttribute('data-theme') as AvailableTheme;
  }

  public setCurrent(newTheme: AvailableTheme) {
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  public toggleTheme() {
    const currentTheme = this.getCurrent();
    const newTheme = currentTheme === AvailableTheme.LIGHT ? AvailableTheme.DARK : AvailableTheme.LIGHT;
    this.setCurrent(newTheme);
    return newTheme;
  }
}

export class ThemeStorage {
  public storeTheme(theme: AvailableTheme) {
    localStorage.setItem('theme', theme);
  }

  public getStoredTheme() {
    return localStorage.getItem('theme') as AvailableTheme;
  }
}

export class ThemeUserPreference {
  getUserPreference() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return AvailableTheme.DARK;
    } else {
      return AvailableTheme.LIGHT;
    }
  }
}

// CLIENT EXAMPLE

// const themeButton = document.getElementById('theme-button') as HTMLButtonElement;

// const themeDomState = new ThemeDomState();
// const themeStorage = new ThemeStorage();
// const themeUserPreference = new ThemeUserPreference();

// function refreshButtonLabel() {
//   const currentTheme = themeDomState.getCurrent();
//   if (currentTheme === AvailableTheme.LIGHT) {
//     themeButton.textContent = "Thème sombre";
//   }
//   if (currentTheme === AvailableTheme.DARK) {
//     themeButton.textContent = "Thème clair";
//   }
// }

// const storedTheme = themeStorage.getStoredTheme();

// if (storedTheme) {
//   themeDomState.setCurrent(storedTheme);
// } else {
//   themeStorage.storeTheme(themeUserPreference.getUserPreference());
// }

// refreshButtonLabel();

// themeButton.addEventListener('click', () => {
//   const newTheme = themeDomState.toggleTheme();
//   themeStorage.storeTheme(newTheme);
//   refreshButtonLabel();
// });