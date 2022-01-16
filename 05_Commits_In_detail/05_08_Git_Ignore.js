    // VVV IMP: if u want to know what u should ignore in a specific project
    // in which u r using a specific language then  ----gitignore.io----
    // will be helpful 
    
    // if u go and type the name of the language in which u r working then 
    //  it will show what to include in .gitignore file for that specific 
    //  language 
    



// ignoring files 

// We can tell git which files and directories to ingnire in a given repository, 
// using a .gitignore file. 
// This is useful for files u know u nrever want to commit, including 

// * Secrets, API keys, credentials, etc 

// * Operating System fiels (.DS_store on Mac)

// * Log files 

// * Dependecies & packages 



//-----------------------------------------------



// .gitignore

// Create a file called .gitignore in the root of a repository. Inside the file,
// we can write patterns to tell git which files & folders to ignore 

// #   .DS_Store with ignore files named .DS_Store

// #   folderName/ will ignore entire direcotry 
    //    Note: u must add "/" infront of folders so that git can identify that 
    //          its a directory

// #   *.log will ignore any files with the .log extension 


// Ex: 

// Imagine that u have 3 files and 1 folder in a folder 

// index.js  node_modules/ package-lock.json  secrets.txt 

// now u want to ignore package-lock.json and secrects.txt and a folder --> node_modules/ 

// So, while commiting u cannot say ==> git add . 

// so we will add index.js by ==> git add index.js 

// and commit by ==> git commit -m "add file index.js"


// now we are left with: node_modules/ package-lock.json  secrets.txt 


// now, in the ROOT folder of my project i will add a file --> .gitignore

// ==> touch .gitignore 

// now the git ignore file is created: 
// inside that file u can type the name of files and folders --> 

// Note: hit ls -a in the git bash to the name of all files and folders 
//       if want check what are the files that are needed to be ignored 

// now add the name of the files that u want to ignore
// Ex: 
// secret.txt 
// node_modules/

// now once u type and SAVE the file (u must have to save the file) u can see 
// the chages when u hit ==> git status in the git bash 

// now instead of node_modules/  secrets.txt, u will see 
// 1 single file that is .gitignore
// and u will see package-lock.json file 


// Now u can add the changes ==> git add . 

// now commit ==> git commit -m "added git ignore files"


// IMPORTENT NOTE: 

// now  if u make changes in the files, which u have included in the .gitignore 
// file (for example: secrets.txt) git will not notice that change 



