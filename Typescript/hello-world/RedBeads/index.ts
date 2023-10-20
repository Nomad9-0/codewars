export function countRedBeads(n: number): number {
    if (n == 0){
      return 0;
    }else{
      return (n-1)*2;
    }
  }