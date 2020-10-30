# nuxt-capacitor-app

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FMexsonFernandes%2Fnuxt-capacitor-app)

A boilerplate code for starting cross platform apps developed using Nuxt.js and Capacitor.js cross platform framework.

## Platform supported
* Web Browser (Tested on Chrome, Firefox, Brave, Edge)
* Android
* PWA (Tested on Chrome, Brave, Edge)

## Plugins available
* axios
* content
* ionic

## To-Do:
- [x] Ionic UI components
- [x] Electron support
- [x] Capacitor plugins
- [x] Cordova Resources(icon/splash)

## Create resources

* Add icon with size (1024x1024)px.
* Add splash with size (2732x2732)px.
* Run the generation command

    `yarn resources`

## Generate platform packages (Electron)

`yarn package:<platform>`

Eg. linux, windows

Find deployment under `package/` folder.


* Run following to create installer file.

`yarn deb64`


## References:
* https://github.com/daggerok/ionic-nuxt-app
