/*

Write a program that can calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

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

  var differences = 0;

  for(var i = 0; i < strandA.length; i++) {
    if(strandA[i] !== strandB[i]) {
      differences++;
    }
  }

  return differences;
}


// Tests - do not change below this line
console.log('######### Test for hammingDistance("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"): ' + (hammingDistance("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT") === 7));
console.log('######### Test for hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTAATGACGCGAT"): ' + (hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTAATGACGCGAT") === 3));
console.log('######### Test for hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTACTAACGGGAT"): ' + (hammingDistance("GAGCCTACTAACGGGAT", "GAGCCTACTAACGGGAT") === 0));
