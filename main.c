#include <stdio.h>
int main()
{
int a[10][10], first[10][10], second[10][10], third[10][10], r, c, i, j;
int type;

printf("Enter the number of rows and columns: ");
scanf("%d %d", &r,&c);
printf("\nEnter elements of matrix:\n");
for(i=0; i<r; ++i)
    for(j=0; j<c; ++j)
    {
        printf("Enter element a%d%d: ",i+1, j+1);
        scanf("%d", &a[i][j]);
    }
printf("The entered matrix is\n \n");

    for(i=0; i<r; ++i)
    for(j=0; j<c; ++j)
    {
        printf("%d   ",a[i][j]);
        if(j==c-1)
            printf("\n");
    }
    for(i=0; i<r; ++i)
    for(j=0; j<c; ++j)
    {
        first[j][i] = a[i][j];
    }
printf("After single rotation \n");
for(i=0; i<c; ++i)
    for(j=0; j<r; ++j)
    {
        printf("%d   ",first[i][(r-1)-j]);
        if(j==r-1)
            printf("\n");
    }
  for(i=0; i<c; ++i)
    for(j=0; j<r; ++j)
    {
        second[j][i] = first[i][(r-1)-j];
    }
printf("After second rotation \n");
for(i=0; i<r; ++i)
    for(j=0; j<c; ++j)
    {
        printf("%d   ",second[i][(c-1)-j]);
        if(j==c-1)
            printf("\n");
    }
  for(i=0; i<r; ++i)
    for(j=0; j<c; ++j)
    {
        third[j][i] = second[i][(c-1)-j];
    }
printf("After third rotation \n");
for(i=0; i<c; ++i)
    for(j=0; j<r; ++j)
    {
        printf("%d   ",third[i][(r-1)-j]);
        if(j==r-1)
            printf("\n");
    }
return 0;
}