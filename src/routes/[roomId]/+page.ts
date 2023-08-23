/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    roomId: params.roomId,
  };
}
