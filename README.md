# Bootstrap 5 Icon Snippets

Simple and easy Bootstrap 5 Icon snippets. There are over 1,900 icons available free from the Bootstrap team and they are always adding new ones. This extension makes it easy to insert `<i></i>` tags and a simple way to select the icon you would like from the completion suggestions.

## Features

Nearly 2k icons provided by the Bootstrap team have been included in this extension.

Here is an example of a snippet:

`<i class="bi bi-code" style="font-size: 2em; color: #007bff;"></i>`

- `style=` attribute includes default `font-size: 2em;` and `color: #007bff;` that can be tabbed through to change when adding an icon to your page.

## Instructions

To select an icon simply start by typing `bi` and you will get a list of all currently available icons.

Next tab to the size if you would like to change the icon size.

Lastly tab to the color and either input your color code or select from the VS Code color chooser which also supports opacity.

## Requirements

- VS Code [^1.75.0](https://code.visualstudio.com)
- Bootstrap [v5.2.3](https://getbootstrap.com/)
- Bootstrap Icons [v1.10.13](https://github.com/twbs/icons/releases/tag/v1.10.5)

## Extension Settings

None

## Known Issues

Selected language mode for the file you are working on needs to be `HTML` initially. This extension has been tested with HTML and ERB files but should work fine in other languages.

## Release Notes

### 1.0.0

Refactored snippet function to handle JS Object instead of mapping an array for searching through the icon list.
Refactored Icon Selection variable to a JavaScript Object module import from a variable array for better performance.
Insured current icon list is inline with the latest version of Bootstrap Icons v1.10.5

- Bootstrap [v5.2.3](https://getbootstrap.com/)
- Bootstrap Icons [v1.10.15](https://icons.getbootstrap.com)

### 0.0.1

Initial release of the extension.

- Bootstrap [v5.2.3](https://getbootstrap.com/)
- Bootstrap Icons [v1.10.13](https://icons.getbootstrap.com)
