import "det1234.c"
import "det5678.c"
import "det9101112.c"
import "one.c"
import "oppoone.c"
import "pyramid.c"
import "square.c"
import "antisquare.c"
import "antipyramid.c"
import "tri.c"
import "antitri.c"
import "stdio.h"
void function component(){
 type DET ="det1234 + det5678 + det9101112";
 type TRI = "tri - antitri";
 type ONE = "one + oppoone";
 type Square = "square * antisquare";
 type DETtri = "DET * tri";
 type triDET = "tri / DET";
 type ONESquare = "ONE * square";
 type SquareONE = "square / ONE";
 type Pyramid = "pyramid / antiPyramid";
 type oppoPyramid = "antipyramid / pyramid";
 type dimPyramid = "Pyramid - oppoPyramid";
 console.log('DET','TRI','ONE','tri','antitri','Square','DETtri','triDET','ONESquare','SquareONE','Pyramid','oppoPyramid','dimPyramid');
}
void function SUM(){
   void  ["DET/tri","tri/DET"==="DETtri","triDET"]
   void  ["DETtri + ONEsquare"=="squareONE + triDET"]
   void  ["Pyramid" == "oppoPyramid+dimPyramid"]
}