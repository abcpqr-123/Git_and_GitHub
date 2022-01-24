// Detached HEAD 

// well... u dont need to get panic by seeing the detatched 
// hed state! 
// Its not at all a bad thing! 

// You have couple of options: 

// 1. Stay in detached HEAD to examin the contents of the old commit. 
//    Poke around, view the files, etc. 

// 2. Leave and go back to wherever u were before-reattach the HEAD 

// Ex: Imagine that u were working on the master baranch, for some reason, 
//     u went back to the fourth commit which u made earlier, now u r in a 
//     detached head state, 
//     if u want to switch back to master then, 
    
//     ==> git switch master

//     Now u will land straight into the master branch, without messing-up 
//     anything. 

// u just time tarvelled back and time travelled forword 



// 3. Create a new branch and switch to it. You can now make and save 
//    changes, since HEAD is no longer detached. 


// Ex: 
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

// Imagine that in the above commits at chapter1 u want to split off and try
//  a new version of Chapter2 and Chapter3
// and u dont want to delete all the previous works u have done. 
// and u want to try-out new things. 
// to do that: 

// If u r in the master branch, hit
// ==> git status , and make sure that u dont have to commit anything, 

// ==> git checkout 35776fa   // 35776fa finish chapter 1
// now u r in the commit --> 35776fa finish chapter 1

// and now u have to create a new barnch, 

// ==> git switch -c chapter2-redo

// now u r not in detached head state anymore! 
// u can do more work on this new branch, u can even create new files , or 
// update  the existing files do anything! 


// now hit ==> git status 

// u will see the list of all the edited files, 
// add and commit the changes. 

// now, if u want u can always switch back to master. 
// and continue the work. 

