function getTimeZone(countryCode) {
    const date = new Date().toLocaleString('en-US', { timeZone: countryCode });
    return date.split(', ')[1];
  }
  
  function updateSpecificTimeZone(zoneId, countryCode) {
    const timeZone = getTimeZone(countryCode);
    document.getElementById(zoneId).innerText = `Time Zone: ${timeZone}`;
  }
  
  document.getElementById('btn1').addEventListener('click', function() {
    updateSpecificTimeZone('timeZone1', 'America/New_York');
  });
  
  document.getElementById('btn2').addEventListener('click', function() {
    updateSpecificTimeZone('timeZone2', 'Europe/London');
  });
  
  document.getElementById('btn3').addEventListener('click', function() {
    updateSpecificTimeZone('timeZone3', 'Asia/Tokyo');
  });
  
  document.getElementById('btn4').addEventListener('click', function() {
    updateSpecificTimeZone('timeZone4', 'Australia/Sydney');
  });
  
  document.getElementById('btn5').addEventListener('click', function() {
    updateSpecificTimeZone('timeZone5', 'Africa/Cairo');
  });

  
  