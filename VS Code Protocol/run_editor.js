var	url = WScript.Arguments(0),
    match = /^vscode:\/\/open\/\?url=file:\/\/(.+)&line=(\d+)$/.exec(url),
    editor = 'code';

if (match) {
    // Add parameters
    editor += ' -g'; // Open the file at path at the line and column (add :line[:column] to path)
    editor += ' -r'; // Force opening a file or folder in the last active window
    editor += ' "%file%:%line%"';

    // Parse file uri and replace to command
    // Reference from the docs: https://pla.nette.org/en/how-open-files-in-ide-from-debugger
    var file = decodeURIComponent(match[1]).replace(/\+/g, ' ');
    var command = editor.replace(/%line%/g, match[2]).replace(/%file%/g, file);

    // Run command in the shell
    var shell = WScript.CreateObject("WScript.Shell");
    shell.Run(command);
}
