# Level JSON Guidelines
The individual level pages are automatically generated based on the JSON files for the respective levels.
The file `level.html` is a template HTML file that is populated with level data via the `injectLevelData()` function, depending on the level in the URL.
For this reason, the JSON level files must follow a particular format in order for the injection to work properly. The guidelines for each
individual game are below.

## Games
1. [Banjo-Kazooie](#banjo-kazooie)
2. [Banjo-Tooie](#banjo-tooie)

### Important things to note
- The video fields for each trick contain *embed* links, not normal video links (note the `/embed`)
- If there is no video or image for a trick, don't include those fields in the trick's object
- If there are no tricks in a particular category (like `"outofbounds"` above), leave its list empty
- You can run your JSON through [this tool](https://jsonlint.com/?code=) to check its validity

## Banjo-Kazooie

Sample JSON level data, named `mm.json`, for Mumbo's Mountain:
```JSON
{
	"title": "Mumbo's Mountain",
	"description": "Cool level description words go here.",
	"general": [{
		"name": "Trick 1",
		"description": "This is a cool trick.",
		"video": "https://www.youtube.com/embed/abcdefg1234"
	}],
	"outofbounds": [{
			"name": "Trick 2",
			"description": "This is a bad trick.",
			"video": "https://www.youtube.com/embed/abcdefg1234",
			"image": "./images/banjospeedruns-logo.png"
		},
		{
			"name": "Trick 3",
			"description": "This is a really bad trick.",
			"video": "https://www.youtube.com/embed/abcdefg1234"
		}
	]
}
```

#### Fields
1. `"title"` Name of the level
2. `"description"` Level description
3. `"general"` General tricks (list)
4. `"outofbounds"` Out-of-bounds tricks (list)  

Fields 1 and 2 contain strings, while fields 3 and 4 contain lists of JSON objects (one object per trick in that category).
A trick object contains 4 fields: `"name"`, `"description"`, `"video"`, and `"image"` which are self-explanatory.  

[JSON template for Banjo-Kazooie levels](https://github.com/Dechrissen/Banjo_Speedrunning_Wiki/blob/master/JSON_Guidelines/bkleveltemplate.json)

## Banjo-Tooie

Sample JSON level data, named `mt.json`, for Mayahem Temple:
```JSON
{
  "title": "Mayahem Temple",
  "description": "This is a fun level haha!",
  "general": [
    {
      "name": "Jade Snake Grove Early",
      "description": "This is a cool trick.",
      "video": "https://www.youtube.com/embed/RaXh8aMmdG0"
    },
    {
      "name": "Pillars",
      "description": "This is also a cool trick.",
      "video": "https://www.youtube.com/embed/Huy-Vhfm64Q",
			"image": "./images/banjospeedruns-logo.png"
    },
    {
      "name": "Prison Compound Codes",
      "description": "This is one of the coolest tricks.",
      "video": "https://www.youtube.com/embed/EEtp3dI1KD8"
    },
    {
      "name": "Relic Jump",
      "description": "Amazing trick.",
      "video": "https://www.youtube.com/embed/MV8dfNrBqLw",
			"image": "./images/banjospeedruns-logo.png"
    },
    {
      "name": "Stadium Early",
      "description": "This trick is really hard.",
      "video": "https://www.youtube.com/embed/uRJIKw5zNwA"
    }
  ],
  "cwkshots": [
    {
      "name": "Swamp Jiggy Shot",
      "description": "Impossible trick, don't do this in runs.",
      "video": "https://www.youtube.com/embed/E3RGZthPNoc"
    },
    {
      "name": "Pillars Shots",
      "description": "One of the hardest tricks.",
      "video": "https://www.youtube.com/embed/S-WeHArOWK0"
    }
  ],
  "cwkwarps": [
    {
      "name": "Snake Head Skip",
      "description": "Easy trick.",
      "video": "https://www.youtube.com/embed/bcXc2OFDQsU"
    }
  ],
  "outofbounds": []
}
```  

#### Fields
1. `"title"` Name of the level
2. `"description"` Level description
3. `"general"` General tricks (list)
4. `"cwkshots"` Clockwork shots (list)
5. `"cwkwarps"` Clockwork warps (list)
6. `"outofbounds"` Out-of-bounds tricks (list)  

Fields 1 and 2 contain strings, while fields 3-6 contain lists of JSON objects (one object per trick in that category).
A trick object contains 4 fields: `"name"`, `"description"`, `"video"`, and `"image"` which are self-explanatory.  

![JSON template for Banjo-Tooie levels](https://github.com/Dechrissen/Banjo_Speedrunning_Wiki/blob/master/JSON_Guidelines/btleveltemplate.json)
