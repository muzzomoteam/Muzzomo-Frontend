// Via https://gist.github.com/renancouto/4675192

/**
 * Lightens the given hex code value by the percentage provided
 * @param colourHex The hex colour code of the colour to be darkened
 * @param percentage The percentage to lighten by. Providing a negative percentage will darken the colour
 * @returns The hex code representing the lightened colour
 */
function lightenColour(colourHex: string, percentage: number): string {
  const num = parseInt(colourHex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percentage);
  const R = (num >> 16) + amt;
  const B = ((num >> 8) & 0x00ff) + amt;
  const G = (num & 0x0000ff) + amt;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

export default lightenColour;
