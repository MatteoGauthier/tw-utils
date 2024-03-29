const fs = require("fs/promises")
if (!String.prototype.replaceAll) {
	String.prototype.replaceAll = function(str, newStr){

		// If a regex pattern
		if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
			return this.replace(str, newStr);
		}

		// If a string
		return this.replace(new RegExp(str, 'g'), newStr);

	};
}

const args = process.argv.slice(2)

if (args.length < 2) {
	console.error("Usage: node addFont.js <font name> <font class name>")
	process.exit(1)
}

const templates = ["index.js", "display.js", "sans-fallback.js", "sans.js"]
;// async function auto call
(async () => {
	await fs.mkdir(__dirname + "/../font/" + args[1], { recursive: true })
	for (let i = 0; i < templates.length; i++) {
		const template = templates[i]
		const content = await fs.readFile(__dirname + "/font_folder_template/" + template, "utf8")
		const result = content.replaceAll("{{css_font_name}}", args[0]).replaceAll("{{tw_font_name}}", args[1])
		await fs.writeFile(__dirname + "/../font/" + args[1] + "/" + template, result, "utf8")
	}
})()
