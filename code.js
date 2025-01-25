function binarySearch(list, element) {

    function _binarySearch(list,element,first,mid,last){
        
        while(list[mid]===list[mid-1]&&list.length!=0){
             mid-=1;

        }
        if((list[first]==list[last]&&list.length!=0)){
            return first;
        }
        else if(element==list[mid]){
            return mid;
        }
        else if(element<list[mid]){
            return _binarySearch(list,element,first,mid-1,last-1);
        }
        else if(element>list[mid]){
            return _binarySearch(list,element,first+1,mid+1,last);
        }
        else{
        return -1;
        }


    }
    return _binarySearch(list,element,0,Math.floor(list.length/2),list.length-1)

}
