import { Component, OnInit } from '@angular/core';
import { reverseBits } from './Bitwise/ReverseBinary';
import { maxResult } from './DP/JumpGameVI';
import { longestPalindrome } from './DP/longestPallindromicSubstring';
import { threeSum } from './HashMap/ThreeSum';
import { twoSum } from './HashMap/TwoSum';
import { minMoves2, minMovesmedian } from './Maths/MinimumMovesToEqualArrayElementsII';
import { largestNumber } from './Sorting/LargestNumber';
import { minDeletions } from './String/GoodString';
import { strStr } from './String/ImplementIndexOf';
import { romanToInt } from './String/RomanToInteger';
import { myAtoi, myAtoi2 } from './String/stringToIntegerAToI';
import { pivotIndex } from './Two-Pointers/BalanceInArray';
import { mergeSortRunner } from './Sorting/MergeSortRecursive';
import { quickSortRunner } from './Sorting/QuickSortRecursive';
import { Queue } from './Queue/Queue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'leetcode';

  ngOnInit(){
    // console.log(myAtoi2('42'));
    // console.log(myAtoi2('-42'));
    // console.log(myAtoi2('42 with words'));
    // console.log(myAtoi2('-42 with words'));
    // console.log(myAtoi2('       -42 with words'));
    // console.log(myAtoi2('-91283472332'));
    // console.log(myAtoi2('91283472332'));
    // console.log([-1,0,1,2,-1,-4].toString());
    // console.log(minMoves2([1,2,3]));
    // console.log(minMoves2([1,0,0,8,6]));
    //console.log(minMovesmedian([1,10,2,9]));

    let q = new Queue<number>(5);
  
    console.log('fin');
  }

  func1() {
    let a = [1,2,3,4,5,6];





    a.sort((x,y) => {
      if(x<y) {
        return -1;
      } else {
        return 1;
      }
    });

    console.log(a);
  }

  func2() {
    let a = [1,2,3,4,5,6];

    a.sort((x,y) => {
      return 1;
    });

    console.log(a);
  }

  func3() {
    let a = [1,2,3,4,5,6];

    a.sort((x,y) => {
      return -1;
    });

    console.log(a);
  }

  func4() {
    let a = [6,5,4,3,2,1];

    a.sort((x,y) => {
      if(x>y) {
        return -1;
      } else {
        return 1;
      }
    });

    console.log(a);
  }

  func5() {
    let a = [6,5,4,3,2,1];

    a.sort((x,y) => {
      return 1;
    });

    console.log(a);
  }

  func6() {
    let a = [6,5,4,3,2,1];

    a.sort((x,y) => {
      return -1;
    });

    console.log(a);
  }

  
}
