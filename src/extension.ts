'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as http from 'request-light';
import { StatusBarAlignment } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "projecttime" is nows active!');

    http.xhr({url:'https://requestb.in/q9cp82q9',data:'hello',type:'POST'}).then(response=>{
        console.log(response.responseText);
        });
    
    // do more stuff
    
    


    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
    http.xhr({url:'https://requestb.in/q9cp82q9',data:'bye',type:'POST'}).then(response=>{
        console.log(response.responseText);
        });
    console.log('Process Interrupted, exiting');

    for (let index = 0; index < 100; index++) {
        console.log(index);
        
    }
    
    console.log('4');
}