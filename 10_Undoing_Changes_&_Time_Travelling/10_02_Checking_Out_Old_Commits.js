// Checkout: 

// The git checkout command is like a Git Swiss Army knife. 
// Many developers think it is overloaded, which is what lead to the 
// addition of the ==> git switch and ==> git restore commands 

// We can use checkout to create branches, switch to new branches, 
// restore files, and undo history!



// CHECKOUT USING COMMIT HASHES: 

// ==> git checkout d8194d6 

// We can use git checkout Commit <commit-hash> 
// to view a previous commit. 

// u can use the ==> git log --oneline , OR ==> git log 
// to view commit hashes. 
// VVV Imp: We just need the first 7 digits of a commit hash. 




//----------------




// Detached HEAD --> message 

// You are in 'detached HEAD' state. You can look around, make experimental
// changes and commit them, and you can discard any commits you make in this
// state without impacting any branches by switching back to a branch.


// imagine that u r on the master brabch, and u have committed all the changes, 
// and u want to swith back to the 2nd or 3rd commit u made 


// $ git log --oneline
// fb75afd (HEAD -> master) add heading s to all files
// bde6afa add two images to mood board
// 92e2b8a Add the Wilson's to character list
// 98e727f remove extra blank lines in chapter2
// 279478d added changes
// 9209fa7 Fix Typo in outline
// 3ab3af5 Create mood board
// f1ff2df rename Gatsby to Catsby
// 2427116 split chapter 1 into two pieces
// 35776fa finish chapter 1
// ad5c6a9 bigin work on chapter 1
// 395e56c start work on outline and main characters


// now if u see the commit  --> f1ff2df rename Gatsby to Catsby
// u dout want Catsby and u want back Gatsby

// to do that,  

// * u have to hit ==> git log  or git log --oneline 

// * u will get the list of logs 

// * select (copy) the hash, 

//  RUN --> git checkout 3ab3af5 (the hash which u copied) // 3ab3af5 Create mood board

//  and u can see the file 



// //--------------



// Note: 

// now if u hit git log, 
// u will see less number of commits 

// beacuse u are not in the master branch, u have travelled back 4 or 5 
// commits before master. 
// so u can see only the commits which u made before "1ff2df rename Gatsby 
// to Catsby" commit 





