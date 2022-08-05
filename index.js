(function () {
  "use strict";

  const { renderWidget, GlobalNavbar, AskGuruSuccessModal } = HUIWidgets;

  const renderAskGuruSuccessModal = () => {
    const data = {
      title: "Thanks for asking!",
      description: "We’ll email you when a property expert answers.",
      imageAltText: "AskGuru Success Logo",
      isLoggedIn: false,
      totalPostedQuestions: 0,
    };

    const config = {
      shouldShow: true,
      onHide: () => {},
      gotoHomeCTA: {
        name: "Return to AskGuru Home",
        href: "/",
      },
      viewPastQuestionsCTA: {
        name: "View your past questions",
        href: "/",
      },
    };

    const askGuruSuccessProps = {
      data,
      config,
    };

    const containerElement = document.createElement("div");
    document.body.append(containerElement);
    renderWidget(AskGuruSuccessModal, askGuruSuccessProps, containerElement);
  };

  const renderGlobalNavbar = () => {
    const navLinks = [
      {
        text: "Buy",
        url: "/buy",
        icon: "pgicon-search",
        tooltip: "Buy prooperty in Singapore",
      },
      {
        text: "Rent",
        url: "/rent",
        icon: "pgicon-search",
        tooltip: "Rent prooperty in Singapore",
      },
      {
        text: "Condos",
        url: "/condos",
        icon: "pgicon-condo",
        tooltip: "Singapore Condos",
      },
      {
        text: "New Launch",
        url: "/new-launch",
        icon: "pgicon-newproject",
        tooltip: "New Property Launches",
      },
      {
        text: "Commercial",
        url: "/commercial",
        icon: "pgicon-commercial",
        tooltip: "",
        mobileOnly: true,
      },
      {
        text: "Find Agent",
        url: "/find-agent",
        icon: "pgicon-agent",
        tooltip: "Find Singapore Property Agent",
      },
      {
        text: "News",
        url: "/news",
        icon: "pgicon-list",
        tooltip: "Singapore Property Market Information",
      },
    ];

    const navDropdown = {
      title: "More",
      tooltip: "More",
      items: [
        {
          text: "Property Guide",
          url: "/property-guide",
          icon: "pgicon-tips",
          tooltip: "Singapore Property Guides",
        },
        {
          text: "Home Loan Tool",
          url: "/loan-tool",
          icon: "pgicon-calculator",
          tooltip: "Home Loan Tools",
        },
        {
          text: "Overseas",
          url: "/overseas",
          icon: "pgicon-overseas",
          tooltip: "Singapore Overseas Property",
        },
      ],
    };

    const agentLinks = {
      title: "For Agent",
      items: [
        {
          text: "Agent offering",
          url: "/agent-offering",
          icon: "pgicon-agent",
          tooltip: "Agent Offerings",
        },
        {
          text: "AgentNet login",
          url: "/agentnext",
          icon: "pgicon-logomark",
          tooltip: "AgentNet",
        },
      ],
    };

    const quickLinks = {
      title: "QuickLinks",
      tooltip: "Quick Links",
      items: [
        {
          text: "Shortlist",
          url: "/short-list",
          icon: "pgicon-heart-o",
          tooltip: "Shortlist",
        },
        {
          text: "Hidden Property",
          url: "/hidden-property",
          icon: "pgicon-hide",
          tooltip: "Hidden Property",
        },
        {
          text: "Saved Searches",
          url: "/saved-searches",
          icon: "pgicon-bookmark",
          loginRequired: true,
          tooltip: "Saved Searches",
        },
      ],
    };

    const myAccountLinks = {
      title: "My Account",
      tooltip: "My Account",
      items: [
        {
          text: "Profile",
          url: "/profile",
          tooltip: "Profile",
        },
        {
          text: "Email Preferences",
          url: "/profile",
          tooltip: "Email Preferences",
        },
        {
          text: "Enquiries",
          url: "/profile",
          tooltip: "Enquiries",
        },
        {
          text: "AskGuru Past Questions",
          url: "/profile",
          tooltip: "AskGuru Past Questions",
        },
        {
          text: "Share Feedback",
          url: "/profile",
          tooltip: "Share Feedback",
        },
      ],
    };

    const locales = [
      {
        title: "EN",
        key: "en",
        icon: "./flag-uk.svg",
      },
      {
        title: "BM",
        key: "bm",
        icon: "./flag-my.svg",
      },
    ];

    const data = {
      logo: "./logo-dd-horizontal.svg",
      navLinks,
      navDropdown,
      agentLinks,
      quickLinks,
      myAccountLinks,
      loginDetail: {
        isLoggedIn: true,
        onLogin: () => {},
        onLogout: () => {},
      },
      localeDetail: {
        locales,
        currentLocaleKey: "en",
        onLocaleChange: () => {},
      },
      notificationButton: {
        hasNewFeed: true,
        shouldHighlight: true,
        onClick: () => {},
      },
    };

    const globalNavbarProps = {
      data,
      context: {
        parent: "Global Navbar frame",
        scope: "Global Navbar",
      },
    };

    const navbarContainerElement = document.getElementById("navbar");
    renderWidget(GlobalNavbar, globalNavbarProps, navbarContainerElement);
  };

  document.addEventListener("DOMContentLoaded", function () {
    console.log("document ready");

    // 1. test render askguru modal
    // renderAskGuruSuccessModal();

    // 2. test render global navbar
    renderGlobalNavbar();
  });
})();
