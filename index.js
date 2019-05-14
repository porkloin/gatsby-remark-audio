const visit = require('unist-util-visit');

const addAudio = ({ markdownAST }, options) => {

	visit(markdownAST, 'inlineCode', (node) => {
		const { value } = node;
		const matches = value.match(/audio:?\s(.*)+/i);

		if(matches) {
			const url = matches[1].trim();

			node.type = 'html';
			node.value = renderAudioTag(url, options);
		}
	});

};

const renderAudioTag = (url, options) => {

	const audioNode = `
		<audio
			src=${url}
			preload="${options.preload}"
			muted="${options.muted}"
			${options.autoplay ? 'autoplay' : ''}
			${options.loop ? 'loop' : ''}
		></audio>
	`;

	return audioNode;
};

module.exports = addAudio;