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
import { numIslandsRunner } from './Graphs/NumberOfIslands';
import { segmentTreeRunner } from './Trees/SegmentTreeRunner';
import { searchRangeRunner } from './Search/FindFirstLastPositionOfArray';
import { longestValidParenthesesRunner } from './Stacks/LongestValidParentheses';
import { wordBreakRunner } from './DP/WordBreak';
import { executeSearchTreeRunner } from './M-Tree/SearchTextOccurenceInSubTrees';
import { brokenCalcRunner } from './Greedy/BrokenCalculator';
import { validPallindromeRunner } from './Greedy/ValidPallindrome';
import { removeDuplicateLettersRunner } from './Greedy/RemoveDuplicateLetters';
import { reversVowelsRunner } from './Two-Pointers/ReverseVowelsOfAString';
import { removeStarsFromStringRunner } from './String/RemovingStarsFromString';
import { implementingMonotonicStackRunner } from './Stacks/ImplementingMonotonicStack';
import { survivedRobotsHealthsRunner } from './Simulation/SurvivedRobotsHealths';
import { countOfAtomsRunner } from './String/NumberOfAtoms';
import { floodFillRunner } from './Array/FloodFill';
import { splitListToPartsRunner } from './LinkedList/SplitListToParts';
import { validMountainArrayRunner } from './Array/ValidMountainArray';
import { minimumBitFlipsRunner } from './Bitwise/MinimumBitFlips';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'leetcode';

  ngOnInit(){
    minimumBitFlipsRunner();
  }
  
}
