const loadRemote = async (scope, module) => {
  await __webpack_init_sharing__('default');
  const container = window[scope];
  if (!container) throw new Error(`Remote container ${scope} no está disponible`);
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  return factory();
}

export default loadRemote;