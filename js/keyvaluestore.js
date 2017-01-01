KeyValueStore = (function () {
  'use strict';

  function clear() {
    GM_deleteValue(this.cacheKey);
  }

  function getItem(key) {
    return GM_getValue(this.cacheKey, {})[key];
  }

  function setItem(key, data) {
      var store = GM_getValue(this.cacheKey, {});
      store[key] = data;
      GM_setValue(this.cacheKey, store);
  }

  function delItem(key) {
      var store = GM_getValue(this.cacheKey, {});
      store[key] = null;
      delete store[key];
      GM_setValue(this.cacheKey, store);
  }

  function KeyValueStore(cacheKey) {
     if (!cacheKey) throw new Error('StoreType permanent requires a cacheKey');
     this.cacheKey = cacheKey;
  }

  KeyValueStore.prototype.clear = clear;
  KeyValueStore.prototype.getItem = getItem;
  KeyValueStore.prototype.setItem = setItem;
  KeyValueStore.prototype.delItem = delItem;

  return KeyValueStore;

})();
