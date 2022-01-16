// Amending Commits 

// Suppose u just made a commit and then rialized u
// * forget to include a file! origin,
//           OR
// *u made a typo in the commit message that u want to 
// correct. 

// Rather than making a brand new separate commit u can "redo" the previous 
// commit using ==> --amend    option 

// VERY IMPORTENT NOTE: u can use ==> --amend only to the commit just Before,
// in ohter words just prevous commit. 
// u cannot use ==> --amend does not work for the commit which u made 10 0r 5 
// commits ago. 


// // --------------------------------------------------
// imagine that u have changed or edited 3 files, text1.txt  text2.txt  text3.txt 

// u added 2 files text1.txt  text2.txt by ==> git add text1.txt  text2.txt

// and u commited by ==> git commit -m "added 2 files"

// but u forgot to add the  3rd file 

// so now we will add that file ==> git add text3.txt 

// now u cant say ==>git commit  
// but u will say ==> git commit --amend 

// NOW--> COMMIT-EDITING file will open in the default text editor 
// it opens up the previous commit message 

// so that u can edit that message if u want and save and then close the file 
// or if u dont want u can simply save and close the file 

// Note: in this stage u can see a message in ur git bash 
//       --> waiting for the editor to close the file 

//       so before typing any cammand u have to close the COMMIT-EDITING file 
//       which was opend when u typed ==> git commit --amend 
//       NOW THE TASK IS COMPLETED 

// SO THEERE ARE 2 REASONS TO DO THIS: 

// * U need to include the files that u forgot to include in prevous commit 

// * Redo the commit message in ohter words u want to edit the commit message 

// * Or u want to do all both including the file or folder and editing the 
//   commit message 



