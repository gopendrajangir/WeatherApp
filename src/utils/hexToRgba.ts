function hexToRgba(hex: string, opacity: number): string {
  // Ensure hex is in the format #RRGGBB
  const validHex = hex.replace("#", "");
  if (validHex.length !== 6) {
    throw new Error("Only 6-digit hex colors are supported.");
  }

  const r = parseInt(validHex.slice(0, 2), 16);
  const g = parseInt(validHex.slice(2, 4), 16);
  const b = parseInt(validHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default hexToRgba;
