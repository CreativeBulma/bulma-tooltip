---
title: "Get Started"
date: "2020-03-21"
menu: "main"
weight: 2
draft: false
---

# Get started

**You only need 1 CSS file to use BulmaTooltip**

## Installation
### First, let's install the component!
There are several ways to get started with BulmaTooltip.

{{< tabs tabTotal="3" tabID="1" tabName1="1. NPM" tabName2="2. CDN" tabName3="3. Github" >}}
{{< tab tabNum="1" >}}
Use npm to install the `bulma-tooltip` package **recommended**
```shell
npm install @creativebulma/bulma-tooltip
```
{{< /tab >}}

{{< tab tabNum="2" >}}
Use the [jsDelivr](https://jsdelivr.com) CDN to link to the BulmaTooltip stylesheet
```html
https://www.jsdelivr.com/package/npm/@creativebulma/bulma-tooltip
```
{{< /tab >}}

{{< tab tabNum="3" >}}
Use the GitHub repository to get the latest development version.

Download from the repository [https://github.com/CreativeBulma/bulma-tooltip/tree/master/dist/](https://github.com/CreativeBulma/bulma-tooltip/tree/master/dist/)
{{< /tab >}}
{{< /tabs >}}

## Usage
Tooltips are displayed into a small grey box on top of the element. All you have to do is to add `tooltip` dataset with the text you want to display as value.

### Styles
#### Default
{{< preview id="default" lang="html" >}}
<p>Lorem ipsum dolor sit amet, <span data-tooltip="Tooltip content">consectetur adipisicing elit</span>. Ipsa fugit dolores earum quod distinctio ducimus non dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo veniam error, hic cumque.</p>
{{< /preview >}}

Tooltip can be used on any type of HTML element supporting dataset.
{{< preview id="button" lang="html" >}}
<button class="button" data-tooltip="Tooltip Text">top tooltip</button>
{{< /preview >}}

#### With Arrow
For design purpose, you can display an arrow on the tooltip box by adding `has-tooltip-arrow` class on the element.
{{< preview id="arrow" lang="html" >}}
<p>Lorem ipsum dolor sit amet, <span class="has-tooltip-arrow" data-tooltip="Tooltip content">consectetur adipisicing elit</span>. Ipsa fugit dolores earum quod distinctio ducimus non dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo veniam error, hic cumque.</p>
{{< /preview >}}

### Position
Tooltip position can be changed by adding one of the following classes to the HTML element containing the tooltip: `has-tooltip-right`, `has-tooltip-bottom`, `has-tooltip-left`.
{{< preview id="position" lang="html" >}}
<p>Lorem ipsum dolor sit amet, <span class="has-tooltip-arrow" data-tooltip="Tooltip content on top">consectetur adipisicing elit</span>. Ipsa fugit <span class="has-tooltip-arrow has-tooltip-right" data-tooltip="Right tooltip content">dolores</span> earum quod distinctio ducimus non dignissimos <span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Bottom tooltip content">molestias</span> amet corrupti voluptatum assumenda impedit beatae <span class="has-tooltip-arrow has-tooltip-left" data-tooltip="Left tooltip content">veritatis</span> nemo veniam error, hic cumque.</p>
{{< /preview >}}

### Multiline
Display long tooltip content by adding `has-tooltip-multiline` class on the element.

You can change tooltip text alignement by adding `has-tooltip-text-left`, `has-tooltip-text-centered` or `has-tooltip-text-right` modifier.
{{< preview id="multiline" lang="html" >}}
<p>Lorem ipsum dolor sit amet, <span class="has-tooltip-arrow has-tooltipl-multiline" data-tooltip="Multiline&#10;Content&#10;World!">consectetur adipisicing elit</span>. Ipsa fugit dolores earum quod distinctio ducimus non dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo veniam error, hic cumque.</p>
{{< /preview >}}

### Colors
Tooltip supports colors modifier by adding one of the following classes to the HTML element containing the tooltip: `has-tooltip-info`, `has-tooltip-warning`, `has-tooltip-primary`, `has-tooltip-success`, `has-tooltip-danger`.
{{< preview id="colors" lang="html" >}}
<p>Lorem ipsum <span class="has-tooltip-arrow has-tooltip-info" data-tooltip="Info tooltip content">dolor</span> sit amet, <span class="has-tooltip-arrow has-tooltip-warning" data-tooltip="Warning tooltip content">consectetur adipisicing elit</span>. Ipsa fugit <span class="has-tooltip-arrow has-tooltip-right has-tooltip-success" data-tooltip="Success tooltip content">dolores</span> earum quod distinctio ducimus non dignissimos <span class="has-tooltip-arrow has-tooltip-bottom has-tooltip-primary" data-tooltip="Primary tooltip content">molestias</span> amet corrupti voluptatum assumenda impedit beatae <span class="has-tooltip-arrow has-tooltip-left has-tooltip-danger" data-tooltip="Danger tooltip content">veritatis</span> nemo veniam error, hic cumque.</p>
{{< /preview >}}

### Always active
You can set tooltip to be always visible by adding `has-tooltip-active` class on the element.
{{< preview id="active" lang="html" >}}
<p>Lorem ipsum dolor sit amet, <span class="has-tooltip-active" data-tooltip="Tooltip content">consectetur adipisicing elit</span>. Ipsa fugit dolores earum quod distinctio ducimus non dignissimos molestias amet corrupti voluptatum assumenda impedit beatae veritatis nemo veniam error, hic cumque.</p>
{{< /preview >}}

### Responsiveness
#### Position
Tooltip position can be based on responsiveness breakpoints by adding one of the following classes to the HTML element containing the tooltip:
* `has-tooltip-#{$direction}-mobile`
* `has-tooltip-#{$direction}-tablet`
* `has-tooltip-#{$direction}-tablet-only`
* `has-tooltip-#{$direction}-touch`
* `has-tooltip-#{$direction}-desktop`
* `has-tooltip-#{$direction}-desktop-only`
* `has-tooltip-#{$direction}-until-widescreen`
* `has-tooltip-#{$direction}-widescreen`
* `has-tooltip-#{$direction}-widescreen-only`
* `has-tooltip-#{$direction}-until-fullhd`
* `has-tooltip-#{$direction}-fullhd`

Don't forget to replace `#${direction}` by one of the avaiblable direction: `top`, `right`, `bottom`, `left`.

### Text alignement
* `has-tooltip-text-#{$direction}-mobile`
* `has-tooltip-text-#{$direction}-tablet`
* `has-tooltip-text-#{$direction}-tablet-only`
* `has-tooltip-text-#{$direction}-touch`
* `has-tooltip-text-#{$direction}-desktop`
* `has-tooltip-text-#{$direction}-desktop-only`
* `has-tooltip-text-#{$direction}-until-widescreen`
* `has-tooltip-text-#{$direction}-widescreen`
* `has-tooltip-text-#{$direction}-widescreen-only`
* `has-tooltip-text-#{$direction}-until-fullhd`
* `has-tooltip-text-#{$direction}-fullhd`

Don't forget to replace `#${direction}` by one of the avaiblable direction: `left`, `centered`, `right`.

#### Hide tooltip
|Class|Mobile|Tablet|Desktop|Widescreen|FullHD|
|--- |--- |--- |--- |--- |--- |
|has-tooltip-hidden-mobile|{{< tag danger "hidden" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|
|has-tooltip-hidden-tablet-only|{{< tag success "visible" >}}|{{< tag danger "hidden" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|
|has-tooltip-hidden-desktop-only|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag danger "hidden" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|
|has-tooltip-hidden-widescreen-only|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag danger "hidden" >}}|{{< tag success "visible" >}}|
|has-tooltip-hidden-touch|{{< tag danger "hidden" >}}|{{< tag danger "hidden" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|
|has-tooltip-hidden-tablet|{{< tag success "visible" >}}|{{< tag danger "hidden" >}}|{{< tag danger "hidden" >}}|{{< tag danger "hidden" >}}|{{< tag danger "hidden" >}}|
|has-tooltip-hidden-desktop|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag danger "hidden" >}}|{{< tag danger "hidden" >}}|{{< tag danger "hidden" >}}|
|has-tooltip-hidden-widescreen|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag danger "hidden" >}}|{{< tag danger "hidden" >}}|
|has-tooltip-hidden-fullhd|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag success "visible" >}}|{{< tag danger "hidden" >}}|
