// Atomic Commits: 

// When possible, a commit should enocompass a single feature, change, or 
// fix. In other words, 
// try to keep each commit focused on a single thing. 


// This makes it much easier to undo ir rollback changes later on. it also 
// makes ur code or project easier to review 


// Ex: Imagine that there are four files in a folder called bigfolder, and in all those 
//     4 files, the word CAT exists 
//     Now, imagine that due to some reason u want replace the word CAT by DOG 


//     AND 

//     u also want to create a sub folder called IMAGES, inside bigfolder, and u want to add 3 images of 
//     those dogs in that folder. that means in that images folder, 

//     there are 3 files --> dog1.png, dog2.png, dog3.png 

    

//     Now u want to commit all these changes to git.. 


//     while doing that, its better not to use --> git add . 
//     and add all the changes at one. 
//     Instead of thtat choose all the four files in which the word CAT was replaced 
//     by DOG 

//     and use command git add file1.txt file2.txt file3.txt file4.txt 

//     and then use 
// ==> git commit -m "replaced cat by dog"


//     //---------------------



//     now when its comes to images folder, 

//     if u want thn u can add the entire folder once by

//     ==> git add images/ 

//            OR 

//     ==> git add images/dog1.png dog2.png dog3.png


//     and then make git commit 

//     ==> git commit -m "added folder images"


//     so this way u and also other people can track the canges u made 
//     in the project very easily 
