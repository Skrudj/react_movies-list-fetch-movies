(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(13),c(8)),n=c(2),r=c(1),o=(c(14),c(15),c(16),c(0)),l=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(l,{movie:e},e.imdbId)}))})},j=(c(18),c(6)),m=c.n(j);var b=function(e){var t=e.onMovieAdd,c=Object(r.useState)(!1),i=Object(n.a)(c,2),s=i[0],a=i[1],d=Object(r.useState)(!1),j=Object(n.a)(d,2),b=j[0],u=j[1],h=Object(r.useState)(null),v=Object(n.a)(h,2),O=v[0],x=v[1],f=Object(r.useState)(""),p=Object(n.a)(f,2),g=p[0],N=p[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":b}),value:g,onChange:function(e){u(!1),N(e.target.value)}})}),b&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":s}),onClick:function(e){e.preventDefault(),a(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=3ba730e2","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(g.toLowerCase().trim()).then((function(e){var t;"Error"in e?u(!0):x({title:(t=e).Title,description:t.Plot,imgUrl:"N/A"===t.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":t.Poster,imdbId:t.imdbID,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID)})})).catch((function(e){throw u(!0),new Error(e.errorMessage)})).finally((function(){return a(!1)}))},disabled:!g,children:O?"Search again":"Find a movie"})}),O&&Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){t(O)},children:"Add to the list"})})]})]}),O&&Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(l,{movie:O})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(b,{onMovieAdd:function(e){e&&!c.some((function(t){return t.imdbId===e.imdbId}))&&i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0d2d83a1.chunk.js.map