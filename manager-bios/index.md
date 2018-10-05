---
layout: single-column
title: Manager Bios
heading: Our Managers Combine Experience with Local Knowledge.
description: Matthews Tire™ is the Fox River Valley’s best source for tires and auto service. The best managers work at Matthews Tire in Green Bay, Appleton, Fond du Lac and Waupaca.
---

Every Matthews Tire™ manager is a tire and service expert. Bring them your questions and get the answers you need to stay safe and secure on the road!

{% for manager in site.managers %}
<div class="row">
  <div class="col-sm-4">
    <img src="/img/{{ manager.image }}">
  </div>
  <div class="col-sm-8">
    <h2>{{ manager.name }}</h2>
    <h3>{{ manager.title }}</h3>
    {{ manager.content }}
  </div>
</div>
{% endfor %}

