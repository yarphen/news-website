const keyMirror = obj => Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: key }), {});

export default keyMirror({
  CONTENT_REQUEST_START: 0,
  CONTENT_REQUEST_SUCCESS: 0,
  CONTENT_REQUEST_FAIL: 0,
  CONTENT_CLEAR: 0,
});
