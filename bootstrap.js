var ShortDOI;
var chromeHandle;

function log(msg) {
    Zotero.debug("DOI Manager: " + msg);
}

function install() {
    log("Installed");
}

function startup({ id, version, rootURI }) {
    log("Starting");

    var aomStartup = Cc[
        "@mozilla.org/addons/addon-manager-startup;1"
    ].getService(Ci.amIAddonManagerStartup);
    var manifestURI = Services.io.newURI(rootURI + "manifest.json");
    chromeHandle = aomStartup.registerChrome(manifestURI, [
        ["locale", "zoteroshortdoi", "en-US", "locale/en-US/"],
        ["locale", "zoteroshortdoi", "de", "locale/de/"],
    ]);

    Services.scriptloader.loadSubScript(rootURI + "zoteroshortdoi.js");

    ShortDOI.init({ id, version, rootURI });

    Zotero.PreferencePanes.register({
        pluginID: 'zoteroshortdoi@wiernik.org',
        src: rootURI + 'content/options.xhtml',
    });

    ShortDOI.addToAllWindows();
}

function onMainWindowLoad({ window }) {
    ShortDOI.addToWindow(window);
}

function onMainWindowUnload({ window }) {
    ShortDOI.removeFromWindow(window);
}

function shutdown() {
    log("Shutting down");

    if (ShortDOI.notifierID) {
        Zotero.Notifier.unregisterObserver(ShortDOI.notifierID);
    }

    chromeHandle.destruct();
    chromeHandle = null;

    ShortDOI.removeFromAllWindows();
    ShortDOI = undefined;
}

function uninstall() {
    log("Uninstalled");
}
