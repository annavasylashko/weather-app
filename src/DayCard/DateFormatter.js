export default class DateFormatter {
  static monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  static dayNames = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ]

  static formatDate(date) {
    let dayOfWeek = this.dayNames[date.getDay()]
    let month = this.monthNames[date.getMonth() + 1]
    let year = date.getFullYear()
    let dayOfMonth = date.getDate()

    return `${dayOfWeek} ${dayOfMonth} ${month} ${year}`
  }
}
