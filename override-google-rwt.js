currentURL = new URL(window.location.href)

if (currentURL.hostname.match(/\.google\.[^\.]+$/)) {
    window.wrappedJSObject.rwt = exportFunction(function() { }, window);
}
