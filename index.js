(function () {
  const { renderWidget, GlobalNavbar } = HUIWidgets;

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

    renderWidget(GlobalNavbar, { data: headerData }, containerIds.header);
  };

  document.addEventListener("DOMContentLoaded", function () {
    loadWithLocale();
  });
})();
