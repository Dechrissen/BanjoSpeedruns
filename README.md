![banjospeedruns.com logo](https://github.com/Dechrissen/Banjo_Speedrunning_Wiki/blob/master/images/banjospeedruns-logo.png)

# banjospeedruns.com
*Website for the Banjo-Kazooie speedrunning community.*  
[Visit the Site!](https://banjospeedruns.com/)  
*Status*: Live  

## Purpose
The purpose of this website is to serve as a collection of resources, tricks, strategies, and routes for speedrunning all *Banjo-Kazooie* series games:

- *Banjo-Kazooie*
- *Banjo-Tooie*
- *Banjo-Kazooie: Grunty's Revenge*
- *Banjo-Pilot*
- *Banjo-Kazooie: Nuts & Bolts*

## Layout
The site's **homepage** is separated into a grid of six panels: one for each game, and one for general information (leaderboard links, Discord server invite, etc). Within each game panel, there are links to pages for **individual levels/worlds**. Those pages provide a catalog of known tricks per level, with accompanying descriptions and video embeds where applicable. Also in each game panel are links to pages detailing **general movement** and pages for **category routes/information**.

## Framework
The site was built using HTML/CSS and JavaScript. The homepage is solely HTML/CSS. The pages for individual levels in particular are generated from a template file (`level.html`) on page load using JavaScript.  

For example, the URL `https://banjospeedrunning.com/btlevels/mt` will generate the page for Mayahem Temple (`mt`) from Banjo-Tooie (`btlevels`). In this case, the `btlevels` directory will be checked for a file `mt.json`, and the JavaScript will inject the level data into the template. Each level's trick inventory is stored in a JSON file, like the one below. More about this can be found ![here](https://github.com/Dechrissen/Banjo_Speedrunning_Wiki/blob/master/JSON_Guidelines/Level_Guidelines.md).

```JSON
{
	"title": "Mumbo's Mountain",
	"description": "This is a fun level haha!",
	"general": [{
		"name": "Trick 1",
		"description": "This is a cool trick.",
		"video": "https://www.youtube.com/embed/tAq4nIyZWJ8"
	}],
	"outofbounds": [{
		"name": "Trick 2",
		"description": "This is also a cool trick.",
		"video": "https://www.youtube.com/embed/LMvXeUZFbgg"
	}]
}
```

With this method, the template level page's layout can be changed in the future without much hassle, while the page content can stay the same.  

The pages for individual categories are generated in a similar way, from template file (`category.html`) on page load. More about this can be found ![here](https://github.com/Dechrissen/Banjo_Speedrunning_Wiki/blob/master/JSON_Guidelines/Category_Guidelines.md).
