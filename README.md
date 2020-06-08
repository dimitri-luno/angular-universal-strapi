# angular-universal-strapi
Prerender content from Strapi with Angular Universal, using Apollo / GraphQL

## Strapi setup
In `backend` run strapi with `yarn strap dev`

On http://localhost:1337/ log in with
- User: admin
- Pasw: adminpassword

## Angular setup
In `frontend` prerender the app with `npm run prerender` and serve the static files via `npx http-server dist/frontend/browser` to http://127.0.0.1:8080/


## More info:
- Strapi + Angular + Apollo tutorial: https://strapi.io/blog/build-a-blog-with-angular-js-strapi-and-apollo
- Prerendering with Angular Universal: https://dev.to/michaeljota/how-to-prerender-your-angular-app-using-angular-universal-4g0b
- Using Angular Universal vs Scully: https://medium.com/joolsoftware/angular-pre-rendering-scully-io-vs-angular-universal-6f026150f341
