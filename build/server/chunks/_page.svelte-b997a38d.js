import { c as create_ssr_component, o as onDestroy, e as escape, v as validate_component, h as createEventDispatcher, d as add_attribute, f as each, b as subscribe } from './ssr-196a6422.js';
import 'socket.io-client';
import { p as page } from './stores-3d2c41e7.js';

const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stream } = $$props;
  let { user } = $$props;
  let { isCurrentUser = false } = $$props;
  if ($$props.stream === void 0 && $$bindings.stream && stream !== void 0)
    $$bindings.stream(stream);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.isCurrentUser === void 0 && $$bindings.isCurrentUser && isCurrentUser !== void 0)
    $$bindings.isCurrentUser(isCurrentUser);
  return `${stream ? `<div class="card rounded-md"><video class="w-full h-full rounded-md" autoplay playsinline ${""} data-svelte-h="svelte-14qxm97"><track kind="captions"></video> <div class="card-body p-0">${user ? `<div class="absolute right-0 text-sm left-0 bottom-0 h-8 backdrop-blur-sm flex items-center text-white px-2 rounded-b-md">${isCurrentUser ? `You` : `Remote`}</div>` : ``}</div></div>` : ``}`;
});
const Remote_users_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let dialogRef;
  let { users = [] } = $$props;
  let { room } = $$props;
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  if ($$props.room === void 0 && $$bindings.room && room !== void 0)
    $$bindings.room(room);
  return `<button class="btn btn-circle relative"><iconify-icon${add_attribute("width", 24, 0)}${add_attribute("height", 24, 0)} icon="ph:users-bold"></iconify-icon> <div class="badge badge-error rounded-full absolute -top-2 -right-2">${escape(users.length)}</div></button> <dialog class="modal"${add_attribute("this", dialogRef, 0)}><form method="dialog" class="modal-box relative"><div class="absolute right-4 top-4" data-svelte-h="svelte-1med736"><button class="btn btn-circle btn-ghost"><iconify-icon${add_attribute("width", 24, 0)}${add_attribute("height", 24, 0)} icon="material-symbols:close"></iconify-icon></button></div> <h3 class="font-bold text-lg mb-4" data-svelte-h="svelte-n8vndd">Remote Users</h3> <ul class="flex flex-col divide-y">${users.length === 0 ? `<div class="text-center flex flex-col gap-2 min-h-[200px] justify-center"><h6 class="text-xl" data-svelte-h="svelte-r4jvu4">No Users</h6> <p class="opacity-60">No one has connected yet in room: ${escape(room)}</p></div>` : ``} ${each(users, (user) => {
    return `<li class="py-2 px-4 hover:bg-base-200 rounded-md"><div class="card w-full"><div class="card-body p-0"><div class="flex items-center gap-2 justify-between"><div class="flex items-center gap-2"><iconify-icon${add_attribute("width", 24, 0)}${add_attribute("height", 24, 0)} icon="solar:user-broken"></iconify-icon> <h6 class="font-semibold text-sm">${escape(user)}</h6></div> <div><button class="btn btn-circle btn-primary btn-sm" title="Call" data-svelte-h="svelte-1q1hd91"><iconify-icon${add_attribute("width", 18, 0)}${add_attribute("height", 18, 0)} icon="subway:call-2"></iconify-icon></button> </div></div> </div></div> </li>`;
  })}</ul></form></dialog>`;
});
const Room_info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let link = $page.url.href;
  $$unsubscribe_page();
  return `${`<div class="toast toast-top toast-start z-10"><div class="alert shadow-lg"><iconify-icon${add_attribute("width", 32, 0)}${add_attribute("height", 32, 0)} icon="solar:copy-linear"></iconify-icon> <div><h3 class="font-bold" data-svelte-h="svelte-cnqzx9">Copy &amp; send joining link</h3> <div class="text-sm max-w-xs w-full truncate">${escape(link)}</div></div> <div class="flex items-center gap-2"><button class="btn rounded-full btn-sm btn-neutral" data-svelte-h="svelte-bxhf7m">Copy</button> <button class="btn rounded-full btn-sm btn-error" data-svelte-h="svelte-xz4c7r">Close</button></div></div></div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let connectedUsers;
  let { data } = $$props;
  let users = [];
  let remoteUser;
  let currentUser;
  let userStream;
  let remoteStream;
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  connectedUsers = users.filter((user) => user !== currentUser);
  return `${$$result.head += `<!-- HEAD_svelte-1gfycd0_START -->${$$result.title = `<title>
    Room | ${escape(data.roomId)} </title>`, ""}<!-- HEAD_svelte-1gfycd0_END -->`, ""} ${validate_component(Room_info, "RoomInfo").$$render($$result, {}, {}, {})} <div class="pb-4 flex justify-end gap-2">${validate_component(Remote_users_modal, "RemoteUsersModal").$$render($$result, { users: connectedUsers, room: data.roomId }, {}, {})}</div>  ${``} <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${validate_component(Video, "Video").$$render(
    $$result,
    {
      isCurrentUser: true,
      user: currentUser,
      stream: userStream
    },
    {},
    {}
  )} ${validate_component(Video, "Video").$$render($$result, { user: remoteUser, stream: remoteStream }, {}, {})}</div> ${``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b997a38d.js.map
