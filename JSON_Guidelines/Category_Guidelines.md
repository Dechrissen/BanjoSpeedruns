# Category JSON Guidelines
The individual category pages are automatically generated based on the JSON files for the respective categories.
The file `category.html` is a template HTML file that is populated with category data via the `injectCategoryData()` function, depending on the category in the URL.
For this reason, the JSON category files must follow a particular format in order for the injection to work properly. The guidelines are below.  

### Important things to note
- The video fields for each trick contain *embed* links, not normal video links (note the `/embed`)
- If there are no items in a particular section (i.e. no documents/videos), leave its list empty
- You can run your JSON through [this tool](https://jsonlint.com/?code=) to check its validity

Sample JSON category data, named `100.html`, for Banjo-Kazooie 100%:
```JSON
{
	"title": "100%",
	"leaderboard": "https://www.speedrun.com/bk#100",
	"description": "This category is super easy and it's not a challenge at all to get sub tooth hurty.",
	"routedocuments": [{
			"name": "Cool Document 1",
			"link": "https://tinyurl.com/vzl8xnp"
		},
		{
			"name": "Fun Document 2",
			"link": "https://tinyurl.com/vzl8xnp"
		},
		{
			"name": "Rad Document 3",
			"link": "https://tinyurl.com/vzl8xnp"
		}
	],
	"videos": [{
			"name": "Cool Vid 1",
			"video": "https://www.youtube.com/embed/tAq4nIyZWJ8"
		},
		{
			"name": "Helpful Vid 2",
			"video": "https://www.youtube.com/embed/tAq4nIyZWJ8"
		}
	]
}
```

#### Fields
1. `"title"` Name of the game + category
2. `"description"` Category description & rules
3. `"routedocuments"` Relevant documents and videos, like routes, tips, etc. (list)
4. `"videos"` Relevant videos, like important tricks, movement guides, etc. (list)

Fields 1 and 2 contain strings, while fields 3 and 4 contain lists of JSON objects (one object per item in that section).
A document object contains 2 fields: `"name"` and `"link"`. A video object contains 2 fields: `"name"` and `"video"`.  

[JSON template for categories](https://github.com/Dechrissen/Banjo_Speedrunning_Wiki/blob/master/JSON_Guidelines/categorytemplate.json)
