var host = "jacobroy.quebec";
    if ((host == window.location.host) && (window.location.protocol != "https:"))
        window.location.protocol = "https";

    $(document).ready(function() {
    $("img").unveil(1, function() {
      $(this).load(function() {
      this.style.opacity = 1;
      });
    });
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-37323197-2', 'auto');
  ga('require', 'linkid');
  ga('send', 'pageview');