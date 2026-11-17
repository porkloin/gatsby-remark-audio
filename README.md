## gatsby-remark-audio


### Forked from [gatsby-remark-video](https://github.com/rehat101/gatsby-remark-video)

This is a Gatsby remark plugin that creates HTML5 audio tags from local or remote audio sources.

## Installation

```
npm install gatsby-remark-audio
```

## Usage

### In Your Markdown Files

```markdown
`audio: /static/test.mp3`

`audio: https://www.mytestaudiosource.com/test.mp3`
```

### In Your gatsby-config.js

#### With Remark (i.e. using plugin gatsby-transformer-remark)
Add the following in your `gatsby-config.js` (must be included under the `plugins` key on gatsby-transformer-remark)
```javascript
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-audio',
        options: {
          preload: 'auto',
          loop: false,
          controls: true,
          muted: false,
          autoplay: false
        },
      },
    ],
  },
},
```

#### With MDX (i.e. using plugin gatsby-plugin-mdx)
Add the following in your `gatsby-config.js` (must be included under the `gatsbyRemarkPlugins` key on gatsby-plugin-mdx). See [here](https://mdxjs.com/advanced/plugins) for background.
```javascript
{
  resolve: `gatsby-plugin-mdx`,
  options: {
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-audio',
        options: {
          preload: 'auto',
          loop: false,
          controls: true,
          muted: false,
          autoplay: false
        },
      },
    ],
  },
},
```