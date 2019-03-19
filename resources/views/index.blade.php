<!doctype html>
<html lang="el">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Σχεδιασμός και ανάπτυξη εφαρμογών ιστού, τυπογραφία, γραφικές τέχνες &amp; άλλα!">
        <meta name="keywords" content="σχεδιασμός,ανάπτυξη,ιστός,εφαρμογές,τυπογραφία,γραφικές,τέχνες">
        <meta name="author" content="Sta8is @deepSeaCoding.com">

        <link rel="stylesheet" href="/css/animate.min.css">
        <link rel="stylesheet" href="/css/app.css">
        <link rel="profile" href="https://gmpg.org/xfn/11">
        <link rel="icon" href="/favicon.ico" type="image/x-icon">

        <title>deepSeaCoding.com</title>
    </head>
    @include('cookieConsent::index')

    <body>
        <div id="app" class="container" style="max-width: 800px">

          <app></app>

        </div>
    </body>

    <script type="text/javascript" src="js/app.js"></script>
</html>
