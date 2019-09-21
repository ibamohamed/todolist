export function calculateDueFormat(date) {
  var date1 = new Date(date);
  var date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (date2 > date1) {
    diffDays = "Due passed " + diffDays + " days ago.";
  } else {
    diffDays = "Due in " + diffDays + " days.";
  }
  return diffDays;
}
