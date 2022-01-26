// Pushing: 
// Now that we have a remote set up, to push this we need a command 
// ==> git push

// we need to specify the remote we want to push up to 
// AND the specific local branch we want to push up that remote 


// ==> git push <remote> <branch>

// Ex: 

// most of the time the name of the remote will be --> origin 
// and
// most of the time the name of the branch will be --> master 

// so this also has become like a popular git commad 

// ==> git push origin master 


// now u can see the changes if u refresh the github repo


//---------------


// u have pushed the master branch 
// now if u want to push some other branch, to the same repo 


// then, 

// ==> git switch - c empty 

// add the file, delete the files, 
// and make a final commit, 

// ==> git push oringin empty  


// now u can see that another branch will be created on ur github repo. 



// EDIT THE MASTER BRANCH ---> 


// ==> git swith master

// ==> touch chanpter4.txt 

// ==> git add . 

// ==> git commit -m "added file"

// ==> git push origin master 