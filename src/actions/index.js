// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH-MESSAGES';


export function fetchMessages(channel) {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
      return {
        type: FETCH_MESSAGES,
        payload: promise
      };
    }

