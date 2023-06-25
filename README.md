# NYT Crossword Clue Hider

A simple Chrome extension that hides any solved clues unless they are actively selected.

This is my first time building a browser extension, and it is still a work in progress. If you encounter any bugs or issues, please report them and I will try to resolve them ASAP.

I am not affliated in any way with The New York Times Company or New York Times Games.

## Usage

Once the extension has been added, open the Extensions menu (the puzzle icon at the top right of the browser) and click the "NYT Crossword Clue Hider." This will activate the extension if the current tab is an NYT Crossword tab. You can verify that the plugin is active by checking the logo:

**Extension inactive**

<img src="https://raw.githubusercontent.com/l-ohman/nyt-crossword-clue-hider/main/icons/inactive128.png" alt="Extension inactive"/>

**Extension active**

<img src="https://raw.githubusercontent.com/l-ohman/nyt-crossword-clue-hider/main/icons/active128.png" alt="Extension active"/>

_For now, this must be done at the start of every crossword._

## Todo

- [ ] Fix cluelist updates being behind by 1 event
- [ ] Automatically init when a crossword is opened (instead of having to enable each time)
- [ ] Ability to toggle the extension (currently the only way to disable is to refresh the page)
- [ ] Create Firefox version
