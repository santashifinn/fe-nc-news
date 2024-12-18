const prettyTimestamp = (isoTimestamp) => {
  const time = isoTimestamp.split("T")[1].slice(0, 5);
  const day = isoTimestamp.split("-")[2].split("T")[0];
  const month = isoTimestamp.split("-")[1];
  const year = isoTimestamp.split("-")[0];
  return [time, " @ ", day, "/", month, "/", year];
};

export { prettyTimestamp };
