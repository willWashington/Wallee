var prettylogger = (reqtype, texttolog) => {
  reqtype = reqtype.toUpperCase();
  console.log(`"[${reqtype} REQUEST] ${texttolog}"`);
};