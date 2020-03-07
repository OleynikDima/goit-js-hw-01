'use script'
  const checkForSpam = function(message) {
        let lowMessage = message.toLowerCase();
        let newMessage = lowMessage.split(/\b/);
        for (let i = 0; i < newMessage.length; i ++){
                if (newMessage[i] === 'spam' || newMessage[i] === 'sale')
                return true;
            }
            return false;
  };

  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true