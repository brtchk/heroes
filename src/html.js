import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w, d, u, i, o, s, p) {
                    if (d.getElementById(i)) { return; } w['MangoObject'] = o;
                    w[o] = w[o] || function() { (w[o].q = w[o].q || []).push(arguments) }; w[o].u = u; w[o].t = 1 * new Date();
                    s = d.createElement('script'); s.async = 1; s.id = i; s.src = u;
                    p = d.getElementsByTagName('script')[0]; p.parentNode.insertBefore(s, p);
                }(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo'));
                mgo({calltracking: {id: 12625, elements: [{"selector":".mgo-number-12625"}]}});
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w, d, s, h, id) {
                    w.roistatProjectId = id; w.roistatHost = h;
                    var p = d.location.protocol == "https:" ? "https://" : "http://";
                    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
                    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
                })(window, document, 'script', 'cloud.roistat.com', '4667f6cfc4648b1dd776a7561a5419dc');
              `,
            }}
          />
        </body>
      </html>
    )
  }
}
