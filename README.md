## gatsby-remark-audio


### Forked from [gatsby-remark-video](https://github.com/rehat101/gatsby-remark-video)

Embeds audio tag in your gatsby project

## Installation
```
npm install gatsby-remark-audio
```

## Usage

In your markdown
```
audio: /static/shots-demo-369bfe714a6b8981ecfc743f7e7e7008.mp4
```

Add the following in your `gatsby-config.js`
```javascript
{
	resolve: 'gatsby-remark-audio',
	options: {
		preload: 'auto',
    controls: true,
    loop: false,
		muted: false,
		autoplay: false
	}
}
```
