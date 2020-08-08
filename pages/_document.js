// eslint-disable-next-line max-classes-per-file
import * as fs from 'fs';
import * as path from 'path';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles();
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps;

    if (!files || files.length === 0) return null;

    return files
      .filter((file) => /\.css$/u.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line no-sync
            __html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8')
          }}
        />
      ));
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <InlineStylesHead>
          <link
            rel="preload"
            href="/static/fonts/Jost-roman.var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#0f141e" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
        </InlineStylesHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
