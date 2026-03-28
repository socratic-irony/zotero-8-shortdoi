# Zotero DOI Manager

This is an add-on for Zotero 7+, a research source management tool. The add-on can auto-fetch DOI names for journal articles using the CrossRef API, as well as look up shortDOI names using http://shortdoi.org. The add-on additionally verifies that stored DOIs are valid and marks invalid DOIs.

Please report any bugs, questions, or feature requests on the Zotero forums.

Code for this extension is based in part on [Zotero Google Scholar Citations](https://github.com/beloglazov/zotero-scholar-citations) by Anton Beloglazov.

### Plugin Functions

  - Get shortDOIs: For the selected items, look up shortDOIs (replacing stored DOIs, if any) and mark invalid DOIs.
  - Get long DOIs: For the selected items, look up full DOIs (replacing stored DOIs, if any) and mark invalid DOIs.
  - Verify and clean DOIs: For the selected items, look up full DOIs (replacing stored DOIs, if any), verify that stored DOIs are valid, and mark invalid DOIs.
    - This function also removes unnecessary prefixes (such as `doi:`, `https://doi.org/`, or a publisher URL prefix) from the DOI field.

### Compatibility

  - **Zotero 7** and later are supported.
  - For Zotero 6 support, use the original [zotero-shortdoi](https://github.com/bwiernik/zotero-shortdoi) version 1.5.1 or earlier.

### How to Install

#### From GitHub Actions (CI build)

  1. Go to the [Actions tab](https://github.com/socratic-irony/zotero-8-shortdoi/actions) and click on the latest successful workflow run.
  2. Download the **zotero-doi-manager-xpi** artifact. This downloads a `.zip` file.
  3. **Extract the `.zip` file** — the actual `.xpi` plugin file is inside it. (GitHub Actions wraps all artifacts in an extra ZIP layer.)
  4. In Zotero, go to Tools → Add-Ons.
  5. Drag the extracted `.xpi` file into the Add-Ons window, or click the Gear ⚙ button → Install Add-On from File… and select the `.xpi` file.

#### From a release

  1. Download the `.xpi` file from the [latest release](https://github.com/socratic-irony/zotero-8-shortdoi/releases/latest).
     - If you are using Firefox, right-click the file link and choose Save Link As…
  2. In Zotero, go to Tools → Add-Ons.
  3. Drag the downloaded `.xpi` file into the Add-Ons window, or click the Gear ⚙ button → Install Add-On from File… and select the `.xpi` file.

> **⚠️ Note:** Do not try to install the `.zip` artifact file directly — you must extract the `.xpi` file from it first. Attempting to install the `.zip` will produce an error like "The add-on could not be installed. It may be incompatible with this version of Zotero."

### Building

Package the plugin as an XPI file:

```bash
./build.sh
```

Or manually:

```bash
zip -r zotero-doi-manager.xpi content/ locale/ skin/ bootstrap.js manifest.json prefs.js zoteroshortdoi.js
```

### License

Copyright (C) 2017 Brenton M. Wiernik

Distributed under the Mozilla Public License (MPL) Version 2.0.
