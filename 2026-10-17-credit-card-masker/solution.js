'use strict';

/**
 * Mask every digit in a card-number string except its final four digits.
 *
 * Non-digit characters (including spaces and hyphens) are preserved exactly
 * as supplied. The challenge's expected input is four groups of four digits,
 * separated by a single space or a single hyphen.
 *
 * @param {string} card - The card-number string to mask.
 * @returns {string} The masked string.
 * @throws {TypeError} If card is not a string.
 */
function mask(card) {
    if (typeof card !== 'string') {
        throw new TypeError('Expected card to be a string.');
    }

    // Count digits, not characters: separators must not affect the count.
    const totalDigits = (card.match(/[0-9]/g) || []).length;

    let digitsSeen = 0;
    let result = '';

    for (const char of card) {
        if (/[0-9]/.test(char)) {
            digitsSeen += 1;

            // Keep only the final four digits visible.
            result += digitsSeen <= totalDigits - 4 ? '*' : char;
        } else {
            // Preserve separators and any other non-digit characters.
            result += char;
        }
    }

    return result;
}

module.exports = mask;
