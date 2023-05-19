This is my portfolio website that is currently under development. For now I am working on connecting my CMS based on Strapi. Also, there is some basic Vercel CD and Lighthouse CI implemented through Github Actions.

# Starting with this project 
Install all the libraries through 
```bash
npm i 
```
And then run with 
```bash
npm run dev
```
or for faster dev-builds:
```bash
npm run dev -- --turbo
```
which uses Turbopack written in Rust instead of Webpack which increases speed of the building process

# Running build
General building process implemented on my vercel server is as follows
```bash
npm ci 
npm run build 
npm start 
```
