# reusable-chat-widget

It's a reusable widget component that you can add to your website.

## Getting Started

These instructions will get you a copy of the Withget platform up and running on your local machine.

To get a Chat Widget env running you need run the following commands:

```bash
$ git clone https://github.com/thebotmakers/reusable-chat-widget.git
$ yarn install
$ yarn start
```

## Use the widget in your website

To get a Chat Widget env running in your website follow this steps:

1. Go to project folder and build:

```bash
$ yarn build
```

2. Copy the generated `build` folder to your project (inside the 'public' folder)

3. Add the following imports to your `index.html` file:

```html
  <link rel="manifest" href="/widgetBuild/manifest.json">
  <link rel="shortcut icon" href="/widgetBuild/favicon.ico">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="/widgetBuild/static/css/main.c871f12f.css" rel="stylesheet">

```

4. Add the widget:

```html
 <!-- Widget -->
  <div id="root"></div>
  <script type="text/javascript" src="/widgetBuild/static/js/main.36e072de.js"></script>
```

(We use the div id="root" to display the widget in that section.)