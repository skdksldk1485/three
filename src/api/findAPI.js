import axios from 'axios';

  export const findData = async () => {
    const url = `https://script.googleusercontent.com/macros/echo?user_content_key=dhVrcZW_oCJ3fV9UNQFL2PHGUMRd8S6od3wNeOQ75KOJdW0MyWxJLRYUupcVqw6IR2SqkwJHO7cVKV5CsYzQSijOo23IMzBOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA`;
    const response = await axios.get(url);
    
    const locations = response.data;
    
    return locations;
  };