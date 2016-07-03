export const translatorReducer = (defaultLang="en") => {
  return (state=defaultLang, action) => {
  	switch (action.type) {
  		case 'LANGUAGE_CHANGED':
  			return action.lang;
  		default:
  			return state;
  	}
  }
}
