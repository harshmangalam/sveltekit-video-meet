import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each, g as add_classes, e as escape } from './ssr-196a6422.js';

const Themes_dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const themes = [
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "halloween",
    "garden",
    "forest",
    "lofi",
    "fantasy",
    "luxury",
    "dracula",
    "business",
    "acid",
    "lemonade"
  ];
  let currentTheme = "corporate";
  return `<details class="dropdown dropdown-end"><summary class="m-1 btn btn-square btn-ghost" data-svelte-h="svelte-qwk3nn"><iconify-icon${add_attribute("width", 24, 0)}${add_attribute("height", 24, 0)} icon="fluent:dark-theme-24-regular"></iconify-icon></summary> <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">${each(themes, (theme) => {
    return `<li><button${add_classes((currentTheme === theme ? "active" : "").trim())}>${escape(theme)}</button> </li>`;
  })}</ul></details>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar bg-base-200"><div class="flex justify-between flex-1 max-w-7xl mx-auto"><h1 class="text-2xl font-medium" data-svelte-h="svelte-ulk1zk">Svelte Meet</h1> <div class="flex items-center">${validate_component(Themes_dropdown, "ThemesDropdown").$$render($$result, {}, {}, {})} <a title="Github repo" href="https://github.com/harshmangalam/sveltekit-video-meet" target="_blank" class="btn btn-square btn-ghost" data-svelte-h="svelte-1q836jh"><iconify-icon${add_attribute("width", 24, 0)}${add_attribute("height", 24, 0)} icon="fa:github"></iconify-icon></a></div></div></nav>`;
});
const Create_room = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const id = crypto.randomUUID();
  return `<a${add_attribute("href", id, 0)} title="Create room" class="btn btn-primary w-full sm:col-span-2"><iconify-icon${add_attribute("width", 24, 0)}${add_attribute("height", 24, 0)} icon="material-symbols:video-call-outline-sharp"></iconify-icon>
  New meeting</a>`;
});
const Hero_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 749.46727 551.45123" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M689.13834,617.63664H248.86971a18.30678,18.30678,0,0,1-18.286-18.286V283.48421a18.30678,18.30678,0,0,1,18.286-18.286H689.13834a18.30678,18.30678,0,0,1,18.286,18.286V599.35066A18.30678,18.30678,0,0,1,689.13834,617.63664ZM248.86971,274.82243a8.67186,8.67186,0,0,0-8.66178,8.66178V599.35066a8.67156,8.67156,0,0,0,8.66178,8.66178H689.13834a8.67155,8.67155,0,0,0,8.66178-8.66178V283.48421a8.67186,8.67186,0,0,0-8.66178-8.66178Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-primary"></path><circle cx="234.3806" cy="516.02819" r="35.42303" fill="currentColor" class="fill-primary"></circle><circle cx="234.3806" cy="516.0282" r="27.15766" fill="currentColor" class="fill-primary"></circle><path d="M473.25209,705.13519a1.23083,1.23083,0,0,1-.87436-.3626L445.16414,677.559a1.237,1.237,0,0,1,1.74879-1.74877l27.21359,27.21359a1.237,1.237,0,0,1-.87436,2.11137Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-primary-content"></path><path d="M475.0061,692.92021a2.48948,2.48948,0,0,0-.00774-2.68734,26.20347,26.20347,0,0,0-7.6747-7.7721,19.44719,19.44719,0,0,0-10.51049-3.25247,17.514,17.514,0,0,0-5.55249.91148.30927.30927,0,0,0-.1206.51258l3.65221,3.65218a.31363.31363,0,0,0,.29729.08073,7.42186,7.42186,0,0,1,8.96613,5.45406l.00876.03636a16.30714,16.30714,0,0,0,4.16219,7.8655l1.16352,1.16439a.31021.31021,0,0,0,.4185.01769A26.58049,26.58049,0,0,0,475.0061,692.92021Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-primary-content"></path><path d="M462.33566,696.03561a7.42186,7.42186,0,0,1-7.42232-7.42141q0-.00972,0-.01944a4.905,4.905,0,0,0-1.36869-3.52249l-3.67083-3.67248a.31.31,0,0,0-.42044-.01588,30.91235,30.91235,0,0,0-5.22947,5.85211,2.46774,2.46774,0,0,0-.04948,2.74764,25.8224,25.8224,0,0,0,7.59816,7.78137,19.15833,19.15833,0,0,0,10.5383,3.21845,18.41623,18.41623,0,0,0,5.6159-.89294.30922.30922,0,0,0,.12446-.51334l-3.67-3.66919a.3114.3114,0,0,0-.29551-.081A7.41852,7.41852,0,0,1,462.33566,696.03561Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-primary-content"></path><circle cx="99.98146" cy="516.02819" r="35.42304" fill="currentColor" class="fill-secondary"></circle><circle cx="99.98146" cy="516.0282" r="27.15766" fill="currentColor" class="fill-secondary-focus"></circle><path d="M335.6808,707.61982c-1.5091,0-3.629-.54583-6.80339-2.3193a44.23426,44.23426,0,0,1-10.6852-7.99246,40.54811,40.54811,0,0,1-8.02415-10.68213c-2.84813-5.17984-2.36264-7.895-1.81991-9.05545a7.2283,7.2283,0,0,1,2.83347-3.0399,13.62948,13.62948,0,0,1,2.2142-1.17513c.07733-.03325.14922-.06493.21339-.09355a2.06921,2.06921,0,0,1,1.697-.15462,4.97118,4.97118,0,0,1,1.61272,1.237,26.8038,26.8038,0,0,1,4.03256,5.98621,5.96366,5.96366,0,0,1,.79089,2.45155,3.87421,3.87421,0,0,1-.98571,2.30467c-.10127.13837-.2018.27058-.29919.39891-.58836.77312-.71746.99654-.63241,1.39549.17241.80173,2.785,1.49851,4.89788,3.60681s3.10384,5.00261,3.90866,5.17424c.41592.08891.644-.04563,1.44186-.65482.1144-.08734.23192-.17783.35485-.26823a3.895,3.895,0,0,1,2.33944-1.0468h.00463a5.60233,5.60233,0,0,1,2.46312.86424,29.53289,29.53289,0,0,1,5.96376,4.00318,4.969,4.969,0,0,1,1.24082,1.60887,2.0855,2.0855,0,0,1-.15463,1.70084c-.0286.06417-.0603.13455-.09355.21262a13.64457,13.64457,0,0,1-1.18208,2.20955,7.22977,7.22977,0,0,1-3.04452,2.82805A5.212,5.212,0,0,1,335.6808,707.61982Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-secondary-content"></path><circle cx="369.82162" cy="516.02819" r="35.42304" fill="currentColor" class="fill-success"></circle><circle cx="369.82163" cy="516.0282" r="27.15767" fill="currentColor" class="fill-success"></circle><path d="M604.98388,685.231a1.237,1.237,0,0,0-1.237,1.237v2.474c0,4.78217-3.87677,6.18494-8.65894,6.18494-4.7821,0-8.65881-1.40277-8.65881-6.18494v-2.474a1.237,1.237,0,1,0-2.474,0v2.474a11.14386,11.14386,0,0,0,9.89587,11.0589v5.02191a1.237,1.237,0,0,0,1.23694,1.23694h.00018a1.237,1.237,0,0,0,1.23688-1.237v-5.02185a11.144,11.144,0,0,0,9.89588-11.0589v-2.474A1.237,1.237,0,0,0,604.98388,685.231Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-success-content"></path><path d="M595.088,691.62681a9.276,9.276,0,0,1-4.37194-.99954,2.90873,2.90873,0,0,1-1.81294-2.35993v-4.60369c-.01326-1.82534,2.73429-3.31088,6.13683-3.318h0c.016,0,.03206,0,.048,0,3.37932-.0196,6.14839,1.43413,6.18492,3.247q.00071.03549,0,.071v4.60372C601.29,690.11037,598.52338,691.61312,595.088,691.62681Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-success-content"></path><path d="M689.13834,613.30575H248.86971a13.97116,13.97116,0,0,1-13.95509-13.95509V283.48421a13.97116,13.97116,0,0,1,13.95509-13.95509H689.13834a13.97116,13.97116,0,0,1,13.95509,13.95509V599.35066A13.97116,13.97116,0,0,1,689.13834,613.30575Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-base-100"></path><circle id="bc830966-b266-4f4f-8d3f-80253a76a671" data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b" cx="241.58248" cy="244.40599" r="46.60136" fill="#9e616a"></circle><path id="b07e6ca0-7838-4b10-83c0-af225f768a0c-46" data-name="bf427902-b9bf-4946-b5d7-5c1c7e04535e" d="M414.86364,373.8495c.35234-5.35152,3.89138-10.82772,15.13541-13.6893,0,0,19.29674-24.67547,45.51878-11.73532,0,0,12.71234-2.18707,22.13883,11.00245,0,0,9.34585-5.512,13.28893,4.258,0,0,10.96112,19.92861,6.92574,40.25581s-6.10093,22.864-6.10093,22.864,5.14371-42.04642-24.48265-39.13087-53.47845-7.50309-60.18764,15.30815c-5.571,18.94156-4.86926,28.77892-4.86926,28.77892s-18.6298-18.89583-12.29563-33.7749C413.17489,390.3764,414.32027,382.10256,414.86364,373.8495Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-neutral"></path><path d="M340.12148,612.82413H597.8864c-1.72271-19.66224-2.84873-34.291-2.84873-39.23789,0-21.818-17.85288-45.62831-17.85288-45.62831l-6.39048-3.53212L517.42811,507.776,503.6174,489.83643a15.35712,15.35712,0,0,0-12.29975-6.00549l-43.62652.32725a15.40368,15.40368,0,0,0-10.346,4.09992L410.33,513.3195l-39.62287,18.92116-.06738-.06732-.41383.30792-5.88037,4.23467-3.78231,2.7333s-9.92254,11.90513-17.85288,47.61089C341.517,592.43044,340.67964,601.41941,340.12148,612.82413Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-primary"></path><path d="M928.53762,633.28863H781.61771a18.30678,18.30678,0,0,1-18.286-18.286V514.37571a18.30678,18.30678,0,0,1,18.286-18.286H928.53762a18.30678,18.30678,0,0,1,18.286,18.286V615.00265A18.30678,18.30678,0,0,1,928.53762,633.28863ZM781.61771,505.71393a8.67186,8.67186,0,0,0-8.66178,8.66178V615.00265a8.67186,8.67186,0,0,0,8.66178,8.66178H928.53762a8.67186,8.67186,0,0,0,8.66178-8.66178V514.37571a8.67186,8.67186,0,0,0-8.66178-8.66178Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-success"></path><path d="M928.53755,628.95784H781.61765a13.97116,13.97116,0,0,1-13.95509-13.95509V514.37535a13.97116,13.97116,0,0,1,13.95509-13.9551h146.9199a13.97116,13.97116,0,0,1,13.95509,13.9551v100.6274A13.97116,13.97116,0,0,1,928.53755,628.95784Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-base-100"></path><path d="M868.85464,533.17655c.84958-5.29866-1.55382-9.20009-7.92563-11.40225-6.33826-5.4999-15.70611-6.81906-21.329,1.98975a8.82323,8.82323,0,0,0-9.30059,7.90337c-5.16455,6.003.57014,28.03618,2.2693,36.43139l9.06592-.08946,18.09818-.17881,9.12184-.08946,3.47656-19.68567C874.444,542.33187,873.58333,537.31265,868.85464,533.17655Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-neutral"></path><path d="M901.77594,616.05443a43.68017,43.68017,0,0,1,7.48965-3.82307l-25.7781-30.60724-17.03631-4.35979q-.20944-.11763-.41466-.24125l-28.73926,1.102-.12294-.123L819.0537,586.8668l-25.77811,29.80242a43.37632,43.37632,0,0,1,7.29975,3.689l-2.66052,10.11675h18.44482l4.90743-7.132h.2459c0-.12294.01122-.24595.01122-.3689l3.44313-5.00806c.07806,4.0467-.03355,8.21635-.313,12.50894h57.36891c-.08941-3.566-.11179-7.10972-.11179-10.63091l6.41657,9.31187c.48062-.70425.99478-1.36386,1.50906-2.03457l1.26318,3.35361H905.789l-3.52132-13.39206A3.1321,3.1321,0,0,0,901.77594,616.05443Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-success"></path><path d="M928.53762,401.38434H781.61771a18.30679,18.30679,0,0,1-18.286-18.286V282.47142a18.30678,18.30678,0,0,1,18.286-18.286H928.53762a18.30678,18.30678,0,0,1,18.286,18.286V383.09835A18.30679,18.30679,0,0,1,928.53762,401.38434ZM781.61771,273.80964a8.67186,8.67186,0,0,0-8.66178,8.66178V383.09835a8.67186,8.67186,0,0,0,8.66178,8.66179H928.53762a8.67186,8.67186,0,0,0,8.66178-8.66179V282.47142a8.67186,8.67186,0,0,0-8.66178-8.66178Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-error"></path><path d="M928.53762,397.05345H781.61771a13.97116,13.97116,0,0,1-13.95509-13.9551V282.47142a13.97116,13.97116,0,0,1,13.95509-13.95509H928.53762a13.97116,13.97116,0,0,1,13.95509,13.95509V383.09835A13.97116,13.97116,0,0,1,928.53762,397.05345Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-base-100"></path><path d="M836.52071,318.13124a19.33349,19.33349,0,0,0,37.8134,3.47626c.62636-.65226,7.56467-8.06725,5.05341-13.96636a30.52085,30.52085,0,0,1-2.04549-10.01777c-.14621-2.22108-1.615-4.4939-6.28175-5.68159,0,0-8.00893-10.24128-18.89214-4.87061,0,0-5.2761-.90773-9.18845,4.56644,0,0-3.87888-2.28768-5.51541,1.76724,0,0-4.5493,8.27115-2.87446,16.70777A72.67112,72.67112,0,0,0,836.52071,318.13124Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-neutral"></path><path d="M907.28848,388.11414c-3.2914-14.81929-7.40964-19.76039-7.40964-19.76039l-1.56981-1.13441-2.44059-1.75755-.17176-.12782-.028.028-16.445-7.853-11.21233-10.40146a6.39332,6.39332,0,0,0-4.294-1.70163L845.6106,345.27a6.37373,6.37373,0,0,0-5.10487,2.49252l-5.732,7.4456-22.149,6.91034-2.6523,1.46595s-7.40965,9.8822-7.40965,18.93754c0,2.05319-.46734,8.12471-1.18234,16.28531H908.363A72.96644,72.96644,0,0,0,907.28848,388.11414Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-error"></path><path d="M836.83006,537.277H644.747A23.93427,23.93427,0,0,1,620.84,513.37V381.81035A23.93427,23.93427,0,0,1,644.747,357.90327h192.083a23.93427,23.93427,0,0,1,23.90708,23.90708V513.37A23.93427,23.93427,0,0,1,836.83006,537.277ZM644.747,370.48594a11.33758,11.33758,0,0,0-11.32441,11.32441V513.37a11.33758,11.33758,0,0,0,11.32441,11.3244h192.083A11.33758,11.33758,0,0,0,848.15447,513.37V381.81035a11.33758,11.33758,0,0,0-11.32441-11.32441Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-secondary"></path><path d="M836.82767,363.56417h-192.08a18.27463,18.27463,0,0,0-18.25,18.25v131.56a18.26608,18.26608,0,0,0,18.25,18.24h192.08a18.26608,18.26608,0,0,0,18.25-18.24v-131.56A18.27464,18.27464,0,0,0,836.82767,363.56417Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-base-100"></path><circle cx="549.31288" cy="229.28817" r="15" fill="currentColor" class="fill-secondary"></circle><circle cx="518.49782" cy="257.26015" r="38" fill="currentColor" class="fill-neutral"></circle><circle cx="511.8955" cy="266.69167" r="30.87929" fill="#9e616a"></circle><path d="M725.52085,402.51055a35.37124,35.37124,0,0,1,45.78327,41.81839c-16.21706.43678-33.00918-.2045-48.07787-9.73565l-1.76039-10.32769-4.3895,8.96589c-5.44179.92827-10.82666,1.53991-14.98514-3.35685A36.11606,36.11606,0,0,1,725.52085,402.51055Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-neutral"></path><path d="M797.06025,366.85127c11.15808-2.38821,23.37663,2.6183,30.18628,11.77446,6.80971,9.15616,8.1799,21.89564,4.0993,32.55186-4.16275,10.871-13.1513,19.02926-21.55565,27.08366-8.4044,8.05434-16.86528,17.0468-19.38791,28.41086a31.6667,31.6667,0,0,0,23.97124,37.75876c-10.5257,1.99661-21.48953,3.98079-31.82631,1.165-10.33685-2.81576-19.79059-11.96867-19.1975-22.66567.4273-7.70761,5.68863-14.14491,10.26541-20.36126a156.36449,156.36449,0,0,0,18.48422-32.73862c2.3007-5.54451,4.3129-11.464,3.667-17.432A20.91621,20.91621,0,0,0,778.467,394.485l-2.76019-3.8736C776.62755,379.2377,785.90213,369.2394,797.06025,366.85127Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-neutral"></path><path d="M808.00766,530.76418c-2-20.38-13.3-19.58-13.3-19.58l-29.84-5.83-13.06994-21.7-32.81006-1.28-11.68,20.48-24,3-.02.34c-2.38.18-10.96,2.06-12.68,19.57-.16,1.61-.38,3.57995-.66,5.85h138.15C808.06766,531.31417,808.03769,531.03414,808.00766,530.76418Z" transform="translate(-225.26637 -174.27438)" fill="currentColor" class="fill-secondary"></path></svg>`;
});
const Join_room = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roomId;
  return `<div class="${["w-full sm:col-span-3", ""].join(" ").trim()}"><input type="text" aria-label="Enter code and join meet" placeholder="Enter code and join meet" name="roomId" class="input input-bordered join-item focus:outline-0 w-full lg:max-w-xs"${add_attribute("value", roomId, 0)}> ${``}</div>`;
});
const Hero_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="hero bg-base-100 py-10"><div class="hero-content justify-between max-w-7xl w-full flex-col lg:flex-row-reverse"><div class="max-w-lg w-full mb-24 lg:mb-0">${validate_component(Hero_svg, "HeroSvg").$$render($$result, {}, {}, {})}</div> <div><div class="text-3xl sm:text-4xl md:text-5xl text-center lg:text-start" data-svelte-h="svelte-1wxem0f"><h1>Open source video meetings.</h1></div> <p class="py-6 text-lg text-center lg:text-start max-w-xl" data-svelte-h="svelte-cerhia">An open source and free to use one-to-one private video calling web app
        build with sveltekit. Build on top of browser webrtc peer-to-peer
        communication.</p> <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-6 lg:mt-0">${validate_component(Create_room, "CreateRoom").$$render($$result, {}, {}, {})} ${validate_component(Join_room, "JoinRoom").$$render($$result, {}, {}, {})}</div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-u58c3f_START -->${$$result.title = `<title>Svelte Meet</title>`, ""}<!-- HEAD_svelte-u58c3f_END -->`, ""} <div class="min-h-screen bg-base-100">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Hero_section, "HeroSection").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4ec69a4e.js.map
