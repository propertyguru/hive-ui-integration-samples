(function () {
  const { renderWidget, GlobalNavbar, GlobalFooter } = HUIWidgets;

  // should be retrieved based on host
  const domain = "propertyguru.com.my";

  const logoMap = {
    "propertyguru.com.my":
      "https://cdn.pgimgs.com/hive-ui/static/logo/pg-horizontal.svg",
  };

  const containerIds = {
    header: "global-navbar",
    footer: "global-footer",
  };

  const fetchFile = (locale, name) => {
    return fetch(`./data/${locale}/${name}.json`).then((response) =>
      response.json()
    );
  };

  const loadWithLocale = (locale = "en") => {
    Promise.all([
      fetchFile(locale, "header"),
      fetchFile(locale, "footer"),
    ]).then((data) => {
      render({ header: data[0], footer: data[1] });
    });
  };

  const handleSearch = (q) => {
    window.location.replace(`https://${domain}/property-for-sale/p/${q}`);
  };

  const render = ({ header, footer }) => {
    const {
      navLinks,
      navDropdown,
      agentLinks,
      quickLinks,
      myAccountLinks,
      locales,
    } = header;

    const headerData = {
      logo: logoMap[domain],
      navLinks,
      navDropdown,
      agentLinks,
      quickLinks,
      myAccountLinks,
      localeDetail: {
        locales,
        currentLocaleKey: "en",
        onLocaleChange: (locale) => {
          // uncomment when you have all the locale files ready
          // loadWithLocale(locale);
        },
      },
    };

    const footerData = {
      contactSegment: {
        contactLinks: footer.contacts,
        searchItems: {
          onSubmit: handleSearch,
          placeholder: footer.search.placeholder,
        },
      },
      sitemapSegment: footer.sitemap,
      copyrightSegment: footer.copyright,
      countrySelectSegment: footer.countries,
      socialSegment: footer.social,
      marketSegment: footer.markets,
      seoSegment: {
        ...footer.seo,
        primary: HTMLReactParser(footer.seo.primary),
        secondary: HTMLReactParser(footer.seo.secondary),
      },
    };

    renderWidget(GlobalNavbar, { data: headerData }, containerIds.header);
    renderWidget(GlobalFooter, { data: footerData }, containerIds.footer);
  };

  document.addEventListener("DOMContentLoaded", function () {
    loadWithLocale();
  });
})();
