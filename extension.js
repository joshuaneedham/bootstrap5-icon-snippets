// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// Include the bootstrap5-icon-set.js file
const bootstrapIcons = require("./bootstrap5-icon-set.js");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  console.log("Bootstrap Icon Snippets with Style extension is now active!");

  const completionItems = Object.entries(bootstrapIcons).map(
    ([name, iconClass]) => {
      const completionItem = new vscode.CompletionItem(name);
      completionItem.insertText = new vscode.SnippetString(
        `<i class="bi bi-${iconClass}" style="font-size: \${1:2em}; color: \${2:#007bff};"></i>`
      );
      completionItem.documentation = new vscode.MarkdownString(
        "Bootstrap Icon Snippets with Style"
      );
      return completionItem;
    }
  );

  const disposable = vscode.languages.registerCompletionItemProvider(
    ["html", "erb", "jsx"],
    {
      provideCompletionItems() {
        return completionItems;
      },
    }
  );

  context.subscriptions.push(disposable);
}
// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
