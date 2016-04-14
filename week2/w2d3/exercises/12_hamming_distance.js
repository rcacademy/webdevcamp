/*

Write a program that can calculate the Hamming difference between two DNA strands.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

The strand lengths will always be the same.

*/

function hammingDistance(strandA, strandB) {

  //your code here

}


// Tests - do not change below this line
console.log('######### Test for hammingDistance("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"): ' + (hammingDistance("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT") === 7));
console.log('######### Test for hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTAATGACGCGAT"): ' + (hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTAATGACGCGAT") === 3));
console.log('######### Test for hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTACTAACGGGAT"): ' + (hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTACTAACGGGAT") === 0));
