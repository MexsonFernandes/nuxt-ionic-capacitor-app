# Nuxt.js + Capacitor.js + Ionic.js Template

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMexsonFernandes%2Fnuxt-capacitor-app&count_bg=%231F83DB&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visitor+count&edge_flat=false)](https://hits.seeyoufarm.com)

A template code for starting cross platform apps developed using Nuxt.js and Capacitor.js cross platform framework.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FMexsonFernandes%2Fnuxt-capacitor-app)

## Features

- Documentation module
- Install app using custom button
- SEO support

## Platform supported

- Web Browser (Tested on Chrome, Firefox, Brave, Edge)
- Android
- PWA (Tested on Chrome, Brave, Edge)

## To-Do

- [x] Ionic UI components
- [x] Electron support
- [x] Capacitor plugins
- [x] Cordova Resources(icon/splash)
- [x] App installation Button
- [ ] App updates UI

## Create resources

- Add icon with size (1024x1024)px.
- Add splash with size (2732x2732)px.
- Run the generation command

  `yarn resources`

## Generate platform packages (Electron)

`yarn package:<platform>`

Eg. linux, windows

Find deployment under `package/` folder.

- Run following to create installer file.

`yarn deb64`

## References

- https://github.com/daggerok/ionic-nuxt-app
- [ion icons in Nuxt project](https://yasminzy.com/nuxt/ionicons/)
