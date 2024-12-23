module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/_redirects");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addWatchTarget("src/assets/css");
	eleventyConfig.setQuietMode(true);

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "includes"
		}
	};
};
