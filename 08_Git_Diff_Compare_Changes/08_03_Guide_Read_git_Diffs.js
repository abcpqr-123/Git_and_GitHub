// Last commit     New Changes 

// red               red 
// orange            orange 
// yellow            yellow 
// green             green 
// blue              blue                  
// purple            indigo
//                   violet 


// Compard files: 
// For each comparison, Git explains which files it is comparing. usually 
// this is two vetsions of the same file 

// GI also declares one file as "A" and the other as "B"
// Ex:
// diff --git a/rainbow.txt b/rainbow.txt 


// File Metadata: 
// Metadata is not really importent 

// The filst first two numbers are the hashes of the two files being compared. 
// The last number is an internal file made identifier 
// Ex:
// index 5es34sjf... 324fsdfj 4394839


// Markers:
// File A and File B are each assigned a symbol 
// * File A gets a ninus sign(-)
// * FIle B gets a plus sign(+)
// Ex:
// ---a/rainbow.txt 
// +++b/rainbow.txt 


// Chunks: 
// A diff wont show the entire contents of a file. but instead only shows 
// portions of "chunks" that were modified 
// A chunk also includes some unchanged lines before and agter a change to 
// provide same context 
// Ex:
// @@ -3,4 +3,5 @@ orange   Note: (- sign indicates file A, In file A 4 lines 
//                                have been extracted statrting from line 3) 
//                                (+ sign indicates file B, In file B 5 line 
//                                 have been extracted starting from line 3
 
//                                orange is not the part of the chunk. t depends
//                                on the language u r using. JS or python or
//                                someting else. SO u can ignore it) 

// yellow 
// green 
// blue
// -purple 
// +indigo 
// +violet 

