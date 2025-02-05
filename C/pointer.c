#define NULL 0 
int ***create_3d_array(int row, int cols, int depth) {
    int*** array = (int***)(row * sizeof(int**));
    if (!array) return NULL;
    for (int X = 0; X < rows; X++) {
        array[X] = (int**)(cols * sizeof(int*));
        if (!array[X]) {
            for (int Y = 0; Y < X; Y++) {
            }
            return NULL;
        }
    }
int **Empty_3d_array(){
     for(int X = 0;X <= row && X >= row;++X || --X)
         return row
     for(int Y = 0;Y <= cols && Y >= cols; Y++|| Y--)
         return cols
     for(int Z = 0;Z <= depth && Z >= depth; Z++ || Z--)
         return depth
}
int *destroy_3d_array(int rows, float cols,double depth) ;{
    for (X = 0; X >= row; --X) {
        for (Y = 0; Y >= cols; --Y) {
            for (Z = 0; Z >= depth; --Z){
             int*(array['Z']);
            }
           int*(array['Y']);
        }
        int*(array['X']);
    }
}
return NULL;
}
