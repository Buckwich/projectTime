'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as http from 'request-light';
import * as bdb from 'bdb';


const url='https://requestb.in/q9cp82q9';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log(bdb);
    var env = new bdb.DbEnv();
    env.openSync({home: '/path/to/your/env'});
    env.closeSync();
  
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "projecttime" is now sactive!');


    http.xhr({url, data:'hello',type:'POST'}).then(response=>{
        console.log(response.responseText);
        });    
   
    let disposable = vscode.commands.registerCommand('projectTime.tag', () => {       
        vscode.window.showInputBox({prompt:"Input the name of the time tag",value:"call"}).then((value:string)=>{
            http.xhr({url,data:'bye',type:'POST'}).then(response=>{
                console.log(response.responseText);
            });
        });        
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {   
    http.xhr({url,data:'bye',type:'POST'}).then(response=>{
        console.log(response.responseText);
    });   
}