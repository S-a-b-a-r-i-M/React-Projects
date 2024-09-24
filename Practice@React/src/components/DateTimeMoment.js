

export const DateTimeMoment = () => {
 /**
 * Converts a local datetime(string or date object) to UTC
 * @param {string | object} localDT - Local datetime string in format "YYYY-MM-DDTHH:mm"
 * @returns {string} UTC datetime string
 */
  const convertToUTC = (localDT) => {
    // Ensure utcDT is a Date object
    if(typeof localDT === 'string')
      localDT = new Date(localDT)
    return localDT.toISOString()
  }

  /**
 * Converts a UTC datetime string to local timezone
 * @param {string | object} utcDT - UTC datetime string or date object
 * @param {string} [timezone] - Target timezone (optional, defaults to system timezone)
 * @returns {string} Formatted local datetime string
 */
  const convertToLocal = (utcDT, timezone) => {
    // Ensure utcDT is a Date object
    if(typeof utcDT === 'string')
      utcDT = new Date(utcDT)
    console.log(utcDT);
    
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timezone: timezone || Intl.DateTimeFormat().resolvedOptions().timeZone    
    }

    let localDT = Intl.DateTimeFormat('en-US', options).format(utcDT)
    console.log(localDT)
    
    // Regular expression to match 'date/month/year, hour:minute'
    const regex = /(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}):(\d{2}):(\d{2})/;

    // Extract date and time components
    const match = localDT.match(regex);

    if (!match) {
      throw new Error('Invalid input format. Expected "dd/mm/yyyy, HH:MM"');
    }

    // Destructure matched groups
    const [, day, month, year, hour, minute, sec] = match;
    console.log(`${year}-${month}-${day}T${hour}:${minute}:${sec}`);
    
    return localDT
  }
  
  // console.log(convertToUTC(new Date()))
  console.log(convertToLocal('2024-08-30T05:30:31.448Z'))
  let lclDT = convertToLocal('2024-08-30T00:00:00.448Z')
  console.log(lclDT)
  console.log(convertToUTC(lclDT))
}