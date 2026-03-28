# Zotero DOI Manager

This is an add-on for Zotero 7/8, a research source management tool. The add-on can auto-fetch DOI names for journal articles using the CrossRef API, as well as look up shortDOI names using http://shortdoi.org. The add-on additionally verifies that stored DOIs are valid and marks invalid DOIs.

Please report any bugs, questions, or feature requests on the Zotero forums.

Code for this extension is based in part on [Zotero Google Scholar Citations](https://github.com/beloglazov/zotero-scholar-citations) by Anton Beloglazov.

### Plugin Functions

  - Get shortDOIs: For the selected items, look up shortDOIs (replacing stored DOIs, if any) and mark invalid DOIs.
  - Get long DOIs: For the selected items, look up full DOIs (replacing stored DOIs, if any) and mark invalid DOIs.
  - Verify and clean DOIs: For the selected items, look up full DOIs (replacing stored DOIs, if any), verify that stored DOIs are valid, and mark invalid DOIs.
    - This function also removes unnecessary prefixes (such as `doi:`, `https://doi.org/`, or a publisher URL prefix) from the DOI field.

### Compatibility

  - **Zotero 7** and **Zotero 8** are supported.
  - For Zotero 6 support, use version 1.5.1 or earlier.

### How to Install

  - Download the `.xpi` file for the [latest release](https://github.com/bwiernik/zotero-shortdoi/releases/latest).
    - If you are using Firefox, be sure to right-click on the file link and choose Save Link As…
  - In Zotero, go to Tools → Add-Ons
  - Drag the downloaded `.xpi` file to the Add-Ons window.
    - Alternatively, click on the Gear ⚙ button in the Add-Ons window, choose Install Add-On from File…, and select the downloaded `.xpi` file.

### Building

Package the plugin as an XPI file:

```bash
zip -r zotero-doi-manager.xpi content/ locale/ skin/ bootstrap.js manifest.json prefs.js zoteroshortdoi.js
```

### License

Copyright (C) 2017 Brenton M. Wiernik

Distributed under the Mozilla Public License (MPL) Version 2.0.
