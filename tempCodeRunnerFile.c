#include<stdio.h>
void printarr(int *arr,int n){
    for(int i=0;i<n;i++){
        printf("%d  ",arr[i]);
    }
    printf("\n");
}
void merge(int *arr,int mid,int low ,int high){
    int i=low;
    int j=mid+1;
    int k=low,b[100];
    while(i<=mid&&j<=high){
        if(arr[i]<arr[j]){
            b[k]=arr[i];
            i++;
            k++;
        }
        else{
            b[k]=arr[j];
            j++;
            k++;
            }
             }
            while(i<=mid){
                b[k]=arr[i];
                i++;
                k++;
            }
            while(j<=high){
                b[k]=arr[j];
                k++;
                j++;
            }
        for(int i=0;i<=high;i++){
            arr[i]=b[i];

        }
}
void mergesort(int *arr,int low ,int high){
     int mid;
    if(low<high){
        mid=(low+high)/2;
        mergesort(arr,low,mid);
        mergesort(arr,mid+1,high);
        merge(arr,mid,low,high);

    }
}
int main(){
int n;
printf("Enter a number for element: ");
scanf("%d",&n);
int arr[n];
printf("Enter element : ");
for(int i=0;i<n;i++){
    scanf("%d",&arr[i]);
}
printarr(arr,n);
mergesort(arr,0,n-1);
printarr(arr,n);
return 0;
}