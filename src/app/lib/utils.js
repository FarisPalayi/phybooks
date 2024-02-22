function setCharLimit(str, limit) {
  return str.length > limit ? str.substring(0, limit) + '...' : str;
}

export { setCharLimit };
