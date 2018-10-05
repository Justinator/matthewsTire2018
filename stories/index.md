---
layout: single-column
title: Matthews Tire Stories
category: stories
heading: Satisfied Customers Are Top Priority.
description: Since 1952 Matthews Tire™ has been the Fox River Valley’s best source for tires and auto service. Customers in Green Bay, Appleton, Fond du Lac and Waupaca trust Matthews Tire.
---

We do whatever it takes to keep our customers safe and secure on the road. Don’t take our word for it, see what our customers have to say ...

{% for testimonial in site.data.testimonials %}
<h1>{{ testimonial.source }}</h1>
<blockquote>{{ testimonial.quote }}</blockquote>
<iframe width="100%" height="400" src="{{ testimonial.video }}" frameborder="0" allowfullscreen></iframe>
{% endfor %}
