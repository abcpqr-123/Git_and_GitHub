//  THIS IS AN EXAMPLE FOR non-fastforward merge. 
// In this type of merge things will merge still automatically. but,
// WE JUST HAVVE TO PROVIDE A MESSAGE 
// there is NO conflict while merging. 

// Time to imagine, 

// imagine that u are on at team, and u have ur master branch on a project. 
// and then u create own branch to fix a bug or try some experiment out 
// or whatever it is. 
// And u r working over there for few hours and then u r happy with it and u 
// want to merge it back in to the master branch. 

// then u realize that some one has done work on the master branch.
// ur teammate has done work since u created ur branch 

// So there is a commit over here or maybe ten commmits that u dont have 
// on ur branch. but is on master 
// so when u try and merge , its not fastforward anymore. 



// Beacuse, 
// if i just try and take these two bug fixed branch comets, its not amatter of
// just having master catch Now there is  information in master branch which bugfix 
// does not have, and there is  information on bugfix, which master does not have.



// when its not a fastforward merge someting called MERGE COMMIT  is generated. 
// It makes a new commit for us and it will prompt us to include a mnessage. 

// example:

// imagine that u have a file on the master branch 

// now u created another branch called newBranch 

// u added some changes in the newBranch 

// now by this time someone has already edited the master branch 
// and added a new file into the master branch. 

// now ur newBranch does not know about the changes which are committed in the 
// master branch. 


// so to do merging: 
// * switch ur branch to master ==> git switch master 

// * merge the file into master ==> git merge newBranch 

// * will now a file will open in the default text editor, if it did not 
//   open then also its fine. check the editor once for new files, if there 
//   is no file and u got the commit message, then its fine 

//   # If the editor opend then u can edit the commit message, and add 
//     changes if u want 
//     else simply close the file. 
    
//     Note: u have to save and close the file in the text editor to do 
//           the next thing. else u will not be able to move forward 

// * and that will end the process of merging. 



//     //   master_new_Branch--> @ ----- ---> Merge to master branch          
//         //                        |     |
//         //                        |     |
//         //                        |     |
//         //                        |     @ <--newBranch
//         //                        |    /
//         //                        |   /     
//         //                        |  /     
//         //              master--> @




//  THIS IS AN EXAMPLE FOR non-fastforward merge. 
// In this type of merge things will merge still automatically. but,
// WE JUST HAVVE TO PROVIDE A MESSAGE 
// there is NO conflict while merging. 
