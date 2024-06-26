const formatDate = (date) => new Intl.DateTimeFormat('en-US', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);

export { formatDate };
