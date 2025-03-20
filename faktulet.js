function fakultet(n) {
    if (n < 0) return "Ugyldig input"; // Fakultet er ikke definert for negative tall
    if (n === 0 || n === 1) return 1;
    return n * fakultet(n - 1);
}

// Test
console.log(fakultet(5)); // Output: 120
