function binarySearch(list, element) {

    function _binarySearch(list,element,first,mid,last){
        
        while(list[mid]===list[mid-1]){
             mid-=1;

        }
        if(element==list[mid]||list[first]==list[last]){
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
