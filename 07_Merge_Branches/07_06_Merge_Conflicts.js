// Merge Conflicts: 


//  THIS IS AN EXAMPLE FOR non-fastforward merge. 
// In this type of merge things will merge still automatically. but,
// WE JUST HAVVE TO PROVIDE A MESSAGE 
// there is NO conflict while merging. 


// Depending on the specific changes u r trying to merge, 
// Git may not be able to automatically merge. 
// This results in MERGE CONFLICTS  which u need to manually 
// resolve. 

// git conflict message Ex: 

// CONFICT(content): Merge conflict in blah.txt 
// Automatic merge failed; fix conflicts and then commit the result 



//----------------------------------------------------



// conflict files: 

// the files which have conflict message are actually decorated 
// Ex: 

// <<<<<<<<HEAD 
// I have two dogs 
// i also have 1 cat 
// =========
// I used to have 10 dogs 
// >>>>>>> bug-fix 


//-------------------------------


// conflict markers: 

// The content from ur current HEAD(the branch u r trying to merge content into)
// is displayed between the <<<<<<HEAD and ===========

// The content from the branch u r trying to merge from is displayed between the 
// ======== and >>>>>>> symbols 


// Resolving conflicts: 

// Whenever u encounter merge conflicts, follow these steps to resolve them: 

// !. Open up the files(s) with merge conflicts 

// 2. Edit the file(s) to remove the conflicts. Decide which branch's content 
//    u wnat to keep in each conflict. Or keep the content from both. 

// 3. Remove the conflict "markers" in the document 

// 4. Add ur changes and then make a commit!






