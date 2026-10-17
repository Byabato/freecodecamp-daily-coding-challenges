# Credit Card Masker

**Date:** 2026-10-17  
**Challenge:** freeCodeCamp Daily Coding Challenge  
**Language:** JavaScript  
**Topics:** strings, iteration, regular expressions, unit testing

## Problem

Given a string containing a credit card number, return a masked version in which every digit except the final four is replaced with an asterisk (`*`). Preserve the original separators and all other characters.

The challenge specifies four groups of four digits, separated by either a single space or a single hyphen (`-`).

## Example

Input:

```text
4012-8888-8888-1881
```

Output:

```text
****-****-****-1881
```

A space-separated number is also supported:

```text
Input:  4012 8888 8888 1881
Output: **** **** **** 1881
```

## Repository contents

- `solution.js` — implementation and explanation of the algorithm.
- `test.js` — automated tests using Node.js's built-in test runner.
- `package.json` — project metadata and test command.
- `.gitignore` — ignores common generated files.

## Approach

The implementation walks through the input from left to right and counts how many digits have been seen. It first counts the total digits. A digit is masked when fewer than four digits have been encountered from the end; separators and other non-digit characters are copied unchanged.

This approach focuses on digits rather than character positions, so spaces and hyphens do not affect which four digits remain visible.

## Complexity

For an input of `n` characters:

- **Time:** `O(n)` — the input is traversed a constant number of times.
- **Space:** `O(n)` — the output is built as a new string.

## Requirements

- Node.js 18 or newer is recommended.
- No third-party dependencies are required.

## Run the tests

From this folder:

```powershell
node --test
```

Or use the npm script:

```powershell
npm test
```

The tests cover the two supported separator styles, preservation of separators, visible suffixes, leading zeros, short strings, empty input, and non-string arguments.

## Scope and security note

This exercise transforms a string for a coding challenge. It does not validate whether a card number is genuine, perform payment-card verification, or replace appropriate payment-data security controls. Use fictional values in examples and tests; never commit real card details.

## Source

The challenge was presented in the freeCodeCamp Daily Coding Challenge mobile app. Refer to the original challenge for its exact wording and constraints.
